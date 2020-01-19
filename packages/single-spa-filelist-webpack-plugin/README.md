##Install
```bash
npm install --save-dev single-spa-filelist-webpack-plugin
```

##Usage
```js
const filelistWebpackPlugin = require('single-spa-filelist-webpack-plugin');

module.exports = {
  
  plugins: [
    new SingleSpaFileListPlugin({
        filename:`xx_assets`
    }),
  ]
}
```

##Output
xx_assets.js

```js
var xx_asset = {
    css:['xxx'],
    js:['xxx']
}
```

