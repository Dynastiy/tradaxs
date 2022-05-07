<template>
    <div>
        <div class="wallet--container">
            <div class="top ">
           <div class="">
               <Wallet/>
           </div>
           <div class="top--right">
               <div class="asset--box bg-white shadow-sm p-3">
                   <div>
                       <form action="">
                           <div class="mb-3">
                               <label for="" class="mb-1">Asset</label>
                               <input class="" type="text" placeholder="Select Asset">
                           </div>
                           <div>
                               <label class="mb-1" for="">Currency</label>
                               <input type="text" placeholder="Select Currency">
                           </div>
                       </form>
                   </div>
               </div>

               <div class="amount--box bg-white shadow-sm p-3">
                   <h6 class="small font-weight-bold" style="color: var(--main-color)">Total Amount ($)</h6>
                   <form action="">
                           <div>
                               <label for="" class="mb-3 mt-2">Converting rate:</label>
                               <input class="" type="text" placeholder="$0.0000">
                               <small class="text-secondary" style="font-size: 0.7rem">Balance 0.00</small>
                           </div>

                           <h6 class=" my-3 small font-weight-bold" style="color: var(--main-color)">Total Amount ($)</h6>
                           <div class="d-flex align-items-center" style="gap:10px">
                               <div>
                                   <label for="">Low</label>
                                    <input type="text" placeholder="Select Currency">
                               </div>
                               <div>
                                   <label for="">High</label>
                                    <input type="text" placeholder="Select Currency">
                               </div>
                           </div>
                    </form>
               </div>

               <div class="payment--box bg-white shadow-sm p-3">
                   <form action="">
                           <div class="mb-3">
                               <label class="mb-1" for="">Payment Method</label>
                               <input class="" type="text" placeholder="Select Payment Method">
                           </div>
                           <div>
                               <label class="mb-1" for="">Payment Time Limit</label>
                               <input type="text" placeholder="Set Payment Time Limit">
                           </div>
                           <div class="mt-3">
                                <button class="main--button">Create</button>
                            </div>
                       </form>
               </div>
           </div>
        </div>
        </div>

        <!-- other Content -->

        <section>
            <div class="bottom">
                <div class="table">
                    <Table/> 
                </div>
                <div class="asset--box shadow-sm bg-white shadow-sm p-3 d-flex">
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
                </div>
            </div>
        </section>
    
    </div>
</template>


<script>
import ApexCharts from 'apexcharts'
import Wallet from '@/components/dashboard/walletView.vue'
import Table from '@/components/dashboard/tableView.vue'
export default {
    components:{
        Wallet, Table,
        //   ApexCharts
        },
        data() {
         return {

         }
          
        },
        mounted(){
            var options = 
           {
                series: [70],
            chart: {
              height: 150,
              type: 'radialBar',
              style: {
            fontSize: '12px',
            colors: ['#fff'],
          }
            },
            fill: {
            colors: ['#1B3593', '#1B3593']
            },
            plotOptions: {
              radialBar: {
                hollow: {
                  size: '60%',
                }
              },
            },
            labels: ['Limit'],
           }
            var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
    },
}
</script>