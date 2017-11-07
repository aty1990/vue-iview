<template>
  <div>
        <p>
      	    <i class="icon-logo app-icon"></i>
      	    <i class="icon-icon-process-1 app-icon"></i>
      	    <i class="icon-icon-process-2 app-icon"></i>
      	    <i class="icon-icon-process-3 app-icon"></i>
        </p>
        <div class="icheck-box">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">Slide 1</div>
                  <div class="swiper-slide">Slide 2</div>
                  <div class="swiper-slide">Slide 3</div>
                  <div class="swiper-slide">Slide 4</div>
                  <div class="swiper-slide">Slide 5</div>
                  <div class="swiper-slide">Slide 6</div>
                  <div class="swiper-slide">Slide 7</div>
                  <div class="swiper-slide">Slide 8</div>
                  <div class="swiper-slide">Slide 9</div>
                  <div class="swiper-slide">Slide 10</div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>    
        </div>
       

        <v-demo1></v-demo1>
        <br>
        <br>

        <v-demo2></v-demo2> 

        <v-demo3></v-demo3> 
  </div>
</template>
<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    import vDemo1 from '@/page/component/demo1'; 
    import vDemo2 from '@/page/component/demo2'; 
    import vDemo3 from '@/page/component/demo3'; 
    export default {
         components:{
           vDemo1,vDemo2,vDemo3
        },
        mounted(){
           var swiper = new Swiper('.icheck-box .swiper-container', {
              slidesPerView: 3,
              spaceBetween: 30,
              freeMode: true,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
            });
        }
    }
</script>
<style scoped>
   .swiper-container {
      width: 100%;
      height: 300px;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: red;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
</style>
