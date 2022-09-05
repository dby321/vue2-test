// API接口统一管理
import requests from "@/api/request";


// 编写一个API
export const reqCategoryList=()=>requests({url:'/product/getBaseCategoryList',method:'get'});
