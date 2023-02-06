import request from "./api.service"

const KEY = {
  users: 'USER'
}

function addTeamMember(params: any){
  return request(KEY.users, params, 'POST' )
}

const teamService = {
  addTeamMember,
}

export default teamService;