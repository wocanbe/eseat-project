const Mock = require('mockjs');

Mock.Random.extend({
  xz: function(date) {
    var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
    return this.pick(constellations)
  }
})

const item = {
  'name': '@cname',
  'xz': '@xz'
};

exports.getData = function(method, data){
  let res = [];
  for(let i=0; i<data.size; i++){
    res.push(Mock.mock(item));
  }
  return new Promise((resolve, reject) => {
    resolve(JSON.stringify(res))
  })
}
