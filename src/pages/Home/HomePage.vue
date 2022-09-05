<template>
  <div>
    111
    <el-button type="text" @click="toSearchPage">去搜索页</el-button>
  </div>
</template>

<script>
import {reqCategoryList} from "@/api";

export default {
  name: "HomePage",
  methods:{
    toSearchPage(){
      reqCategoryList().then(data=>{
        console.log("this.reqCategoryList() data",data);
      }).catch(err=>console.log(err));
      this.$router.push({name:'search'},()=>{},()=>{});
    }
  }
}
</script>

<style scoped>

</style>
