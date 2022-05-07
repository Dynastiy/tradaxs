<template>
    <div>
        <div class="app--header" id="web">
            <div class="container-fluid d-flex align-items-center justify-content-between">
                <div class="logo">
                    <img src="@/assets/img/logo.svg" width="35" alt="" srcset="">
                </div>
                <div class="menu--item">
                    <ul class="list-unstyled d-flex m-0 align-items-center" style="gap:30px">
                        <li>
                            <router-link to="/">About Us</router-link>
                        </li>
                        <li>
                            <router-link to="/">Blog</router-link>
                        </li>
                        <li>
                            <router-link to="/">What we offer</router-link>
                        </li>
                        <li>
                            <router-link to="/">Create Wallet</router-link>
                        </li>
                    </ul>
                </div>

                <div class="d-flex align-items-center " style="gap:30px">
                    <div class="main--btn" >
                        <button @click="login">Log in</button>
                    </div>
                    <div class="main--btn">
                        <button @click="register">Register</button>
                    </div>
                </div>
            </div>
        </div>


        <div class="app--header" id="mobile">
            <div class="container-fluid d-flex align-items-center justify-content-between">
                <div class="logo">
                    <img src="@/assets/img/logo.svg" width="35" alt="" srcset="">
                </div>
                <div>
                    <Icon icon="codicon:menu" style="font-size:1.6rem" color="white" id="tog"/>
                </div>
                <div class="menu--item mobile p-5" id="side-bar">
                    <div class="text-right mb-5">
                        <Icon icon="ep:close" style="font-size:2.3rem" color="white" />
                    </div>
                    <ul class="list-unstyled  m-0" style="gap:30px">
                        <li>
                            <router-link to="/">About Us</router-link>
                        </li>
                        <li>
                            <router-link to="/">Blog</router-link>
                        </li>
                        <li>
                            <router-link to="/">What we offer</router-link>
                        </li>
                        <li>
                            <router-link to="/">Create Wallet</router-link>
                        </li>
                        <li>
                            <router-link to="/login">Login</router-link>
                        </li>
                        <li>
                            <router-link to="/register">Register</router-link>
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
        const toggller = document.getElementById("tog");
        const sidee = document.getElementById('side-bar');
        // const closeMenu = document.getElementById('close-menu');
        const bodyEl = document.getElementsByTagName('body')[0]
        document.onclick = function(e) {
          if(e.target.id !== "tog" && e.target.id !== "side-bar"){
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