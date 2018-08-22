exports.getData = function(method, data){
  return new Promise((resolve, reject) => {
    resolve(JSON.stringify({
      code: 0,
      msg: '请求方法是：' + method + '传递的参数有：' + JSON.stringify(data)
    }))
  })
}
