import request from "./api.service"

const KEY = {
  users: 'USER'
}

function onRegister(params: any){
  return request(KEY.users, params, 'POST' )
}
function onLogin(){
 return request(KEY.users, {}, 'GET' )
}

export default {
  onRegister,
  onLogin,
}