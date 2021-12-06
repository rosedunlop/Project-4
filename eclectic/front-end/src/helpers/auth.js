export const getToken = () => {
  return window.localStorage.getItem('token')    

}

export const getUserId = () => {
  return window.localStorage.getItem('id')
}

export const setUserId = (id) => {
  window.localStorage.setItem('id', id)
}

export const setToken = (token) => {
  window.localStorage.setItem('token', token)
}

export const removeToken = () => {
  window.localStorage.removeItem('token')
}

export const removeUserId = () => {
  window.localStorage.removeItem('id')
}