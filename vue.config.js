module.exports = {
  devServer: {
    // port:8000, //随便改端口号
    proxy: {
      '/data': {
        target: 'http://39.105.126.232:8060',
        changeOrigin: true
        // pathRewrite: {
        //     '^/v4/api': '/v4/api'
        //   }
      }
    }
  }
}
