const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  publicPath: './', // 基本路径 该配置会为index.html中引入的<script> <link>等标签中的资源路径添加前缀
  outputDir: 'dist', // 输出文件目录
  assetsDir: 'static', // 放置打包生成的静态资源 (js、css、img、fonts) 的目录。
  //   去掉编译文件中map文件
  productionSourceMap: false,
  /* 补充：vue.config中configureWebpack 与 chainWebpack 的 区别!!!
  1.configureWebpack 通过 操作对象的形式，来修改默认的webpack配置，该对象将会被 webpack-merge 合并入最终的 webpack 配置
  2.chainWebpack 通过 链式编程的形式，来修改默认的webpack配置
  */
  devServer: {
    proxy: {
      '/api': {
        target: 'http://c.m.163.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack (config) {
    if (process.env.NODE_ENV === 'production') { // 为生产环境修改配置...
      config.plugin('compressionPlugin')
        .use(
          new CompressionWebpackPlugin({
            algorithm: 'gzip', // 压缩方式
            test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'), // 匹配压缩文件
            threshold: 10240, // 对大于10k压缩
            minRatio: 0.8
          })
        )
    }
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') { // 为生产环境修改配置...
      config.mode = 'production'
      // 配置如何展示性能提示。  例如，如果一个资源超过 250kb，webpack 会对此输出一个警告来通知你。
      config.performance = { // 打包文件大小配置
        /* 入口起点表示针对指定的入口，对于所有资源，要充分利用初始加载时(initial load time)期间。
        此选项根据入口起点的最大体积，控制 webpack 何时生成性能提示。默认值是：250000 (bytes)。 */
        maxEntrypointSize: 10000000,
        /**
         * 资源(asset)是从 webpack 生成的任何文件。此选项根据单个资源体积，控制 webpack 何时生成性能提示。默认值是：250000 (bytes)。
         */
        maxAssetSize: 30000000
      }
    }
  }
}
