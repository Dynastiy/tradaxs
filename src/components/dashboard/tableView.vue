<template>
  <div>
    <div>
      <div class="">
          <div v-if="assetsLoading">
              Fetching Data . . .
          </div>
          <div v-else>
              <h5 class="font-weight-bold mb-3">Cryto Assets</h5>
              <div class="row">
                
            <div class="col-md-8" v-for="asset in assets" :key="asset.id">
                <div
                    @click.once="viewMore(asset)"
                    role="button"
                class="card px-2 py-3"
                style="border-radius: 10px"
                >
                <div class="card-title">
                    <a role="button" >{{
                    asset.asset_name
                    }}</a>
                </div>
                <div class="px-1 d-flex justify-content-between">
                    <span style="font-size: 12px">$<strong>0.00</strong></span>
                    <strong
                    class="justify-content-end text-success"
                    style="font-size: 12px"
                    >$<span id="btc-usd">0.00</span></strong
                    >
                </div>
                </div>
            </div>
            </div>
          </div>
            
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      assets: [],
      route_id: "",
      selected_coin: "",
      assetsLoading: false,
      wallets: []
    };
  },
  methods: {
    getAssets() {
        this.assetsLoading = true
      this.$axios
        .get("allAssets")
        .then((res) => {
          // console.log(res.data.data);
          this.assets = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(()=>{
            this.assetsLoading = false
        })
    },
    viewMore(asset) {
      this.$emit('loader')
      let payload = {
        coin_type: asset.asset_name,
      };
      (this.selected_coin = asset.asset_name);
      console.log(this.selected_coin);
      console.log(payload);
      this.$axios
        .post("/create_wallet", payload)
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.getWallets()
          this.checkWallet()
          this.$router.push(`/wallet/${this.selected_coin}`);
        });
    },
    checkWallet() {
      // let obj = this.wallets
      // console.log(obj);
      // const value = obj.find(elem => elem.coin_type === this.selected_coin);
      // console.log(value.coin_type); 
      // this.route_id = value.coin_type
    },
    getWallets(){
      this.$axios.get('/usersDetails')
    .then((res)=>{
      console.log(res);
      this.wallets = res.data.user_details.wallets
      console.log(res.data.user_details.wallets)
    })
    .catch((err)=>{
      console.log(err);
    })
    },
    getUser(){
    this.$axios.get('/usersDetails')
    .then((res)=>{
      console.log(res);
      this.userData = res.data.user_details.profile
      console.log(res.data.user_details.profile)
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  },
  mounted() {
    this.getAssets();
    this.getUser();
    this.getWallets()
  },
};
</script>

<style>
.col-md-8{
    padding: 0;

margin: 0;}
</style>