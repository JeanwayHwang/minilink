module.exports = {
    extends: "airbnb-base",
    rules: {
        'indent': ['error', 4, { "SwitchCase": 1 }],
        'no-unused-vars': [2, {"vars":"all","args":"none"}],
        'quote-props': [2, "consistent"],
        'global-require': 0, // 不能使用require
        'comma-dangle': 0, // 结尾逗号
        'no-console': 0, // 不能有console，警告
        'no-param-reassign': 0, // 不允许函数参数重新赋值
        'no-unused-expressions': 0, // 不允许  this.toast.finally && this.toast.finally();形式
        'func-names': 0, // 不允许使用 const getList = function() {...}，是个警告
        'no-prototype-builtins': 0, // 不能使用prototype操作
        'no-restricted-syntax': 0, // 禁止使用for in
        'prefer-const': 0, // 如果没改变的话，必须是const
        'no-undef': 0, // 使用了未定义的变量
        'arrow-parens': 0, // 箭头函数用小括号括起来
        'object-shorthand': 0, //强制对象字面量缩写语法、
        'guard-for-in': 0, // for in循环要用if语句过滤
        'import/no-dynamic-require': 0 // 不能使用动态require
    }
};