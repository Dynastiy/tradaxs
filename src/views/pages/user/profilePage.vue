<template>
  <div>
    <section class="">
      <div class="">
        <h3 class="mb-3 font-weight-bold">Account Settings</h3>
        <div class="bg-white shadow rounded-lg d-block d-sm-flex">
          <div class="profile-tab-nav border-right">
            <div class="p-4">
              <div class="img-circle text-center mb-3">
                <span v-if="userData.name" :class="userData.name.charAt(0)">
                  {{ userData.name.charAt(0) }}
                </span>
              </div>
              <h5 class="text-center">{{ userData.name }}</h5>
              <div class="text-center mt-3">
                <button class="main--button" v-if="userData.role === 3 " @click.once="applyAsMerchant()">Apply as Merchant</button>
                <button class="btn btn-danger" v-else>Merchant</button>
              </div>
            </div>
            <div
              class="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                class="nav-link active"
                id="account-tab"
                data-toggle="pill"
                href="#account"
                role="tab"
                aria-controls="account"
                aria-selected="true"
              >
                <i class="fa fa-home text-center mr-1"></i>
                Profile
              </a>
              <a
                class="nav-link"
                id="password-tab"
                data-toggle="pill"
                href="#password"
                role="tab"
                aria-controls="password"
                aria-selected="false"
              >
                <i class="fa fa-key text-center mr-1"></i>
                Change Password
              </a>
            </div>
          </div>
          <div class="tab-content p-4 p-md-5" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="account"
              role="tabpanel"
              aria-labelledby="account-tab"
            >
              <h3 class="mb-4">Account Settings</h3>
              <div class="">
                <div class="">
                  <div class="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="userData.name"
                    />
                  </div>
                </div>
                <div class="">
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="userData.email"
                    />
                  </div>
                </div>
                <div class="">
                  <div class="form-group">
                    <label>Phone number</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="userData.phone"
                    />
                  </div>
                </div>
                <div class="">
                  <div class="form-group">
                    <label>Bvn</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="userData.bvn"
                    />
                  </div>
                </div>
                <div class="">
                  <div class="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="userData.address"
                    />
                  </div>
                </div>
              </div>
              <div class="text-right input--field">
                <div class="d-flex justify-content-center" v-if="loading">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <button v-else class="main--button" @click.once="updateUser">Update</button>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="password"
              role="tabpanel"
              aria-labelledby="password-tab"
            >
              <h3 class="mb-4">Reset Password</h3>
              <div class="">
                <div class="">
                  <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="email" />
                  </div>
                </div>
              </div>
              <div class="">
                <div class="">
                  <div class="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      class="form-control"
                      v-model="password"
                    />
                  </div>
                </div>
              </div>
              <div class="">
                <div class="">
                  <div class="form-group">
                    <label>Confirm password</label>
                    <input
                      type="password"
                      class="form-control"
                      v-model="password_confirmation"
                    />
                  </div>
                </div>
              </div>
              <div class="text-right input--field">
                <button class="main--button" @click="resetPassword">Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  components: {},
  data() {
    return {
      userData: {
        //  "userId":"2",
        "name": "",
        "email": "",
        "bvn": "",
        "phone": "",
        "address": "",
        "username": "",
      },
      email: "",
      password: "",
      password_confirmation: "",
      loading: false,
    };
  },
  methods: {
    resetPassword() {
      let payload = {
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      };
      this.$axios
        .post("reset-password", payload)
        .then((res) => {
          console.log(res);
        })
        .catch((res) => {
          console.log(res);
        });
    },
    updateUser(){
      this.loading = true
      const formData = new FormData;
      formData.append('name', this.userData.name)
      formData.append('email', this.userData.email)
      formData.append('bvn', this.userData.bvn)
      formData.append('phone', this.userData.phone)
      formData.append('address', this.userData.address)
      formData.append('username', this.userData.username)
      this.$axios.post('users/update', formData)
      .then((res)=>{
        this.$toastify({
                    text: `User Details Update succesful`,
            className: "info",
            style: {
                background: "green",
            }
        }).showToast();
        return res
      })
      .catch((err)=>{
        console.log(err);
      })
      .finally(()=>{
      this.getUser()
      this.loading = false
    })
    },
	applyAsMerchant(){
		// let payload = {
		// 	userId: this.$store.getters.getUser[0].id
		// }
		this.$axios.post('merchant_request')
		.then((res)=>{
			console.log(res);
		})
		.catch((err)=>{
			console.log(err);
		})
    
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
  mounted() {
    this.getUser()
    // this.userData = this.$store.getters.getUser[0];
    console.log(this.userData);
  },
};
</script>