const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
  // path.resolve(__dirname, 'public/iconfont/'),  // 业务代码本地私有 svg 存放目录
];
const server = 'https://easy-mock.com/mock/59714774a1d30433d8391e7c/voteSystem';
export default {
  entry: "./src/pages/*.js",
  disableCSSModules: true,
  publicPath: "/",
  svgSpriteLoaderDirs: svgSpriteDirs,
  outputPath: "./app/public/dist",
  extraBabelPlugins: [
    "transform-runtime",
    "dva-hmr",
    ["import",[
      { libraryName: "antd", style: "css" },
      { libraryName: "antd-mobile", style: "css" }
     ]
    ]
  ],
  theme: {
    "@primary-color": "#18B4ED",
    "@font-family": "'Helvetica Neue',Helvetica,'Hiragino Sans GB','Microsoft YaHei','微软雅黑',Arial,sans-serif"
  },
  extraPostCSSPlugins: [],
  autoprefixer: {
    browsers: [
      "iOS >= 8", "Android >= 4"
    ]
  },
}
