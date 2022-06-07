<template>
    <div>
        <div class="login">
            <div class="login--container">
                <div class="login--content">
                    <div class="logo text-center mb-4">
                        <img src="@/assets/img/logo-dark.svg" width="35" alt="" srcset="">
                        <h3 class="font-weight-bold small text-dark">Tradaxs</h3>
                    </div>
                    <div class="text-center mb-4">
                        <h5 class="font-weight-bold text-dark">Login to Dashboard</h5>
                        <p class="small p--text">Enter your details to Login</p>
                    </div>
                    <div class="mb-3" v-if="errorMsg">
                        <span class="error text-capitalize"> {{ errorMsg.error }}, {{ errorMsg.message }} </span>
                    </div>
                    <!-- <div>
                        <button @click="resendVerification ">Resend</button>
                    </div> -->
                    <div class="form--content">
                        <form action="">
                        <div class="mb-3">
                            <label class="mb-2" for="">EMAIL</label>
                            <input type="email" v-model="credentials.email">
                        </div>
                         <div class="mb-3">
                            <div class="d-flex align-items-center justify-content-between mb-2">
                                <label for="">PASSWORD</label>
                                <span>Forgot Password?</span>
                            </div>
                            <input type="password" v-model="credentials.password">
                        </div>
                        <div class="mb-3">
                            <div class="d-flex justify-content-center" v-if="loading">
                                <div class="spinner-border" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                            <button class="auth--button" v-else @click="login">Login</button>
                        </div>
                        <div class="text-center">
                            <small class="small font-weight-bold">Don't have an account? <router-link to="/register">Sign Up</router-link> </small>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
// import axios from 'axios'
export default {
    data(){
        return{
            credentials:{
                email: '',
                password: ''
            },
            loading: false,
            errorMsg: '',
        }
    },
    methods:{
        async login(){
           this.loading = true
            let formData = new FormData()
            formData.append("email", this.credentials.email)
            formData.append("password", this.credentials.password)
           try {
               let res = await this.$axios.post('auth/login', formData
               )
               console.log(res);
               let token = res.data.accessToken;
               console.log(token);
               console.log(res.data);
               let user = res.data.user[0]
               let wallet = res.data.user[1]
               console.log(wallet);
               this.$store.dispatch("login", {token, user, wallet})
                this.$toastify({
                    text: "Logged In ",
                    className: "info",
                    style: {
                        background: "green",
                    }
                }).showToast();
                this.$router.push('/user')
                console.log(this.$store.getters.isAuthenticated);
           } catch (error) {
               console.log(error.response);
               this.errorMsg = error.response.data
               this.$toastify({
                    text: `Something Went Wrong, Try again`,
                    className: "info",
                    style: {
                        background: "red",
                    }
                }).showToast();
           }
           this.loading = false
           this.credentials = {}
       }
    },
    async created(){
        if(this.$store.getters.isAuthenticated){
            this.$router.push('/user')
        }
    }
}
</script>