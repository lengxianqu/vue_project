# npm�����ٶ���

- �����nrm�л�����Դ�ķ�ʽ�л�
- ���� `npm install -g nrm`
- �鿴�б� `nrm ls`
- �л�����Դ  `nrm use taobao`
- �����ٶ�  `nrm test taobao`


# TransformError 

- ��ָ������޷�����react-native�еĴ��룬��Ҫ���˵���ǰ�İ汾
- ����
 + �Ƴ��� yarn remove babel-preset-react-native
 + ��Ӱ� yarn add babel-preset-react-native@2.1.0

# React

- React=>React Native
- React: es5,es5+jsx( js+xml  ),es6+jsx

# Webpack

- [���Ĺ���](https://doc.webpack-china.org/)
- [webpackѧϰ����](https://github.com/webpack-china/awesome-webpack-cn)
- ���� 
 + 1. ��װwebpack ȫ��->����
 + 2. ����webpack.config.js
 + 3. ��� �����ߣ�loader plugin�� ���� 

- ���� ����
 + 1. ����webpack.config.js
 + 2. ���ذ��������� css-loader
 + 3. ����ļ�
 + 4. plugin

## ������

- webpack -p ѹ��js����
- webpack --progress �鿴����
- webpack -color �����cmd���������ɫ
- webpack -w �������д��� Ȼ���Զ����
- wepback --config  �������������ļ�·��

## loader (������)

- css-loader style-loader ����ʽ��������
 + ���� `yarn add css-loader style-loader`

- url-loader file-loader ��ͼƬ��������
 + ���� `yarn add url-loader file-loader`
 + url-loader�ǽ�ͼƬת����base64
 + file-loader�ǽ�ͼƬ�ƶ�����Ӧλ��
- babel-loader babel-core (babelת��)es6�﷨תes5
 + ���� `yarn add babel-core babel-loader`
 + babel-core��babel�еĺ��Ĵ��� babel-loader ��������webpack
 + babel  ���ֱ��ʹ�����޷���es6=��es5
 + es2015+ stage0��stage1(stage2(stage3)))= es6��ȫ�﷨

## source-map(��ԭ��ѹ�����뻹ԭ)

- devtool��ֵ�кܶ���ϸ��[����](https://doc.webpack-china.org/configuration/devtool/)

- ͨ���������ļ������`devtool` ����ǰѹ����Ĵ������sourcemap����ѹ������ļ��л�����һ��map�ļ�

```
devtool:"source-map",
```
## plugin (���)

### ѹ��js

- ͨ��pluginѹ��js��webpack -p ѹ����ʽһ��

- ����
 + 1.����webpack
 + 2.���plugin
 ```
  plugins: [  
   new webpack.optimize.UglifyJsPlugin()
   ]
 ```
### ����js

- Ŀ�ģ���Сjs�����
- ����:
 + 1.����webpack
 + 2.�޸����
 ```
 entry:{
       "vender":["jquery"],
       "bundle":path.join(__dirname,"src","main.js")
   },
 ```
 + 3.���plugin
 ```
  plugins: [
       //ѹ��js  webpack -p �ı��ʾ�����ʹ��webpack�е� UglifyJsPlugin
       //����js
       //name ��Ҫ���������
       //filename �����λ��
       new webpack.optimize.CommonsChunkPlugin({
           name:'vender',
           filename:'vender.js'
       })
   ]
 ```
### ����css

- Ŀ��: ��Сbundle.js ���
- ���� 
 + 1. ���ط���Ĳ�� `yarn add extract-text-webpack-plugin`
 + 2. ����� `const ExtractTextPlugin = require("extract-text-webpack-plugin");`
 + 3. ���css
 ```
   {
             test: /\.css$/,
             use: ExtractTextPlugin.extract({
                 fallback: "style-loader",
                 use:"css-loader"
             })
         },
 ```
 + 4. ����css
 ```
  plugins: [ 
       //����css
       new ExtractTextPlugin("styles.css"),
   ]
 ```

 ?
## Eslint

- eslint�������js��jsx���淶

### ����

- 1.���� `yarn add eslint-loader eslint`
- 2. ��webpack�����eslint-loader
```
			{
              //eslint
              test:/\.js$/,
              use:["eslint-loader"],
              exclude:/node_modules/
          },
```
- 3.���eslint�����ļ� `.eslintrc.js`
- 4. ��`.eslintrc.js` �ļ������ù���
```
{
  //��ֹ���·������
    "root":true,
    //��ȥ���δ��ֵ�Ĳ���
    "globals":{
        "window":true,
        "document":true,
        "$":true,
        "jquery":true,
    },
    //eslintִ�б�׼
    "parserOptions":{
        "ecmaVersion":6, //ʹ��es6����׼
        "sourceType":"module"    //���÷�ʽ module script
    },
    //��黷��
    "env":{
        "browser":true //����������ķ�ʽ���
    },
    //���ù���
    "rules":{
        // 0����  1 ���� 2����
        "no-console":1,
        "no-debugger":2
    }
}
```


?	
