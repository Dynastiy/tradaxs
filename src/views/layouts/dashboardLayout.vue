<template>
    <div>
        <div class="main--content">
            <App-Header/>
            <App-Drawer/>
            <Mobile-Header class="dashboard--mobile"/>
            <div class="main" id="main">
                <UserWelcome/>
                <RouterView/>
            </div>
        </div>
    </div>
</template>

<script>
import AppDrawer from '@/components/dashboard/appDrawer.vue'
import AppHeader from '@/components/dashboard/appHeader.vue'
import MobileHeader from '@/components/dashboard/dashboardMobile.vue'
import UserWelcome from '@/components/dashboard/userWelcome.vue'
export default {
    components:{
        AppHeader, AppDrawer, MobileHeader, UserWelcome
    },
    async created(){
        if(!this.$store.getters.isAuthenticated){
            this.$router.push('/login')
        }
    }
}
</script>