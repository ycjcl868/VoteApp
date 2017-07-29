const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
  // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 业务代码本地私有 svg 存放目录
];
export default {
  entry: "./src/index.js",
  disableCSSModules: true,
  publicPath: "/",
  svgSpriteLoaderDirs: svgSpriteDirs,
  outputPath: "./public",
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
  proxy: {
    "/api/query": {
      target: "https://easy-mock.com/mock/590a821d7a878d73716eb5c7/example/getAnswer",
      secure: false
    }
  },
  extraPostCSSPlugins: [],
  autoprefixer: {
    browsers: [
      "iOS >= 8", "Android >= 4"
    ]
  },
}
