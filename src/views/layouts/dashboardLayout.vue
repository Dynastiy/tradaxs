<template>
    <div>
        <div class="main--content">
            <App-Header/>
            <App-Drawer/>
            <Mobile-Header class="dashboard--mobile"/>
            <div class="main" id="main">
                <RouterView/>
            </div>
        </div>
    </div>
</template>

<script>
import AppDrawer from '@/components/dashboard/appDrawer.vue'
import AppHeader from '@/components/dashboard/appHeader.vue'
import MobileHeader from '@/components/static/appHeader'
export default {
    components:{
        AppHeader, AppDrawer, MobileHeader
    }
}
</script>