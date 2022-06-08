<template>
  <div>
    <div class="wallet--container">
      <div class="top">
        <div class="">
          <Wallet />
        </div>
        <div class="top--right" v-if="getUser.role === 2">
          <div class="asset--box bg-white shadow-sm p-3">
            <div>
              <div>
                <div class="mb-3">
                  <label for="" class="mb-1">Asset</label>
                  <select name="" id="" v-model="payload.asset">
                    <option value="">Select Asset</option>
                    <option value="BNB">BNB</option>
                    <option value="USDT">USDT</option>
                  </select>
                  <!-- <input class="" type="text" placeholder="Select Asset"> -->
                </div>
                <div>
                  <!-- <label class="mb-1" for="">Currency</label> -->
                  <select name="" id="" v-model="payload.currency">
                    <option value="">Select Currency</option>
                    <option value="NGN">NGN</option>
                    <option value="USD">USD</option>
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
                <button class="main--button" @click="createOrder()">Create</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- other Content -->

    <section>
      <div class="bottom">
        <div class="table">
          <Table />
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
export default {
  components: {
    Wallet,
    Table,
    //   ApexCharts
  },
  data() {
    return {
      payload: {
        asset: "",
        amountFrom: "",
        currency: "",
        amount_min: "",
        amount_max: "",
        payment_method: "Tradax Payment",
        payment_time: "",
        userId: this.$store.getters.getUser[0].id,
      },
    };
  },
  methods:{
      createOrder(){
          console.log(this.payload);
      }
  },
  mounted(){
      
  },
  computed: {
    getUser() {
      console.log(this.$store.getters.getUser[0]);
      return this.$store.getters.getUser[0];
    },
  },
};
</script>