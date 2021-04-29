import {fork} from 'redux-saga/effects';

import fetchUser from '../reducers/FetchAPIApp/saga'
import watchIncrementCounter from '../reducers/Counter/saga'

export default function* rootSaga() {
    yield fork(watchIncrementCounter,'counter');
    yield fork(fetchUser,'fetchuser');
}

// import { takeEvery, put,delay, takeLatest, call } from 'redux-saga/effects';


// function* IncrementCounterAsync() {
//     yield delay(4000);
//     yield put({ type: "INCREASE_COUNTER_ASYNC" })
// }
// console.log('SAGA ')
// function* watchIncrementCounter() {
//     yield takeEvery("INCREASE_COUNTER", IncrementCounterAsync) 
// }
// export default watchIncrementCounter

// // FETCH API IN MIDDLEWARE
// // ?Pure function
// // import {fetchUsers} from '../reducers/FetchAPIApp/actions'


// // // handler or worker
// // function* fetchUser(action){
// //     try{
// //         const user = yield call(fetchUsers,action);
// //         yield put({type:"FETCH_USER_SUCCESS",payload:user});
// //     }
// //     catch(e)
// //     {
// //         yield put({type:"FETCH_USER_FAILURE",payload:e.message});
// //     }
// // }


// // // watcher
// // function* watchFetchUserRequest(){
// //     yield takeLatest("FETCH_USER_REQUEST",fetchUser);
// // }
// // export default watchFetchUserRequest;