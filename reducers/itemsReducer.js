const initialState = []

//Reducer
export default function itemsReducer(state = initialState, action) {
  //Cases
  switch (action.type){
    case 'INIT_ITEMS':{
      return action.payload
    }
    case 'GET_ITEMS':
      return state;
    default:
      return state;
  }
}

//initialize data
//allows forsnychronous load
//loads this before form
export async function initItems(dispatch, getState){
  try{
    const response = await fetch('http://192.168.2.170:3000/items');
    const state = []
    if (response.ok){
      const responseData = await response.json();

    for(let index = 0; index < responseData.length; index++){
        state.push({
          Name: responseData[index].name,
          Quantity: responseData[index].quantity,
          CategoryId: responseData[index].category,
          Id: responseData[index]._id

        })
    }
    dispatch({ type: 'INIT_ITEMS', payload: state })
    }
    else{
      Promise.reject(response)
    }
    
  } catch(error){
    console.log('Something went wrong.',error)
  }
}

export async function getData(dispatch,getState){
dispatch({type:'GET_ITEMS'})
}