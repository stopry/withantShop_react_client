// https://umijs.org/config/
import pageRoutes from './router.config';
import theme from '../src/theme';
import webpackPlugin from './plugin.config';
const plugins = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      dynamicImport: {
        loadingComponent: './components/PageLoading/index',
        webpackChunkName: true,
      },
      pwa: {
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
          importWorkboxFrom: 'local',
        },
      },
      title: {
        defaultTitle: 'WithAnt',
      },
      dll: false,
      hd: false,
      fastClick: true,
      routes: {
        exclude: [],
      },
      hardSource: false,
    },
  ],
];
export default {
  // add for transfer to umi
  base: '',
  publicPath: '',
  define: {
    APP_TYPE: process.env.APP_TYPE || '',
  },
  history: 'hash',
  disableCSSModules: false,
  // 默认是 browser
  plugins,
  //   exportStatic: {},
  // 路由配置
  routes: pageRoutes,
  // Theme for antd-mobile
  // https://mobile.ant.design/docs/react/customize-theme-cn
  theme: {
    'brand-primary': theme.primaryColor,
    'brand-primary-tap': theme.brandPrimaryTap,
  },
  externals: {},
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  cssnano: {
    mergeRules: false,
    preset: 'advanced',
    autoprefixer: false,
    'postcss-zindex': false,
  },
  targets: {
    chrome: 58,
    firefox: 45,
    ios: 7,
    android: 5,
    ie: 9,
  },
  outputPath: './dist',
  hash: true,
  alias: {},
  proxy: {
    '/server/api/': {
      changeOrigin: true,
      pathRewrite: {
        '^/server': '',
      },
      target: 'https://preview.pro.ant.design/',
    },
    '/wx/api/': {
      changeOrigin: true,
      pathRewrite: {
        '^/wx/api': '',
      },
      target: 'https://games.parsec.com.cn/',
    },
    '/api':{//node 服务端反向代理配置
      changeOrigin: true,
      target: 'http://localhost:7001',
    }
  },
  ignoreMomentLocale: true,
  manifest: {
    basePath: '/',
  },
  chainWebpack: webpackPlugin,
  //post css配置
  extraPostCSSPlugins: [
    require('postcss-flexbugs-fixes'),
    require('postcss-px-to-viewport')({
      viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      // viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false, // 允许在媒体查询中转换`px`
    }),
  ],
  treeShaking: true,
  es5ImcompatibleVersions: true,
  extraBabelPlugins:[
    ['import', { libraryName: 'antd-mobile', style: true }]  //按需加载antd-mobile样式文件
  ],
};

