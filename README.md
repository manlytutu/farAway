# faraway

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

### HOW TO USE
> 1. main.js中引入  
>    import VickyButton from 'vickyzhaolu'  
>    import 'vickyzhaolu/dist/static/css/app.css'  
>    import 'vickyzhaolu/dist/static/iconfont/iconfont.css'  
>    Vue.use(VickyButton);  
> 2. 安装px2rem-loader stylus stylus-loader lib-flexible  
>    main.js中引入flexible.js  
>    import 'lib-flexible/flexible.js'  
> 3. 修改utils.js配置文件  
>    exports.cssLoaders=function(options){  
>     .....  
>       const px2remLoader = {  
>            loader: 'px2rem-loader',  
>            options: {  
>            remUnit: 37.5  
>            }  
>        }  
>       ....  
>       function generateLoaders (loader, loaderOptions) {  
>       const loaders = options.usePostCSS ? [cssLoader, px2remLoader, postcssLoader] : [cssLoader, px2remLoader]  
>  
>        if (loader) {  
>        loaders.push({  
>            loader: loader + '-loader',  
>            options: Object.assign({}, loaderOptions, {  
>            sourceMap: options.sourceMap  
>            })  
>        })  
>        }  
>  }  

