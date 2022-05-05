<template>
  <div>
    <footer class="footer mt-3">
     <div class="container-fluid py-4">
          <div class="footer--top">
        <div class="row">
          <div class="col-lg-4 mt-4">
            <h5 class="footer--header">Tradax</h5>
            <ul class="list-unstlyed mt-3">
                  <li class="text-white"> EU: <a target="_blank" href="tel:+49 9999 0000">+49 9999 0000</a> </li>
                  <li class="text-white"> US: <a href="tel:+00 4444 0000">+00 4444 0000</a></li>
                  <li><a href="mailto:info@tradaxs.com">info@tradaxs.com</a></li>
              </ul>
              <div class="d-flex aling-items-center mt-4" style="gap:30px">
                <a href="#"><Icon icon="akar-icons:instagram-fill" /></a>
                <a href="#"><Icon icon="akar-icons:linkedin-fill" /></a>
                <a href="#"><Icon icon="cib:facebook-f" /></a>
                <a href="#"><Icon icon="akar-icons:twitter-fill" /></a>
              </div>
            
          </div>
          <div class=" mt-4 col-lg-4">
              <h5 class="footer--header">
                  About Us
              </h5>
              <ul class="list-unstlyed mt-3">
                  <!-- <li> <a target="_blank" href="https://zugacoin.io">Blockmay.com</a> </li> -->
                  <li><router-link to="/">Newsroom</router-link></li>
                  <li><router-link to="/">Blog</router-link></li>
                  <li><router-link to="/">Gift Cards</router-link></li>
                  <li><router-link to="/">Careers</router-link></li>
                  <!-- <li> <a target="_blank" href="https://africanapp.store/">Merchant Wallet</a> </li>
                  <li> <a target="_blank" href="https://samzuga.org">Samzuga Family</a> </li> -->
              </ul>
          </div>
          <!-- <div class="col-sm-6 col-lg-3 ">
              <h5 class="footer--header">
                  Exchange Links
              </h5>
              <ul class="list-unstlyed mt-3">
                  <li> <a target="_blank" href="https://samzuga.exchange/">Exchange</a> </li>
                  <li> <a target="_blank" href="https://africanapp.store/"> P2P</a></li>
              </ul>
          </div> -->
          <div class="col-md-2 col-lg-4 mt-4">
              <h5>
                  Support
              </h5>
              <ul class="list-unstlyed mt-3">
                  <li><router-link to="/">Terms of Use</router-link></li>
                  <li><router-link to="/">Conditions</router-link></li>
                  <li><router-link to="/">Contact Us</router-link></li>
              </ul>
          </div>
        </div>
      </div>

      <div class="footer--copyright text-center text-white">
        <hr class="w-50 mx-auto bg-white" />
        <Icon icon="lucide:copyright" />
        <span> 2022 Tradaxs</span>
      </div>
     </div>
    </footer>
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
