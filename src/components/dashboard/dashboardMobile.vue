<template>
    <div>
        <div class="app--header" id="mobile">
            <div class="container-fluid d-flex align-items-center justify-content-between">
                <div>
                    <Icon icon="codicon:menu" style="font-size:1.6rem" color="white" id="toggled"/>
                </div>
                <div class="logo">
                    <router-link to="/"><img src="@/assets/img/logo.svg" width="35" alt="" srcset=""></router-link>
                </div>
                
                <div class="menu--item mobile px-4" id="side-bar2">
                    <div class="text-right mb-5 mt-3">
                        <Icon icon="ep:close" style="font-size:2.3rem" color="white" />
                    </div>
                    <ul class="list-unstyled  m-0" style="gap:30px">
                    <li>
                        <div class="d-flex " style="gap:10px">
                            <div class="img-circle2 text-center">
                                <span v-if="userData.name" :class="userData.name.charAt(0)">
                                {{ userData.name.charAt(0) }}
                                </span>
                            </div>
                            <div>
                                <h6 class="text-white">{{ userData.name }}</h6>
                                <span style="font-size:10px" class="text-white small" @click="goToProfile()">Edit Profile</span>
                            </div>
                        </div>
                    </li>
                    <hr class="bg-white">
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
            mobile_nav: true,
            userData: {}
        }
    },
    methods:{
        login(){
            this.$router.push('/login')
        },
         register(){
            this.$router.push('/register')
        }
    } ,
     mounted(){


    this.userData = this.$store.getters.getUser[0];
        const toggller = document.getElementById("toggled");
        const sidee = document.getElementById('side-bar2');
        // const closeMenu = document.getElementById('close-menu');
        const bodyEl = document.getElementsByTagName('body')[0]
        document.onclick = function(e) {
          if(e.target.id !== "toggled" && e.target.id !== "side-bar2"){
            sidee.classList.remove('active');
            bodyEl.classList.remove("active");
          }
        }
        toggller.onclick = function(){
        sidee.classList.toggle('active');
        bodyEl.classList.toggle("active")
        }
        // closeMenu.onclick = function(){
        // sidee.classList.remove('active');
        // bodyEl.classList.remove("active")
        // }
    },
   
}
</script>