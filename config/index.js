var path = require('path')
var mockConfig = require('./mock');

module.exports = {
  dev: {
    port: 3000,
    app: ['webapp1'],
    proxyTable: { // 代理配置
      '/api': {
        target: 'http://28.5.23.161:8083',
        changeOrigin: true, // 更改请求域
        pathRewrite: {
          '/api': '/pobsFo' // 需要重写的请求地址
        }
      }
    },
    mockTable: { // 模拟数据设置
      '/mock': {
        mockConfig: mockConfig,
        allowOrigin: ['http://test.liuying.com']
      }
    }
  },
  build: {
    app: ['webapp1'],
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static'

  }
}