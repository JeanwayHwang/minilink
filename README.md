# miniurl
短网址服务

> 目的：基于百度dwz提供短网址服务

## 安装使用

1. 前往https://dwz.cn/申请鉴权token
2. 通过NPM安装miniurl
3. 开始使用

### 浏览器环境:
``` javascript
    <script src="./miniurl.min.js"></script>
    miniurl('http://www.baidu.com', 'your_token',function(result) {
        console.log(result);
    });
```

### Node环境:
``` javascript
    var miniurl = require('miniurl');
    miniurl('http://www.baidu.com', 'your_token',function(result) {
        console.log(result);
    });
```