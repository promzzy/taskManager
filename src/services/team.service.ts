import request from "./api.service"

const KEY = {
  users: 'USER'
}

function addTeamMember(params: any){
  return request(KEY.users, params, 'POST' )
}

export default {
  addTeamMember,
}