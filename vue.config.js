module.exports = {
  devServer: {
    proxy: {
      '/data': {
        target: 'http://39.105.126.232:8060/',
        host: 'http://39.105.126.232',
        changeOrigin: true
        // pathRewrite: {
        //     '^/v4/api': '/v4/api'
        //   }
      }
    }
  }
}
