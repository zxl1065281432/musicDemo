// 集中管理引入的vant组件
import { Button, Swipe, SwipeItem, Popup, Progress, Dialog, Toast, List } from 'vant'
// 将引入的vant组件存放在一个数组中
const plugins = [
  Button, Swipe, SwipeItem, Popup, Progress, Dialog, Toast, List
]
// 循环遍历数组 对其暴露 并使用app.use 进行注册
export default function getVant (app) {
  plugins.forEach(item => {
    return app.use(item)
  })
}
