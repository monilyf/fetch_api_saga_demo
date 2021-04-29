import React, { Component } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {IncreaseCounter,DecreaseCounter,IncreaseIfOdd} from '../../redux/reducers/Counter/actions'


export class CounterApp extends Component {
  

    render() {
        let { counter } = this.props.counter;
        // let { loading } = this.props.loading;
        // let { data } = this.props.data;
        return (
            <SafeAreaView>
 
              <View style={{justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',marginTop:40}}>
            <TouchableOpacity onPress={()=>this.props.IncreaseCounter()} style={{padding:20,borderRadius:35,backgroundColor:'#126e82'}}>
            {/* <Icon name='plus' size={26} color='#fff'/> */}
            <Text style={{fontSize:20}}>+</Text>
            </TouchableOpacity>
            <Text style={{fontSize:26}}>{counter}</Text>
            <TouchableOpacity onPress={()=>this.props.DecreaseCounter()} style={{padding:20,borderRadius:35,backgroundColor:'#126e82'}}>
            {/* <Icon name='minus' size={26} color='#fff'/> */}
            <Text style={{fontSize:20}}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.IncreaseIfOdd()}><Text>Increment if odd</Text></TouchableOpacity>

            
              </View>
           
            </SafeAreaView>                
        )
          
    }     
    
}

const mapStateToProps = state => {
    console.log("STATE=",state)
    console.log("STATE counter=",state.counter.counter)

    return({ counter: state.counter
    })
}                                              
const mapDispatchToProps=dispatch=>// ({ action must be sent by dispatch method
    
        bindActionCreators(
            {
                IncreaseCounter,
                DecreaseCounter,
                IncreaseIfOdd,  
                // fetchUsers,                                                                 
            },
            dispatch
        );
    
     

export default connect(mapStateToProps,mapDispatchToProps)(CounterApp)

// const styles=StyleSheet.create({
   
// })
