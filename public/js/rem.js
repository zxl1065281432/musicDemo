function remSize () {
  // 获取设备的宽度
  let deviceWidth = document.documentElement.clientWidth || window.innerWidth
  if (deviceWidth >= 750) {
    deviceWidth = 750
  }
  if (deviceWidth <= 320) {
    deviceWidth = 320
  }
  // 获取html文档 设置其字体大小---
  // 设计稿 宽度 为750 750/7.5 = 100 所以 1rem = 100px
  // 设计稿 宽度 为375 375/7.5 = 50 所以 1rem = 50px
  document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px'
  //   设置body字体大小 --- 0.3 * 50 = 15px
  document.querySelector('body').style.fontSize = 0.3 + 'rem'
}
remSize()
//
window.onresize = function () {
  remSize()
}
