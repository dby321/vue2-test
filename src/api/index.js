// API接口统一管理
import requests from "@/api/request";
import mockAjax from "@/api/mockAjax";

// 编写一个API
export const reqCategoryList=()=>requests({url:'/product/getBaseCategoryList',method:'get'});
export const reqGetBannerList=()=>mockAjax.get('/banner');
