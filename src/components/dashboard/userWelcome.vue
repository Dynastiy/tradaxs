<template>
    <div>
        <div class="mb-3"> 
            <h5 class="font-weight-bold" v-if="userData">Hello, {{ userData.username }}
            </h5>
            <p class="small"> Welcome to Tradaxs </p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            userData: {}
        }
    },
    methods:{
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
},
beforeMount(){
    this.getUser()
}
}
</script>