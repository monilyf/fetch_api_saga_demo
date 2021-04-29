import axios from 'axios';

export const fetchUserRequest = () => {
  return {
    type: 'FETCH_USER_REQUEST',
  };
};

const fetchUserSuccess = user => {
  return {
    type: 'FETCH_USER_SUCCESS',
    payload: user,
  };
};

const fetchUserFailure = error => {
  return {
    type: 'FETCH_USER_FAILURE',
    payload: error,
  };
};

// thunk async
// export const fetchUsers = () => {
//   return function (dispatch) {
//     dispatch(fetchUserRequest());
//     axios
//       .get('https://jsonplaceholder.typicode.com/users')
//       .then(response => {
//         const user = response.data;
//         console.log('hii fetch users--',user);

//         dispatch(fetchUserSuccess(user));
//       })
//       .catch(error => {
//         dispatch(fetchUserFailure(error.message));
//       });
  
//   };
// };

  // console.log('hii ');
    
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => {response
    //     console.log('res--',response.data)
    //   }
    //   )
    //   .then(responseJson => {
    //     const user = responseJson.data;
    //     console.log('hii fetch   users--',user);

    //     dispatch(fetchUserSuccess(user));
    //   })
    //   .catch(error => {
    //         dispatch(fetchUserFailure(error.message));
    //       });
    
    // console.log('from home', this.state.apiData.title);