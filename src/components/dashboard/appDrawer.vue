<template>
    <div>
        <div class="app--drawer">
            <div>
                <div class="logo text-center mb-5">
                    <img src="@/assets/img/logo.svg" width="45" alt="" srcset="">
            </div>
            <ul class="list-unstyled">
                <li v-for="(item, index) in menu" :key="index">
                    <router-link :to="item.url"> 
                        <Icon :icon="item.icon" class="mr-2 menu--icon" />  
                        <span> {{ item.menu_item }} </span>
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
import menu from '@/api/menu'
export default {
     components: {
    Icon,
  },
    data(){
        return {
            menu: menu
        }
    }
}
</script>