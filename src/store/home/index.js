//search模块小仓库
import {reqCategoryList,reqGetBannerList} from "@/api";

const state={
    count:1,
    categoryList:[],
    bannerList:[]
};
const mutations={
    ADD(state){
        state.count++;
    },
    CATEGORY_LIST(state,categoryList){
        state.categoryList=categoryList;
    },
    BANNER_LIST(state,bannerList){
        state.bannerList=bannerList;
    }
};
const actions={
    add({commit}){
        commit("ADD");
    },
    async categoryList({commit}){
       await reqCategoryList().then(({data})=>{
           console.log("reqCategoryList() data",data);
           if(data.code===200){
               commit("CATEGORY_LIST",data.data);
           }
       })
    },
    async getBannerList({commit}){
        await reqGetBannerList().then(({data})=>{
            console.log("reqGetBannerList() data",data);
            if(data.code===200){
                commit("BANNER_LIST",data.data);
            }
        })
    }
};
const getters={};
export default {
    state,
    mutations,
    actions,
    getters
}
