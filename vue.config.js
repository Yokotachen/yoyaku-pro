module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    proxy: {
      "/api": {
        // search为转发路径
        target: "http://localhost:9123", // 目标地址 https
        ws: true, // 是否代理websockets
        changeOrigin: true // 设置同源  默认false，是否需要改变原始主机头为目标URL,
      }
    }
  }
};
