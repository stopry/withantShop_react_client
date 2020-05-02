const CompressionWebpackPlugin = require('compression-webpack-plugin');//webpack压缩插件
const productionGzip = process.env.NODE_ENV == 'production'?true:false;//打开生产环境中gzip
const productionGzipExtensions = ['js', 'css'];//打包的文件个数

export default config => {
  // 打包优化 uglifyjs-webpack-plugin 配置
  if (process.env.NODE_ENV === 'production') {
    config.merge({
      plugin: {
        install: {
          plugin: require('uglifyjs-webpack-plugin'),
          args: [{
            sourceMap: false,
            uglifyOptions: {
              compress: {
                // 删除所有的 `console` 语句
                drop_console: true,
                drop_debugger:true,
              },
              warnings:false,
              output: {
                // 最紧凑的输出
                beautify: false,
                // 删除所有的注释
                comments: false,
              },
              sourceMap: false,
              parallel:true
            },
          }],
        },
        //大文件开启gzip压缩
        gzip: {
          plugin: new CompressionWebpackPlugin({
            filename: '[path].gz[query]',//老版本使用asset
            algorithm: 'gzip',
            test: new RegExp(
              '\\.(' +
              productionGzipExtensions.join('|') +
              ')$'
            ),
            threshold: 10240,
            minRatio: 0.8
          })
        },
      },
    });
  }
};
