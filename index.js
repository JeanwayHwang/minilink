const axios = require('axios');

function minilink(url, token, callback) {
    if (!url || !token || !callback || (typeof callback !== 'function')) {
        console.error('调用参数错误');
        return;
    }
    // 借助百度短网址服务：调用接口需附带用户自行申请的token用于鉴权
    axios({
        url: 'https://dwz.cn/admin/v2/create',
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Token': token
        },
        data: {
            url
        }
    }).then(res => {
        callback(res.data);
    });
}

module.exports = minilink;
