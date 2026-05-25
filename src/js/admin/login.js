import { AdminAuth } from './auth.js'

document.addEventListener('DOMContentLoaded', () => {
  new AdminAuth().init()
})

window.logout = function () {
  const auth = new AdminAuth()
  auth.logout()
}
