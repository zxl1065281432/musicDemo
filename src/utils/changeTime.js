// 转换日期格式
export function changeTime (num) {
  if (String(num).length === 10) {
    num = num * 1000
  }
  const date = new Date(num)
  const yy = date.getFullYear()
  const mm = date.getMonth() + 1
  const day = date.getDate()
  const h = date.getHours()
  const m = date.getMinutes()
  const s = date.getSeconds()
  return yy + '-' + mm + '-' + day + ' ' + h + ':' + m + ':' + s
}
