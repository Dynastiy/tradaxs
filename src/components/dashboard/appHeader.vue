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

            <div class="right--side d-flex align-items-center" style="gap:20px">
                <h5 class="small" v-if="userData">Hello, {{ userData.username }} </h5>
                <!-- <div class="rounded-circle d-flex align-items-center justify-content-center" style="background-color: #E1E5F8; width:30px; height:30px">
                     <IconComponent icon="bx:user" />
                </div> -->
                <!-- Default dropleft button -->
                <div class="btn-group dropleft">
                <!-- <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    Dropleft
                </button> -->
                <div class="rounded-circle d-flex align-items-center justify-content-center" role="button" data-toggle="dropdown" style="background-color: #E1E5F8; width:30px; height:30px">
                     <IconComponent icon="bx:user" />
                </div>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="javascript:void(0)" @click="logout">Logout</a>
                </div>
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
data(){
    return{
        userData: {}
    }
},
methods:{
    async logout(){
        let accessToken = this.$store.getters.isAuthenticated
        console.log(accessToken);
       try {
            let res = await this.$axios.post('/auth/logout', accessToken);
            this.$store.dispatch('logout');
            this.$toastify({
                    text: "Logout Successful ",
                    className: "info",
                    style: {
                        background: "green",
                    }
                }).showToast();
            this.$router.push('/login')
        console.log(res);
       } catch (error) {
           console.log(error);
       }
    },
    getUser(){
    this.$axios.get('/usersDetails')
    .then((res)=>{
      console.log(res);
      this.userData = res.data.user_details.profile
      console.log(res.data.user_details.profile)
    })
    .catch((err)=>{
      console.log(err);
    })
  }
},
mounted(){
    this.getUser()
}
}
</script>