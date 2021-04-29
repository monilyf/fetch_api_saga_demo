import React, { Component } from 'react'
import { SafeAreaView,StyleSheet,FlatList, Text, TouchableOpacity, View, } from 'react-native'

import {connect} from 'react-redux'


import {fetchUserRequest} from '../../redux/reducers/FetchAPIApp/actions'



export class FetchAPIApp extends Component {
    
    renderItemComponent = data => (
        <TouchableOpacity style={{marginHorizontal:40}}>
          <Text style={{ fontSize: 18,
    fontWeight:'bold',
    color:'#68abab',}}>{data.item.name}</Text>
          <Text style={{fontSize:16,
    marginTop:7,
    color:'#68abab'}} key={data.item.id}>{data.item.email}</Text>

        </TouchableOpacity>
      );
    
      ItemSeparator = () => (
        <View
          style={{
           borderWidth:1,
        
            marginHorizontal:40,
            marginVertical:10,
            borderColor: '#28527a',
            
          }}
        />
      );
    render() {
        return (
            <SafeAreaView >

       
          <View style={{alignItems:'center',marginBottom:20,marginTop:40}}>
                <TouchableOpacity
                          //  onPress={()=>this.props.fetchUsers()} 
                           onPress={()=>this.props.fetchUserRequest()} 
                          
                           >
                  <Text 
                    style={styles.btnStyle}>
                    Get Data
                  </Text>
                </TouchableOpacity>
              </View>
           {/* <View style={{flex:3}}> */}
    

           <FlatList
            data={this.props.data}
            renderItem={item => this.renderItemComponent(item)}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={this.ItemSeparator}
          />
        

           {/* </View> */}
       
            </SafeAreaView>                
        )
        
    }     
    
}


const mapStateToProps = state => {
    console.log("STATE=",state)
    console.log("STATE data=",state.fetchApi.data)

    return({ loading:state.fetchApi.loading,data:state.fetchApi.data,error:state.fetchApi.error})
}                                              
const mapDispatchToProps=dispatch=>{// ({ action must be sent by dispatch method
    
 return({
  // fetchUsers:()=>dispatch(fetchUsers())
  fetchUserRequest:()=>dispatch(fetchUserRequest())

 })
}
        
export default connect(mapStateToProps,mapDispatchToProps)(FetchAPIApp)

const styles=StyleSheet.create({
  btnStyle: {
    marginBottom: 4,
    color: '#fff',
    fontSize: 20,
    textAlign: 'right',
    letterSpacing: 1,
    paddingVertical:20,
    paddingHorizontal:40,
    backgroundColor:'#126e82',
    borderRadius:30
  },

})
// export default styles