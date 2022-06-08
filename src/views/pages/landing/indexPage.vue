<template>
  <div>
    <div>
      <div class="landing--page pb-4">
        <div class="hero--section">
          <div class="container-fluid">
            <div class="left--side">
              <h1 class="mb-4"  data-aos="fade-up-right">Learn and trade your crypto with <span class="span">tradaxs</span></h1>
              <p class="small w-75">Get trained and exchange digital currencies using different payment methods with us. Create your tradax account to begin</p>
              <div class="mt-4">
                  <div class="input--field d-flex align-items-center">
                      <input type="search" class="" placeholder="Email Address">
                      <button class="main--button">Get Started</button>
                  </div>
              </div>
            </div>
            <div class="right--side text-right"  data-aos="fade-down-right">
              <img src="@/assets/img/image.png" width="100%" alt="" />
            </div>
          </div>
        </div>

        <!-- slider -->
        <Slider/>

        <!-- tradax features  -->
        <section>
            <div class="container-fluid mt-5 ">
                <h1 class="text--color font-weight-bold mx-auto text-center w-75">Tradaxs is breaking the boundaries of digital currency trading</h1>
                <Features/>
            </div>
        </section>

        <!-- Start Trading   -->
        <section>
            <div class="container-fluid mt-5">
                <h1 class="text--color mb-4 font-weight-bold mx-auto text-center w-75">Start trading on Tradaxs</h1>
                <Trading/>
            </div>
        </section>

        <!-- Testimonials   -->
        <section>
            <div class="container-fluid mt-5">
                <h1 class="text--color mb-5 font-weight-bold mx-auto text-center w-75">Testimonials</h1>
                <Testimonials/>
            </div>
        </section>
      </div>
    </div>
  </div>
</template>


<script>
import Slider from '@/components/static/sliderView.vue'
import Features from '@/components/static/featureView.vue'
import Trading from '@/components/static/tradingView.vue'
import Testimonials from '@/components/static/testimonialsView.vue'
export default {
    components:{
        Slider, Features, Trading, Testimonials
    }
}
</script>