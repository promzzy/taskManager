import request from "./api.service"

const KEY = {
  users: 'USER'
}

function onRegister(params: any){
  return request(KEY.users, params, 'POST', 'REGISTER' )
}
function onLogin(){
 return request(KEY.users, {}, 'GET' )
}

function updateProfile(params: any){
  return request(KEY.users, params, 'POST' )
}

const authService = {
  onRegister,
  onLogin,
  updateProfile,
}

export default authService;