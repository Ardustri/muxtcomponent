const { resolve } = require('path')

module.exports = async function (moduleOptions) {
  const options = {
    ...this.options['muxtcomponent'],
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'muxtcomponent.js',
    options
  })
}

module.exports.meta = require('../package.json')
