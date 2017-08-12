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
  outputPath: "./app/public/",
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
    "/api/v1/movies": {
      target: `${server}/movies`,
      changeOrigin: true,
      pathRewrite: { "^/api/v1/movies" : "" }
    },
    "/api/v1/summary": {
      target: "http://119.29.0.179/VoteSystem/obtain/data.do",
      changeOrigin: true,
      pathRewrite: { "^/api/v1/summary" : "" }
    },
    "/api/v1/logNum": {
      target: `${server}/logNum`,
      changeOrigin: true,
      pathRewrite: { "^/api/v1/logNum" : "" }
    },
    "/api/v1/logs": {
      target: `${server}/logs`,
      changeOrigin: true,
      pathRewrite: { "^/api/v1/logs" : "" }
    },
    "/api/v1/doVote": {
      target: "http://119.29.0.179/VoteSystem/user/poll.do",
      changeOrigin: true,
      pathRewrite: { "^/api/v1/doVote" : "" }
    }
  },
  extraPostCSSPlugins: [],
  autoprefixer: {
    browsers: [
      "iOS >= 8", "Android >= 4"
    ]
  },
}
