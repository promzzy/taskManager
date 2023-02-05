function request(key: string, payload: any, method: string){
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
if(method === "POST"){
  const localStore: any = localStorage.getItem(key)
    const savedItem: any = JSON.parse(localStore) || [];
    const findItem = savedItem.filter((item: any) => item.id !== payload.id);
        localStorage.setItem(key, JSON.stringify([...findItem, {...payload, id: payload?.id ? payload?.id : savedItem?.length + 1 || 1}]))
        return new Promise((resolve, _ ) => resolve({ message: 'success'}) )
    }
    if(method === 'PUT'){

    } else {
      localStorage.setItem(key, JSON.stringify(payload))
      return({message: 'saved successfully'})
    }
}

export default request