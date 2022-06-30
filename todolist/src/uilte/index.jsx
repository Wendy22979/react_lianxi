
let keyList = "list"

// 存储与修改
export function setList (value) {
  value = JSON.stringify(value)
  return localStorage.setItem(keyList, value)
}

// 获取
export function getList () {
  let i = localStorage.getItem(keyList)
  i = JSON.parse(i)
  return Boolean(i) ? i : []
}

// 删除
export function removeList () {
  return localStorage.removeItem(keyList)
}