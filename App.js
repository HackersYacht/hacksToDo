import React, {Component} from 'react'
import {
  View, Text, TouchableOpacity, Image, StyleSheet, ScrollView,
  Modal, TextInput, KeyboardAvoidingView, TouchableHighlight, Alert
} from 'react-native'
import Header from './src/components/Header'
import Todo from './src/components/Todo'
import PopUp from './src/components/PopUp'


export default class App extends Component{
  state = {
    listOfHacks: [
      'Build my app #1',
      'Build my app #2',
      'Build my app #3',
      'Build my app #4',
      'Build my app #5',
      'Build my app #6',
      'Build my app #7',
      'Build my app #8',
    ],
    modalVisible: false,
    hack:''
  }

  add(){
    //Alert.alert('hey')
    let hacksTodo = this.state.listOfHacks
    //push the new hack to do
    hacksTodo.unshift(this.state.hack)
    this.setState({listOfHacks: hacksTodo, modalVisible: false})
  }

  render(){
    return (
      <View style={{flex: 1}}>
        <Header />
        <ScrollView>

          {
            this.state.listOfHacks.map((todoName, index)=>(
              <Todo key={index} name={todoName} />
            ))
          }

          {/*<Todo name='Build my app #1' />
          <Todo name='Build my app #2' />
          <Todo name='Build my app #3' />
          <Todo name='Build my app #4' />
          <Todo name='Build my app #5' />
          <Todo name='Build my app #6' />*/}


        </ScrollView>

        {/*Modal*/}
        <PopUp modalVisible={this.state.modalVisible}>
          <KeyboardAvoidingView behaviour='padding' enabled>

            <TextInput placeholder='your item'
              style={styles.input}
              onChangeText={(hack)=>{this.setState({hack})}}
             />
            <View style={styles.modalBtns}>
              <TouchableOpacity onPress={()=>{
                this.setState({modalVisible: false})
              }}>
                <Text style={styles.modBtn}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={()=>this.add()}>
                <Text style={styles.modBtn}>Add</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </PopUp>
        {/*Modal*/}

        {/*Fab*/}
        <TouchableOpacity style={styles.btn}
          onPress={()=>{
            this.setState({modalVisible:true})
          }}
          >
          <Text style={styles.btnTxt}>+</Text>
        </TouchableOpacity>
        {/*Fab*/}
      </View>
    )
  }
}
 const styles = StyleSheet.create(
   {
     btn: {
       position: 'absolute',
       right: 25,
       bottom: 30,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#FF9E13',
       width: 60,
       height: 60,
       borderRadius: 50
     },
     btnTxt:{
       fontSize: 40,
       color: '#FFF',
       padding: 5,
       paddingLeft: 5,
       paddingBottom: 7
     },
     modalBtns: {
       flexDirection: 'row',
       justifyContent: 'space-around'
     },
     modeBtn: {
       paddingTop: 15
     }
   }
 )
