
import {createStore,applyMiddleware} from 'redux'
import rootReducer from '../reducers'

import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga'


// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// let middleware = [thunk];


// export default function configureStore(initialState){
    const store = createStore(
        rootReducer,
        // applyMiddleware(thunk) 
        applyMiddleware(sagaMiddleware)
                         
    );
    //  run the saga
    sagaMiddleware.run(rootSaga) 


    // print(store)
    // return store;
// }
export default store

