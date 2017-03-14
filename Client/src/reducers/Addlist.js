let i = 1;
let j = 1;
export default function (state = [], action) {

  console.log("harinathreddy"+action.type);
    switch (action.type) {
        case 'ADD_TODO':
            return [...state,
              {id : i++,item :action.item, Completed:false}];
            break;
        case 'UPDATE_TODO' :
    var list=  state.map(user=>{
      if(user.id==action.item.id)
    {
        user.Completed = !user.Completed;
    }
    return user;
  });
          return list;
          break;
    }
    return state;
}
