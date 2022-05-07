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
                        <h5 class="font-weight-bold text-dark">Create Account</h5>
                        <p class="small p--text">Enter your details to Create New Account</p>
                    </div>
                    <div class="form--content">
                        <form action="">
                            <div class="mb-4">
                            <label class="mb-2" for="">FULL NAME</label>
                            <input type="text">
                        </div>
                        <div class="mb-4">
                            <label class="mb-2" for="">EMAIL</label>
                            <input type="email">
                        </div>
                         <div class="mb-4">
                            <label for="">PASSWORD</label>
                            <input type="password">
                        </div>
                        <div class="mb-3">
                            <button class="auth--button" @click="goToLogin">Sign up</button>
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
    methods:{
        goToLogin(){
            this.$router.push('/login')
        }
    }
}
</script>