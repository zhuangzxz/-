module.exports = {
  devServer: {
    // port:8000, //随便改端口号
    proxy: {
      '/data': {
        target: 'http://localhost:8061/',
        changeOrigin: true
        // pathRewrite: {
        //     '^/v4/api': '/v4/api'
        //   }
      }
    }
  }
}
