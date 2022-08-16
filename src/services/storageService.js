function save(key, val) {
  localStorage.setItem(key, JSON.stringify(val))
}

function load(key) {
  var val = localStorage.getItem(key)
  return JSON.parse(val)
}
export const storageService = {
  save,
  load,
}
