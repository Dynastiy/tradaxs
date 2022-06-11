<template>
  <div>
    <div class="wallet--container">
      <div class="">
        <div class="">
           <div class="">
               <div class="wallet">
            <div class="left--wallet">
                <div>
                    <div class="right--wallet d-flex align-items-center justify-content-between">
                        <h5 class="text-white mb-4">Wallet Balance</h5>
                        <div class="right-wallet-img">
                            <img src="@/assets/img/wallet.png" alt="" width="" srcset="">
                        </div>
                    </div>
                <h6 class="small text-white mb-3">Available Balance in USD</h6>
                <h4 class="text-white mb-3"> <span v-if="coin_details.balance"> {{ coin_details.balance }} </span> <span v-else>0</span>  </h4>
                <div class="d-flex" style="gap:30px">
                    <div class="text-center">
                        <h6 class="text-white small mb-1">Balance</h6>
                        <h5 class="text-white">  <span v-if="coin_details.balance"> {{ coin_details.balance }} </span> <span v-else>0</span> </h5>
                    </div>
                    <div class="text-center">
                        <h6 class="text-white small mb-1">Wallet</h6>
                        <h5 class="text-white"> {{ coin_details.coin_type }} </h5>
                    </div>
                </div>
                
                </div>

                <div class="my-3 wallet--address">
                        <h6 class="text-white small mb-1">Address</h6>
                        <p class="text-white"> {{ coin_details.address }} </p>
                    </div>

                <div>
                    <p class="small text-white">Created {{ timeStamp(coin_details.created_at)}} </p>
                </div>
            </div>
        </div>
           </div>
        </div>
        <div class="row">
          <div class="bg-white shadow-sm p-3 mt-4 rounded-lg col-lg-8">
            <div class="table-responsive">
              <table class="table table-hover table-centered table-nowrap">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Type</th>
                    <th scope="col">Currency</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Limits</th>
                    <th scope="col">Payment Method</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(offer, index) in offers" :key="index">
                    <th scope="row"> {{ index+1 }} </th>
                    <td class="text-uppercase"> {{ offer.offer_type }} </td>
                    <td> {{ offer.currency }} </td>
                    <td> ${{ offer.price }} </td>
                    <td> ${{ offer.amount_min }} - ${{ offer.amount_max }} </td>
                    <td> {{ offer.payment_method }} </td>
                    <td><button class="main--button">Buy Now</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import {
  nairaFilter,
  percentFilter,
  percentageFilter,
  timeStamp,
} from "@/plugins/filter";
export default {
  data() {
    return {
      nairaFilter,
      percentFilter,
      percentageFilter,
      timeStamp,
      id: this.$route.params.id,
      coin_details: {},
      addressTo: "",
      amount: "",
      loading: false,
      offers: []
    };
  },
  methods: {
    getOrder(){
      this.$axios.get('offer')
      .then((res)=>{
        console.log(res);
        this.offers = res.data.data
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  },
  mounted() {
    this.getOrder()
  },
};
</script>