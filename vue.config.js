module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.cei.net.cn/cei/front',
        pathRewrite: { '^/api': '' },
        changeOrigin: true
      }
    }
  },
  configureWebpack: (config) => {
    config.devtool = 'source-map'
  }
}
