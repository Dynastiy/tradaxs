<template>
    <div>
       <div class="profilePage">
            <div class="">
            <div class="wallet--container">
            <div class="top stocks">
           <div class="">
               <Wallet/>
           </div>
           <div class="top--right stocks">
               <div class="asset--box bg-white shadow-sm p-3">
                    <h6 class="small font-weight-bold" >Market Cap</h6>
                    
                   <div class="d-flex align-items-center mt-3 justify-content-between">
                       <div>
                            <h6 class="font-weight-bold">$12,418.42</h6>
                        </div>
                        <div>
                            <img src="@/assets/img/rising.png" width="50" alt="">
                            <p style="color:#35DC94; font-size:0.6rem" class="small text-center">+10% <span><IconComponent icon="bi:arrow-up" /></span></p>
                        </div>
                   </div>
               </div>
           </div>
        </div>
        </div>

        <div class="mt-5">
            
               <div class="amount--box bg-white shadow-sm p-3">
                   <h6 class="small font-weight-bold" >Fully Diluted</h6>
                   <div class="d-flex align-items-center mt-3 justify-content-between">
                       <div>
                            <h6 class="font-weight-bold">$12,418.42</h6>
                        </div>
                        <div>
                            <img src="@/assets/img/falling.png" width="50" alt="">
                            <p style="color:#DC3535; font-size:0.6rem" class="small text-center">+10% <span><IconComponent icon="bi:arrow-down" /></span></p>
                        </div>
                   </div>
               </div>

               <div class="payment--box bg-white shadow-sm p-3">
                   <h6 class="small font-weight-bold" >Circulating Supply</h6>
                  <div class="d-flex align-items-center mt-3 justify-content-between">
                       <div>
                            <h6 class="font-weight-bold">$8,619.23</h6>
                        </div>
                        <div>
                            <h6 class="font-weight-bold">ETH</h6>
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
            <div class="bg-white">
                Profile
            </div>
       </div>
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