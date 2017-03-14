 export const additem = (item) => {
console.log(item);

  return  {
    type : "ADD_TODO",
    item : item
  }
};


export const updateitems = (item) => {
console.log(item);

  return  {
    type : "UPDATE_TODO",
    item : item,
  }
};
