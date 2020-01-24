const HtmlWebpackPlugin = require('html-webpack-plugin')

// HtmlWebpackCombine Plugin
class HtmlWebpackCombinePlugin {
  constructor (config = { pages: [], path: '.' }) {
    this.pages = config.pages
    this.path = config.path
  }
  apply (compiler) {
    const path = this.path

    this.pages.forEach((page) => {
      const Plugin = new HtmlWebpackPlugin({
        filename: page,
        template: `${path}/${page}`
      })
      Plugin.apply(compiler)
    })
  }
}

module.exports = {
  HtmlWebpackCombinePlugin
}
