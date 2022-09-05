const { defineConfig } = require('@vue/cli-service')
// 在这个文件中包含了对webpack的配置，不需要另写webpack.config.js
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    proxy:{
      '/api':{
        target:"http://gmall-h5-api.atguigu.cn"
      }
    }
  }
})
