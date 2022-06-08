<template>
    <div>
        <div class="app--drawer">
            <div>
                <div class="logo text-center mb-5">
                    <img src="@/assets/img/logo.svg" width="45" alt="" srcset="">
            </div>
            <ul class="list-unstyled">
                <li>
                    <router-link to="/user"> 
                        <Icon icon="carbon:dashboard" class="mr-2 menu--icon" />  
                        <span> Dashboard </span>
                    </router-link>
                    <router-link to="/profile"> 
                        <Icon icon="healthicons:ui-user-profile" class="mr-2 menu--icon" />  
                        <span> User Profile </span>
                    </router-link>
                    <!-- <router-link to="/"> 
                        <Icon icon="heroicons-solid:academic-cap" class="mr-2 menu--icon" />  
                        <span> Training </span>
                    </router-link> -->
                    <router-link to="/cypto-swap"> 
                        <Icon icon="ant-design:swap-outlined" class="mr-2 menu--icon" />  
                        <span> Crypto Swap </span>
                    </router-link>
                    <!-- <router-link to="/"> 
                        <Icon icon="carbon:id-management" class="mr-2 menu--icon" />  
                        <span> Account Mgt </span>
                    </router-link> -->
                    <router-link to="/peer-2-peer"> 
                        <Icon icon="fa-solid:people-arrows" class="mr-2 menu--icon" />  
                        <span> P2P </span>
                    </router-link>
                </li>
            </ul>
            </div>
            <div class="trademark d-flex align-items-center" style="gap:15px">
                <span><IconComponent class="text-white" icon="ic:round-wb-cloudy" /></span>
                <span class="text-white">Tradaxs</span>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default {
     components: {
    Icon,
  },
    data(){
        return {
        }
    }
}
</script>