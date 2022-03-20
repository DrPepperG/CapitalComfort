// eslint-disable-next-line vue/script-setup-uses-vars

module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: {
        maxSize: 250000
      }
    }
  }
};
