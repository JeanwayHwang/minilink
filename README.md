# minilink
短网址服务

> 目的：基于百度dwz提供短网址服务

## 安装使用

1. 前往 https://dwz.cn/ 申请鉴权token
2. 通过NPM安装minilink
3. 开始使用

### 浏览器环境:
``` javascript
    <script src="./dist/minilink.min.js"></script>
    minilink('http://www.baidu.com', 'your_token',function(result) {
        console.log(result);
    });
```

### Node环境:
``` javascript
    var minilink = require('minilink');
    minilink('http://www.baidu.com', 'your_token',function(result) {
        console.log(result);
    });
```