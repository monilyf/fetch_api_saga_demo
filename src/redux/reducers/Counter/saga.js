import { takeEvery, put,delay, takeLatest, call } from 'redux-saga/effects';


function* IncrementCounterAsync() {
    yield delay(4000);
    yield put({ type: "INCREASE_COUNTER_ASYNC" }) //put is same as dispatch
}
console.log('SAGA ')

function* watchIncrementCounter() {
    yield takeEvery("INCREASE_COUNTER", IncrementCounterAsync) 
}
export default watchIncrementCounter
