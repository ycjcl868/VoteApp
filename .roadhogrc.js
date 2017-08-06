const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
  // path.resolve(__dirname, 'public/iconfont/'),  // 业务代码本地私有 svg 存放目录
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
    "/api/getMovie": {
      target: "https://easy-mock.com/mock/59714774a1d30433d8391e7c/voteSystem/cine/news.do",
      changeOrigin: true,
      pathRewrite: { "^/api/getMovie" : "" }
    },
    "/api/getSummary": {
      target: "http://119.29.0.179/VoteSystem/obtain/data.do",
      changeOrigin: true,
      pathRewrite: { "^/api/getSummary" : "" }
    },
    "/api/getLogNum": {
      target: "https://easy-mock.com/mock/59714774a1d30433d8391e7c/voteSystem/cine/getLogNum",
      changeOrigin: true,
      pathRewrite: { "^/api/getLogNum" : "" }
    },
    "/api/getLog": {
      target: "http://119.29.0.179/VoteSystem/info/news.do",
      changeOrigin: true,
      pathRewrite: { "^/api/getLog" : "" }
    },
    "/api/doVote": {
      target: "http://119.29.0.179/VoteSystem/user/poll.do",
      changeOrigin: true,
      pathRewrite: { "^/api/doVote" : "" }
    }
  },
  extraPostCSSPlugins: [],
  autoprefixer: {
    browsers: [
      "iOS >= 8", "Android >= 4"
    ]
  },
}
