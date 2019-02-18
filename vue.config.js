module.exports = {
  devServer: {
    proxy: {
      '/data': {
        target: 'http://localhost:8061/',
        host:'http://localhost',
        changeOrigin: true
        // pathRewrite: {
        //     '^/v4/api': '/v4/api'
        //   }
      }
    }
  }
}
