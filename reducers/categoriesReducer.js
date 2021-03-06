const initialState = []

//Reducer
export default function categoriesReducer(state = initialState, action) {
  //Cases
  switch (action.type) {
    case 'INIT_CATEGORIES': {
      return action.payload
    }
    case 'GET_CATEGORIES':
      return state;
    default:
      return state;
  }
}

//initialize data
//allows forsnychronous load
//loads this before form
export async function initCategories(dispatch, getState) {
  try {
    const response = await fetch('http://192.168.2.170:3000/category');
    if (response.ok) {
      const state = []
      const responseData = await response.json();
      for (let index = 0; index < responseData.length; index++) {
        state.push({
          Name: responseData[index].name,
          Id: responseData[index]._id
        })
      }
      dispatch({ type: 'INIT_CATEGORIES', payload: state })
    }
    else{
      Promise.reject(response)
    }
  } catch (error) {
    console.log('Something went wrong.', error)
  }
}

export async function getData(dispatch, getState) {
  dispatch({ type: 'GET_CATEGORIES' })
}