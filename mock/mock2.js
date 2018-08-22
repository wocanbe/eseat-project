exports.getData = function(method, data){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(JSON.stringify({
        code: 0,
        msg: 'sucess'
      }))
    }, 5000)
  })
}
