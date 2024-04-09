const { defineConfig } = require("@vue/cli-service")
const path = require("path")
console.log(process.env.VUE_APP_BASE_API)
// eslint-disable-next-line no-unused-vars
const resolve = (dir) => path.join(__dirname, ".", dir)
console.log(process.env.VUE_APP_BASE_URL)
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: "/",
  outputDir: "distsss",
  assetsDir: "assets",
  devServer: {
    // historyApiFallback: true,
    // allowedHosts: "all",
    host: "0.0.0.0",
    https: false,
    open: true,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        "@compoent": resolve("src/compoents"),
        vue$: "vue/dist/vue.esm.js"
      }
    }
  },
  chainWebpack(config) {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap((options) => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()
    // eslint-disable-next-line no-undef
    config.plugin("gotHash").use(HotHashWebpackPlugin, [{ version: "1.0.0" }])
  }
})
