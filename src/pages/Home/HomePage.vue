<template>
  <div>
    111
    <el-button type="text" @click="toSearchPage">去搜索页</el-button>
    {{categoryList}}
    <el-button type="text" @click="getCategoryList">获取分类列表</el-button>
    <el-input type="text" @input="testDebounce" v-model="input"></el-input>
    {{bannerList}}
    <!-- Slider main container -->
    <div class="swiper">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        ...
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>

      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- If we need scrollbar -->
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script>
import {reqCategoryList} from "@/api";
import {mapState} from "vuex";
import {debounce} from 'lodash';
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';


export default {
  name: "HomePage",
  data(){
    return{
      input:""
    }
  },
  methods:{
    toSearchPage(){
      reqCategoryList().then(data=>{
        console.log("this.reqCategoryList() data",data);
      }).catch(err=>console.log(err));
      this.$router.push({name:'search'},()=>{},()=>{});
    },
    addOne(){
      this.$store.dispatch("add");
    },
    getCategoryList(){
      this.$store.dispatch("categoryList");
    },
    testDebounce:debounce(function(){
      console.log("1秒防抖")
    },1000)
  },
  mounted() {
    this.$store.dispatch("getBannerList");

    this.$nextTick(()=>{
      const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable:true
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
    })
  },
  computed:{
    ...mapState({
      categoryList:(state)=>state.home.categoryList,
      bannerList:(state)=>state.home.bannerList
    })
  }
}
</script>

<style scoped>
.swiper {
  width: 600px;
  height: 300px;
}
</style>
