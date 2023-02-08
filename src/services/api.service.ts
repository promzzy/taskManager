// THIS FILE IS FOR REQUEST METHODS

function request(key: string, payload: any, method: string, option?: string){
  // HANDLES GET REQUEST
if(method === "GET"){
  const localStore: any = localStorage.getItem(key)
    const savedItem: any = JSON.parse(localStore)
    if(savedItem){
      return new Promise((resolve, _) => resolve({[key]: savedItem, message: 'success'}) )
    }
       else {
          return new Promise((_, reject) => {
          reject({message: 'not found'});
        });}
    }
  // HANDLES POST AND PUT REQUEST APPART FROM REGISTER
if(method === "POST" && !option){
  const localStore: any = localStorage.getItem(key)
    const savedItem: any = JSON.parse(localStore) || [];
    const findItem = savedItem.filter((item: any) => item.id !== payload.id);
        localStorage.setItem(key, JSON.stringify([...findItem, {...payload, id: payload?.id ? payload?.id : savedItem?.length + 1 || 1}]))
        return new Promise((resolve, _ ) => resolve({ message: 'success'}) )
    }

    // HANDLE USER REGISTRATION POST REQUEST
    if(method === 'POST' && option === 'REGISTER') {
    const localStore: any = localStorage.getItem(key)
    const savedItem: any = JSON.parse(localStore) || [];
    const findItem = savedItem.find((item: any) => item.email === payload.email);
        if(!findItem){
          localStorage.setItem(key, JSON.stringify([...savedItem, {...payload, id: savedItem?.length + 1 || 1}]))
        return new Promise((resolve, _ ) => resolve({ message: 'success'}))
      }
      return new Promise((_, rejected ) => rejected({ message: 'User already exists'}))
    } else {
      localStorage.setItem(key, JSON.stringify(payload))
      return({message: 'saved successfully'})
    }
}

export default request