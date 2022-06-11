<template>
  <div>
    <div class="wallet--container">
      <div class="top">
        <div class="">
          <Wallet />
        </div>
        <div class="text-center d-flex align-items-center" v-if="loader">
          <span>
            Checking Merchant Status . . .
          </span>
        </div>
        <div v-show="userData.role === 1">
          <button class="btn btn-danger">You are not yet a verified Merchant</button>
        </div>
        <div class="top--right" v-if="userData.role === 2 " >
          <div class="asset--box bg-white shadow-sm p-3">
            <div>
              <div>
                <div class="mb-3">
                  <label for="" class="mb-1">Asset</label>
                  <select name="" id="" v-model="payload.asset">
                    <option value="">Select Asset</option>
                    <option v-for="wallet in wallets" :key="wallet.id" :value="wallet.coin_type"> {{ wallet.coin_type }} </option>
                  </select>
                  <!-- <input class="" type="text" placeholder="Select Asset"> -->
                </div>
                <div>
                  <!-- <label class="mb-1" for="">Currency</label> -->
                  <select name="" id="" v-model="payload.currency">
                    <option value="">Select Currency</option>
                    <option value="NGN">NGN</option>
                    <!-- <option value="USD">USD</option> -->
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div class="amount--box bg-white shadow-sm p-3">
            <h6 class="small font-weight-bold" style="color: var(--main-color)">
              Total Amount ($)
            </h6>
            <div>
              <div class="mt-2">
                <!-- <label for="" class="mb-2 mt-2">Amount:</label> -->
                <input
                  class=""
                  type="text"
                  placeholder="$0.0000"
                  v-model="payload.amountFrom"
                />
                <small class="text-secondary" style="font-size: 0.7rem"
                  >Balance 0.00</small
                >
              </div>

              <!-- <h6 class=" my-3 small font-weight-bold" style="color: var(--main-color)">Total Amount ($)</h6> -->
              <div class="d-flex align-items-center mt-2" style="gap: 10px">
                <div>
                  <label for="">Low</label>
                  <input
                    type="text"
                    placeholder="Enter Min Amount"
                    v-model="payload.amount_min"
                  />
                </div>
                <div>
                  <label for="">High</label>
                  <input
                    type="text"
                    placeholder="Enter Max Account"
                    v-model="payload.amount_max"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="payment--box bg-white shadow-sm p-3">
            <div>
              <div class="mb-3">
                <label class="mb-1" for="">Payment Method</label>
                <input
                  class=""
                  type="text"
                  placeholder="Payment Method"
                  v-model="payload.payment_method"
                />
              </div>
              <div>
                <label class="mb-1" for="">Payment Time Limit</label>
                <input
                  type="text"
                  placeholder="Set Payment Time Limit"
                  v-model="payload.payment_time"
                />
              </div>
              <div class="mt-3">
                <div class="d-flex justify-content-center" v-if="loading">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <button class="main--button" v-else @click="createOrder()">Create</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>


     <div v-show="checking">
            <app-loader/>
        </div>
    <!-- other Content -->

    <section>
      <div class="bottom">
        <div class="table">
          <Table @loader="setLoading"/>
        </div>
        <!-- <div class="asset--box shadow-sm bg-white shadow-sm p-3 d-flex">
                    <div class="d-flex flex-column justify-content-around">
                        <h6 class="small">You have reached 70% of your daily deposit of $10,000</h6>
                        <span role="button" class="small font-weight-bold" style="color:var(--main-color)">Expand Limit</span>
                    </div>
                    <div id="chart"></div>
                </div>
                <div class="asset--box2">
                    <div>
                        <div class="img--top shadow-sm">
                            <img src="@/assets/img/image1.png" width="100%" alt="" srcset="">
                        </div>
                        <div class="bg-white pt-2 pl-2 shadow-sm" style="border-radius:0 0 10px 10px">
                            <h6 class="small text-dark font-weight-bold">This week in Crypto</h6>
                            <p class="small text-secondary" style="font-size:0.7rem">Dec. 23, 2021</p>
                            <p class="small mt-1 text-muted" style="font-size:0.7rem">Bitcoin is up 5% , Etherum is up 12% , El salvador buy the “deep” and more...</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <span role="button" class="small font-weight-bold" style="font-size:0.6rem">Show All News</span>
                    </div>
                </div> -->
      </div>
    </section>
  </div>
</template>


<script>
// import ApexCharts from 'apexcharts'
import Wallet from "@/components/dashboard/walletView.vue";
import Table from "@/components/dashboard/tableView.vue";
import appLoader from '@/components/static/appLoader.vue';
export default {
  components: {
    Wallet,
    Table,
    appLoader,
    //   ApexCharts
  },
  data() {
    return {
      loader: false,
      userData: {},
      wallets: [],
      loading: false,
      checking: false,
      payload: {
        asset: "",
        amountFrom: "",
        currency: "",
        amount_min: "",
        amount_max: "",
        payment_method: "Tradax Payment",
        payment_time: "",
        // userId: this.$store.getters.getUser[0].id,
      },
    };
  },
  methods:{
      createOrder(){
          console.log(this.payload);
          this.loading = true
          this.$axios.post('createOffer', this.payload)
          .then((res)=>{
            console.log(res);
          })
          .catch((err)=>{
            console.log(err);
            this.$toastify({
              text: 'Something went wrong',
              className: "info",
              style: {
                  background: "red",
              }
          }).showToast();
          })
          .finally(()=>{
            this.payload = {}
          })
      },
      setLoading(){
        this.checking = true
      },
      getUser(){
        this.loader = true
        this.$axios.get('/usersDetails')
        .then((res)=>{
          console.log(res);
          this.userData = res.data.user_details.profile
          console.log(res.data.user_details.profile)
        })
        .catch((err)=>{
          console.log(err);
        })
        .finally(()=>{
          this.loader = false
        })
      },
      getWallets(){
        this.$axios.get('/usersDetails')
        .then((res)=>{
          console.log(res);
          this.wallets = res.data.user_details.wallets
          console.log(this.wallets)
        })
        .catch((err)=>{
          console.log(err);
        })
      }
  },
  mounted(){
      this.getUser()
      this.getWallets()
  },
  computed: {
    
  },
};
</script>