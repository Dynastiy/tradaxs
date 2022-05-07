<template>
    <div>
        <div class="dashboard--header">
           <div class="d-flex align-items-center justify-content-between">
               <div class="left--side d-flex align-items-center" style="gap:35px">
               <h6 class="font-weight-bold">Dashboard</h6>
               <router-link to="/user" class="font-weight-bold small" style="color: var(--gray-400)">Crypto Assets</router-link>
               <div class="vertical--line"></div>
               <router-link to="/stocks" class="font-weight-bold small" style="color: var(--gray-400)">Stocks</router-link>
           </div>

            <div class="right--side">
                
                <div class="rounded-circle d-flex align-items-center justify-content-center" style="background-color: #E1E5F8; width:30px; height:30px">
                     <IconComponent icon="bx:user" />
                </div>
               
            </div>
           </div>
        </div>

        <hr class="m-0">
    </div>
</template>

<script>
export default {
// 	components: {
// 		Icon,
// 	},
// }
methods:{
    goToAssets(){

    },
    goToStocks(){

    }
}
}
</script>