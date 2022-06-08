<template>
  <div>
    <div>
        <div v-show="loading">
            <app-loader/>
        </div>
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

      <!-- Mobile Table  -->
     
    </div>
  </div>
</template>

<script>
import appLoader from '../static/appLoader.vue';
export default {
  components: { appLoader },
  data() {
    return {
      assets: [],
      route_id: "",
      selected_coin: "",
      loading: false,
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
          console.log(res.data.data);
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
      this.loading = true
      let payload = {
        coin_type: asset.asset_name,
        userId: this.$store.getters.getUser[0].id,
      };
      (this.selected_coin = asset.asset_name), 
      console.log(payload);
      this.$axios
        .post("/create_wallet", payload)
        .then((res) => {
          console.log(res.data.wallet);
          let wallet = res.data.wallet;
          this.$store.dispatch("updateWallet", { wallet });
          
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.checkWallet()
          this.$router.push(`/wallet/${this.route_id}`);
        });
        this.loading = false
    },
    checkWallet() {
      // const data = "BTC";
      const obj = this.wallets;
      console.log(obj);
      const greaterThanTen = obj.find(
        (element) => element.wallet.coin_type == this.selected_coin
      );
      this.route_id = greaterThanTen.wallet.coin_type;
      console.log(greaterThanTen.wallet.coin_type);
    },
  },
  mounted() {
    this.getAssets();
    this.wallets = this.$store.getters.getWallets
  },
  beforeUpdate() {
    console.log(`At this point, Virtual DOM has not re-rendered or patched yet.`)
    // Logs the counter value every second, before the DOM updates.
    console.log(this.wallets)
  }
};
</script>

<style>
.col-md-8{
    padding: 0;

margin: 0;}
</style>