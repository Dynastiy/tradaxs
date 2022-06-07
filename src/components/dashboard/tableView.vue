<template>
    <div>
        <div>
            <div class="container">
        <div class="row">
            <div class="col-md-8" v-for="asset in assets" :key="asset.id">
                    <!-- <img class="card-img-top" :src="cardinfo.image" alt="" width="100%"> -->
                    <div class="card m-1 px-2 " style="height:50px; border-radius:10px;">
                        <div class="card-title ml-1"  ><a role="button" @click.once="viewMore(asset)">{{ asset.asset_name }}</a></div>
                        <div class="px-1 d-flex justify-content-between">
                            <span style="font-size:12px;">$<strong>0.00</strong></span>
                            <strong class=" justify-content-end text-success " style="font-size:12px;">$<span id="btc-usd">0.00</span></strong>
                        </div>
                    </div>


            </div>
        </div>
    </div>
            
             <!-- Mobile Table  -->
               <div class="mobile--table">
                   <div class="table--header d-flex align-items-center justify-content-between mb-4">
                       <h5 class="font-weight-bold">Cryto Asset</h5>
                       <IconComponent icon="ant-design:plus-outlined" style="font-size:28px; color:#4054E9"/>
                   </div>

                   <div class="table--content">
                       <div class="d-flex align-items-center justify-content-between mb-4">
                           <div style="border: 1px solid var(--gray-400); border-radius:50%" class="p-2">
                               <span ><img src="https://digitalchamber.org/wp-content/uploads/2018/02/Bitcoin-icon.png" class="" width="30" alt="" srcset=""></span>
                           </div>
                           <div>
                               <h6 class="font-weight-bold">Bitcoin</h6>
                               <p class="small text-secondary">0.6BTC</p>
                           </div>
                           <div>
                               <img src="@/assets/img/rising-fade.png" width="100" alt="">
                           </div>
                           <div>
                               <h6>
                                   $19,321.21
                               </h6>
                               <p style="color:#35DC94; font-size:0.8rem" class="text-right"> <IconComponent icon="ant-design:caret-up-filled" /> <span>2.98%</span> </p>
                           </div>
                       </div>

 <div class="d-flex align-items-center justify-content-between mb-4">
                           <div style="border: 1px solid var(--gray-400); border-radius:50%" class="p-2">
                               <span ><img src="https://www.vectorico.com/download/cryptocurrency/ethereum-icon.png" class="" width="30" height="30" alt="" srcset=""></span>
                           </div>
                           <div>
                               <h6 class="font-weight-bold">Ethereum</h6>
                               <p class="small text-secondary">0.89ETH</p>
                           </div>
                           <div>
                               <img src="@/assets/img/falling-fade.png" width="100" alt="">
                           </div>
                           <div>
                               <h6>
                                   $2.287.00
                               </h6>
                               <p style="color:#35DC94; font-size:0.8rem" class="text-right"> <IconComponent icon="ant-design:caret-down-filled" /> <span>1.74%</span> </p>
                           </div>
                       </div>

                        <div class="d-flex align-items-center justify-content-between mb-4">
                           <div style="border: 1px solid var(--gray-400); border-radius:50%" class="p-2">
                               <span ><img src="https://cryptologos.cc/logos/litecoin-ltc-logo.png" class="" width="30"  alt="" srcset=""></span>
                           </div>
                           <div>
                               <h6 class="font-weight-bold">Litecoin</h6>
                               <p class="small text-secondary">0.89ETH</p>
                           </div>
                           <div>
                               <img src="@/assets/img/rising-fade.png" width="100" alt="">
                           </div>
                           <div>
                               <h6>
                                   $825.10
                               </h6>
                               <p style="color:#35DC94; font-size:0.8rem" class="text-right"> <IconComponent icon="ant-design:caret-up-filled" /> <span>7.19%</span> </p>
                           </div>
                       </div>

                        <div class="d-flex align-items-center justify-content-between mb-4">
                           <div style="border: 1px solid var(--gray-400); border-radius:50%" class="p-2">
                               <span ><img src="@/assets/img/chainlink.png" class="" width="30" alt="" srcset=""></span>
                           </div>
                           <div>
                               <h6 class="font-weight-bold">Chainlink</h6>
                               <p class="small text-secondary">0.6BTC</p>
                           </div>
                           <div>
                               <img src="@/assets/img/rising-fade.png" width="100" alt="">
                           </div>
                           <div>
                               <h6>
                                   $971.92
                               </h6>
                               <p style="color:#35DC94; font-size:0.8rem" class="text-right"> <IconComponent icon="ant-design:caret-up-filled" /> <span>2.98%</span> </p>
                           </div>
                       </div>

                       
                       
                   </div>
               </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            assets:[],
            route_id: '',
            selected_coin: ''
        }
    },
    methods: {
        getAssets(){
            this.$axios.get('allAssets')
            .then((res)=>{
                console.log(res.data.data);
                this.assets = res.data.data
            })
            .catch((err)=>{
                console.log(err);
            })
        },
        viewMore(asset){
            let payload = {
                coin_type: asset.asset_name,
                userId: this.$store.getters.getUser[0].id
            }
            this.selected_coin = asset.asset_name,
            console.log(payload);
            this.$axios.post('/create_wallet', payload)
            .then((res)=>{
                console.log(res);
                this.checkWallet()
            })
            .catch((err)=>{
                console.log(err);
                this.checkWallet()
            })
            .finally(()=>{
                this.$router.push({name: "wallet-details", params:{id: this.route_id } })
            })
        },
        checkWallet(){
            // const data = "BTC";
                const obj = this.$store.getters.getWallets
                const greaterThanTen = obj.find(element => element.wallet.coin_type == this.selected_coin);
                this.route_id = greaterThanTen.wallet.id
                console.log(greaterThanTen.wallet.id);

        }
    },
    mounted(){
        this.getAssets()
        console.log(this.$store.getters.getWallets);
    }
}
</script>