
var targetProxy = 'http://39.105.126.232:8060/';
var hostProxy = 'http://39.105.126.232';

// var targetProxy = 'http://localhost:8060/';
// var hostProxy = 'http://localhost';

module.exports = {
  devServer: {
    proxy: {
      '/yuenimei': {
        target: targetProxy,
        host: hostProxy,
        changeOrigin: true
        // pathRewrite: {
        //     '^/v4/api': '/v4/api'
        //   }
      },'/public-api': {
        target: targetProxy,
        host: hostProxy,
        changeOrigin: true
        // pathRewrite: {
        //     '^/v4/api': '/v4/api'
        //   }
      }
    }
  }
}
