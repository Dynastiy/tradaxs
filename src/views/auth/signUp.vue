<template>
    <div>
        <div class="login">
            <div class="login--container">
                <div class="login--content">
                    <div class="logo text-center mb-2">
                        <img src="@/assets/img/logo-dark.svg" width="35" alt="" srcset="">
                        <h3 class="font-weight-bold small text-dark">Tradaxs</h3>
                    </div>
                    <div class="text-center mb-3">
                        <h5 class="font-weight-bold text-dark">Create Account</h5>
                        <p class="small p--text">Enter your details to Create New Account</p>
                    </div>
                    <div class="form--content">
                        <form @submit.prevent="register">
                            <div class="mb-2">
                            <label class="mb-2" for="">FULL NAME</label>
                            <input type="text" v-model="credentials.name" required>
                        </div>
                        <div class="mb-2">
                            <label class="mb-2" for="">USERNAME</label>
                            <input type="text" v-model="credentials.username" required>
                            <!-- <span class="text-danger small" v-for="error in errors.username" :key="error.id"> {{ error }} </span> -->
                        </div>
                        <div class="mb-2">
                            <label class="mb-2" for="">EMAIL</label>
                            <input type="email" v-model="credentials.email" required>
                            <span class="text-danger small" v-for="error in errors.email" :key="error.id"> {{ error }} </span>
                        </div>
                        <div class="mb-2">
                            <label class="mb-2" for="">PHONE NUMBER</label>
                            <input type="number" v-model="credentials.phone" required>
                        </div>
                         <div class="mb-3">
                            <label for="">PASSWORD</label>
                            <input type="password" v-model="credentials.password" required>
                            <span class="text-danger small" v-for="error in errors.password" :key="error.id"> {{ error }} </span>
                        </div>
                        <div class="mb-3">
                            <div class="d-flex justify-content-center" v-if="loading">
                                <div class="spinner-border" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                            <button class="auth--button" v-else >Sign up</button>
                        </div>
                        <div class="text-center">
                            <small class="small font-weight-bold">Already have an account? <router-link to="/login">Login</router-link> </small>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            credentials:{
                name: '',
                username: '',
                email: '',
                bvn: '',
                phone: '',
                password: ''
            },
            loading: false,
            errors: ''
        }
    },
    methods:{
       async register(){
           this.loading = true
            let formData = new FormData()
            formData.append("name", this.credentials.name)
            formData.append("username", this.credentials.username)
            formData.append("email", this.credentials.email)
            formData.append("phone", this.credentials.phone)
            formData.append("password", this.credentials.password)
           try {
               let res = await this.$axios.post('/auth/register', formData, {
               })
               console.log(res);
                this.$toastify({
                    text: "Registration Successful",
                    className: "info",
                    style: {
                        background: "green",
                    }
                }).showToast();
                this.$router.push('/login')
           } catch (error) {
               console.log(error);
               this.$toastify({
                    text: "Something went wrong",
                    className: "info",
                    style: {
                        background: "red",
                    }
                }).showToast();
                console.log(error.response.data.errors);
                this.errors = error.response.data.errors
           }
           this.loading = false
           this.credentials = {}
       }
    }
}
</script>