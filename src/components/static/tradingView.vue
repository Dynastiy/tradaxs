<template>
  <div>
    <div>
      <div class="trading">
        <div class="top mb-3 d-flex justify-content-between">
          <h5 class="font-weight-bold">Buy</h5>
          <h5 class="font-weight-bold">
            <span> Sell </span> <Icon icon="ant-design:arrow-right-outlined" />
          </h5>
        </div>
        <div class="input--area d-flex align-items-center justify-content-between">
            <img
                src="https://logos-download.com/wp-content/uploads/2016/06/Bitcoin_logo.png"
                alt=""
                width="100"
              />
              <Icon icon="akar-icons:arrow-down" />
        </div>

        <div class="mt-4">
            <h5>1 BTC  =  39,791.41 USD</h5>
        </div>

        <div class="mt-4">
            <h5 class="font-weight-bold">Pay via</h5>
        </div>

        <div class="input--area mt-4 d-flex align-items-center justify-content-between">
            <span>Select Payment Method</span>
              <Icon icon="akar-icons:arrow-down" />
        </div>

        <p class="mt-4 text-center">To use this feature, you need to create an account</p>

        <div class="mt-4 create--account text-center mb-3">
            <button>Create Account</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default {
  components: {
    Icon,
  },
};
</script>
