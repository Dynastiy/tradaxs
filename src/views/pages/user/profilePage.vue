<template>
    <div>
            
    <section class="">
		<div class="">
			<h1 class="mb-3">Account Settings</h1>
			<div class="bg-white shadow rounded-lg d-block d-sm-flex">
				<div class="profile-tab-nav border-right">
					<div class="p-4">
						<div class="img-circle text-center mb-3">
							<!-- <v-else :class="getUser.first_name.charAt(0)"> {{ getUser.first_name.charAt(0) }} </span> -->
						</div>
						<h5 class="text-center">{{ userData.name }}</h5>
                       
					</div>
					<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
						<a class="nav-link active" id="account-tab" data-toggle="pill" href="#account" role="tab" aria-controls="account" aria-selected="true">
							<i class="fa fa-home text-center mr-1"></i> 
							Profile
						</a>
						<a class="nav-link" id="password-tab" data-toggle="pill" href="#password" role="tab" aria-controls="password" aria-selected="false">
							<i class="fa fa-key text-center mr-1"></i> 
							Change Password
						</a>
					</div>
				</div>
				<div class="tab-content p-4 p-md-5" id="v-pills-tabContent">
					<div class="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="account-tab">
						<h3 class="mb-4">Account Settings</h3>
						<div class="">
							<div class="">
								<div class="form-group">
                                <label>Last Name</label>
                                <input type="text" class="form-control" v-model="userData.name">
								</div>
							</div>
							<div class="">
								<div class="form-group">
                                <label>Email</label>
                                <input type="text" class="form-control" v-model="userData.email">
								</div>
							</div>
							<div class="">
								<div class="form-group">
                                <label>Phone number</label>
                                <input type="text" class="form-control" v-model="userData.phone">
								</div>
							</div>
                            <div class="">
								<div class="form-group">
                                <label>Bvn</label>
                                <input type="text" class="form-control" v-model="userData.bvn">
								</div>
							</div>
                            <div class="">
								<div class="form-group">
                                <label>Address</label>
                                <input type="text" class="form-control" v-model="userData.address">
								</div>
							</div>
						</div>
						<div class="text-right input--field">
							<button class="btn--main">Update</button>
						</div>
					</div>
					<div class="tab-pane fade" id="password" role="tabpanel" aria-labelledby="password-tab">
						<h3 class="mb-4">Change Password</h3>
						<div class="">
							<div class="">
								<div class="form-group">
								<label>Old password</label>
								<input type="password" class="form-control" v-model="password">
								</div>
							</div>
						</div>
						<div class="">
							<div class="">
								<div class="form-group">
								<label>New password</label>
								<input type="password" class="form-control" v-model="password_confirmation">
								</div>
							</div>
						</div>
						<div class="text-right">
							<button class="btn--main">Update</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </div>
</template>


<script>
// import ApexCharts from 'apexcharts'
// import Wallet from '@/components/dashboard/walletView.vue'
// import Table from '@/components/dashboard/tableView.vue'
export default {
    components:{
        // Wallet, Table,
        //   ApexCharts
        },
        data() {
         return {
             userData: {
                 
             },
             password: '',
             password_confirmation: ''
         }
          
        },
        methods:{
            changePassword(){
                
            }
        },
        mounted(){
            this.userData = this.$store.getters.getUser[0];
            console.log(this.getUser);
    },
}
</script>