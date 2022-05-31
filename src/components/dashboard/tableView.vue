<template>
    <div>
        <div>
            <div class="table--view">
                <div class=" other--tables">
                    <div class="table-responsive">
                        <table class="table table-centered table-nowrap mb-0">
                        <thead>
                            <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Actions</th>
                            <!-- <th scope="col">Price</th>
                            <th scope="col">7D</th>
                            <th scope="col">30D</th>
                            <th scope="col">1Y</th>
                            <th scope="col">Today</th> -->
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="asset in assets" :key="asset.id">
                            <td>{{asset.id }} </td>
                            <td> {{ asset.asset_name }} </td>
                            <td> <button class="view--more" @click="viewMore(asset)">View More</button> </td>
                            </tr>
                            
                        </tbody>
                        </table>
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
            assets:[]
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
            console.log(payload);
            this.$axios.post('/create_wallet', payload)
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            })
            .finally(()=>{
                this.$router.push({name: "wallet-details", params:{id: asset.coin_type } })
            })
        }
    },
    mounted(){
        this.getAssets()
    }
}
</script>