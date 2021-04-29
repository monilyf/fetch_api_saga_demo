// import {combineReducers} from 'redux';

// export default combineReducers({
//     libraries:()=>[]
// });

const initialState = {
  counter: 0,
  loading:false,
  data:[],
}
console.log('Start- ', initialState.counter,initialState.loading,initialState.data)

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case 'INCREASE_COUNTER_ASYNC': //saga 
      console.log('Hello bsic',state.counter)
      return { counter: state.counter + 1 }

 

    case 'DECREASE_COUNTER':
      // console.log('Hello bsic mionus',state.counter)

      return { counter: state.counter - 1 }
    case 'INCREASE_IF_ODD':
      if (state.counter % 2 != 0) {
        // console.log('Hello bsic odd',state.counter)

        return { counter: state.counter + 1 }
      }
      else {
        alert('Not an odd number')
      }
      return { counter: state.counter }

    // case 'FETCH_USER_REQUEST':
    //   return{
    //     loading:true,
    //     ...state,
    //   }
    // case 'FETCH_USER_SUCCESS':
    //   return{
    //     loading:false,
    //     data:action.payload,
    //     error:'',
    //   }  
    // case 'FETCH_USER_FAILURE':
    //   return{
    //     loading:false,
    //     data:[],
    //     error:action.payload,
    //   }


  }
  // console.log('state.counter- ',state.counter)
  // console.log('state- ',counter)
  // console.log('state- ',state)

  return state
}

export default CounterReducer;