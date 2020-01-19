function SingleSpaFileListPlugin(options) {
    this.options = options;
  }
   
  SingleSpaFileListPlugin.prototype.apply = function (compiler) {
    compiler.plugin('compilation', (compilation) => {
        console.log('生成资源文件列表...');
        compilation.plugin(
          'html-webpack-plugin-before-html-processing',
          (data, cb) => {
            let fileList = {
                css:data.assets.css,
                js:data.assets.js,
            }
            fileList = JSON.stringify(fileList);
            const content = `var ${this.options.filename} = ${fileList}`
            const filename = `${this.options.filename}.js`
            compilation.assets[filename] = {
                source: function() {
                    return content;
                },
                size: function() {
                    return content.length;
                }
            };
            cb && cb(null, data)
          }
        )
      })
  }
   
  module.exports = SingleSpaFileListPlugin