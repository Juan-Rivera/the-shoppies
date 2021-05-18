// gonna use this for searchList
export const paginate = (a) => {
    let results = [];
    const mr = 4;
    if(a !== undefined){
      if(a.length < 5){
        results[0] = a;
      }else {
        const maxPages = Math.ceil(a.length/mr)
        for(let i = 0; i < maxPages; i++){
          results[i] = a.slice(mr*i, mr*i+mr);
        }
      }
      return results;
    }
  
  }