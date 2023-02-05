import request from "./api.service"

const KEY = {
  users: 'USER'
}

function createTask(params: any){
  return request(KEY.users, params, 'POST' )
}

export default {
  createTask,
}