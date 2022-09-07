import Mock from 'mockjs';
import banner from './banner.json'
// webpack默认对外暴露的图片、JSON
Mock.mock("/mock/banner",{code:200,data:banner});

