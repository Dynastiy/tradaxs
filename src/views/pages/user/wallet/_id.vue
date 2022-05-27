<template>
    <div>
        <div class="wallet--container">
            <div class="">
           <div class="">
               <div class="wallet">
            <div class="left--wallet">
                <div>
                    <h5 class="text-white mb-4">Wallet Balance</h5>
                <h6 class="small text-white">Available Balance in USD</h6>
                <h4 class="text-white mb-3">$34,510.15</h4>
                <div class="d-flex" style="gap:30px">
                    <div class="text-center">
                        <h6 class="text-white small mb-1">Transactions</h6>
                        <h5 class="text-white">$34,510.15</h5>
                    </div>
                    <div class="text-center">
                        <h6 class="text-white small mb-1">Wallets</h6>
                        <h5 class="text-white">3</h5>
                    </div>
                </div>
                
                </div>
                <div>
                    <p class="small text-white">Last Activity at 21 May 2022</p>
                </div>
            </div>
            <div class="right--wallet ml-auto">
                <img src="@/assets/img/wallet.png" alt="" width="150" srcset="">
            </div>
        </div>
           </div>
           <div class="top--right mt-4">
               <div class="asset--box bg-white shadow-sm p-3">
                   <h5>Send To</h5>
                   <div>
                       <form action="">
                           <div class="mb-3">
                               <label for="" class="mb-1">Address</label>
                               <input class="" type="text" placeholder="Enter Wallet Address">
                           </div>
                           <div>
                               <label class="mb-1" for="">Amount</label>
                               <input type="number" placeholder="Enter Amounts">
                           </div>

                           <div>
                               <button class="view--more w-100 mt-3">
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
export default {
    components:{
        },
        data() {
         return {
             id: this.$route.params.id
         }
        },
        methods:{
            getWallet(){
                let payload = JSON.stringify({walletId: this.id})
                this.$axios.get(`myWallets`, {
                    data: payload
                })
                .then((res)=>{
                    console.log(res);
                })
            }
        },
        mounted() {
           this.getWallet()
        },
}
</script>