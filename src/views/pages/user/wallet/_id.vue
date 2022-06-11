<template>
    <div>
        <div class="wallet--container">
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
                        <div>
                            <h6 class="text-white small mb-1">Wallet</h6>
                        </div>
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
           <div class="top--right mt-4">
               <div class=" bg-white shadow-sm p-3">
                   <h5>Send To</h5>
                   <div>
                       <form action="" @submit.prevent="sendTransaction()">
                           <div class="mb-3">
                               <label for="" class="mb-1">Address</label>
                               <input class="" type="text" v-model="addressTo" placeholder="Enter Wallet Address">
                           </div>
                           <div>
                               <label class="mb-1" for="">Amount</label>
                               <input type="number" v-model="amount" placeholder="Enter Amounts">
                           </div>

                           <div>
                               <div class="d-flex justify-content-center mt-3" v-if="loading">
                                <div class="spinner-border" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                               <button v-else class="view--more w-100 mt-3">
                                   SEND
                               </button>
                           </div>
                       </form>
                   </div>
               </div>
           </div>
        </div>
        </div>
    
    </div>
</template>


<script>
import {nairaFilter, percentFilter, percentageFilter, timeStamp} from '@/plugins/filter'
export default {
        data() {
         return {
             nairaFilter, percentFilter, percentageFilter, timeStamp,
             id: this.$route.params.id,
             coin_details: {},
             addressTo: "",
             amount: "",
             loading: false,
             checkedMail: []
         }
        },
        methods:{
            async getWallet(){
                // POST request using fetch with async/await
                    const requestOptions = {
                        method: "POST",
                        data: { "coin_type": String(this.$route.params.id)},
                    };
                    const response = await this.$axios("userWallets", requestOptions);
                    this.coin_details = response.data.data
            },
            sendTransaction(){
                this.loading = true
                let formData = new FormData()
                formData.append('coin_type', this.$route.params.id)
                // formData.append('userId', this.$store.getters.getUser[0].id)
                formData.append('amount', this.amount)
                formData.append('addressTo', this.addressTo)
                this.$axios.post('send_transaction', formData)
                .then((res)=>{
                    console.log(res);
                })
                .catch((err)=>{
                    console.log(err);
                })
                .finally(()=>{
                    this.loading = false;
                    this.amount = '',
                    this.addressTo = ''
                })
            }

        },
        mounted() {
            console.log(this.$store.getters.loggedIn);
           this.getWallet();
        },
}
</script>