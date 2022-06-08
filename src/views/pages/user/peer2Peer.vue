<template>
  <div>
    <div class="wallet--container">
      <div class="">
        <div class="">
          <div class="wallet">
            <div class="left--wallet">
              <div>
                <h5 class="text-white mb-4">Wallet Balance</h5>
                <h6 class="small text-white mb-3">Available Balance in USD</h6>
                <h4 class="text-white mb-3">
                  <span v-if="coin_details.balance">
                    {{ coin_details.balance }}
                  </span>
                  <span v-else>0</span>
                </h4>
                <div class="d-flex" style="gap: 30px">
                  <div class="text-center">
                    <h6 class="text-white small mb-1">Balance</h6>
                    <h5 class="text-white">
                      <span v-if="coin_details.balance">
                        {{ coin_details.balance }}
                      </span>
                      <span v-else>0</span>
                    </h5>
                  </div>
                  <div class="text-center">
                    <h6 class="text-white small mb-1">Wallet</h6>
                    <h5 class="text-white">{{ coin_details.coin_type }}</h5>
                  </div>
                </div>
              </div>

              <div class="my-3">
                <h6 class="text-white small mb-1">Address</h6>
                <p class="text-white">{{ coin_details.address }}</p>
              </div>

              <div>
                <p class="small text-white">
                  Created {{ timeStamp(coin_details.created_at) }}
                </p>
              </div>
            </div>
            <div class="right--wallet ml-auto">
              <img src="@/assets/img/wallet.png" alt="" width="150" srcset="" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="bg-white shadow-sm p-3 mt-4 rounded-lg col-lg-8">
            <div class="table-responsive">
              <table class="table table-hover table-centered table-nowrap">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Merchant</th>
                    <th scope="col">Type</th>
                    <th scope="col">Limits</th>
                    <th scope="col">Payment Method</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td><button class="main--button">Buy Now</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import {
  nairaFilter,
  percentFilter,
  percentageFilter,
  timeStamp,
} from "@/plugins/filter";
export default {
  data() {
    return {
      nairaFilter,
      percentFilter,
      percentageFilter,
      timeStamp,
      id: this.$route.params.id,
      coin_details: {},
      addressTo: "",
      amount: "",
      loading: false,
      checkedMail: [],
    };
  },
  methods: {
    sendTransaction() {
      this.loading = true;
      let formData = new FormData();
      formData.append("coin_type", this.coin_details.coin_type);
      formData.append("userId", this.$store.getters.getUser[0].id);
      formData.append("amount", this.amount);
      formData.append("addressTo", this.addressTo);
      this.$axios
        .post("send_transaction", formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
          (this.amount = ""), (this.addressTo = "");
        });
    },
  },
  mounted() {},
};
</script>