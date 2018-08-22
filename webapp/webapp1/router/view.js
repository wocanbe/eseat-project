import extend from 'lodash/extend'
import _5379a64f from '../views/set.js'
import _05dd4c30 from '../views/index.vue'
import _60f62172 from '../views/login.vue'
import _e62b21d8 from '../views/demo/demo1.vue'
import _6cd9683d from '../views/_.vue'
const defaultRoute = {render: h => h('router-view')}
function pubFilter (file, route) {
  const extendInfo = file(route.path)
  return extend(extendInfo, route)
}
const routes = {path:'',component:defaultRoute,children:[pubFilter(_5379a64f,{path:'',component:_05dd4c30}),pubFilter(_5379a64f,{path:'login',component:_60f62172}),pubFilter(_5379a64f,{path:'demo',component:defaultRoute,children:[{path:'demo1',component:_e62b21d8}]}),{path:'*',component:_6cd9683d}]}
export default routes
