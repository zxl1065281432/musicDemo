export const setItem = function (name, value) {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(name, value)
}

// 从本地取出
export const getItem = function (name) {
  const data = window.localStorage.getItem(name)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

// 删除本地数据
export const removeItem = function (name) {
  window.localStorage.removeItem(name)
}
