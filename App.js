import React from 'react'

import { Provider } from 'react-redux'
import CounterApp from './src/screens/CounterApp'
import FetchAPIApp from './src/screens/FetchAPIApp'
import store from './src/redux/store'
import { View } from 'react-native'

// store=createStore(rootReducer)

  // console.log('store=',store)

 export class App extends React.Component {
   render() {
     return (
      <Provider store={store}>
     <View>
     <CounterApp/>
      <FetchAPIApp />
     </View>
     
    </Provider>
     )
   }
 }
 
 export default App
 