import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList ,AsyncStorage} from 'react-native';
import Header from './app/components/Header'; //Header 컴포넌트 임포트 해오기.
import Subtitle from './app/components/Subtitle';
import Input from './app/components/Input';
import Listitem from './app/components/Listitem';

export default class App extends React.Component {
  constructor(props){
    super(props); // React.Component로 부터 app Class 에 가져와랑
    this.state= { // this == app
      inputValue: '',
      todos: [],
    }
  }
  // componentWillMount() {
  //   this.getData()
  // }
  // storeData = () => {
  //   AsyncStorage.setItem('@todo:state',JSON.stringify(this.state))
  // }
  // getData = () => {
  //   AsyncStorage.getItem('@todo:state').then((state) => {
  //     if(state !== null) { 
  //       this.setState(JSON.parse(state));
  //     }
  //   })
  // } AsyncStorage기능이 이제는 없어짐. 2020.12.28 기준
  _makeTodoItem =({item,index}) => {
    return (
      <Listitem
      name = {item.title}
      isComplete = {item.iscomplete}
      changeComplete = {() => {
        const newTodo = [...this.state.todos] //입력받은 값 넣기
        newTodo[index].iscomplete = !newTodo[index].iscomplete //!newTodo로 false 기본값을 true로 역전시킴
        this.setState({ todos: newTodo })
      }}
      deleteItem = {() => {
        const newTodo = [...this.state.todos]
        newTodo.splice(index,1) //n번째 항에서 n-1항을 없애주기
        this.setState({ todos: newTodo })
      }}/>
    );
    }
  _changeText =(value) => {
    this.setState({inputValue:value});
  }
  _addTodoItem =() => {
    if(this.state.inputValue !== "") {
      const prevTodo = this.state.todos;

      const newTodo = {title : this.state.inputValue, iscomplete: false}; //기본값 설정

      this.setState({
        inputValue: '',
        todos : prevTodo.concat(newTodo)
      });
    }
  }
  render() {
  return ( 
    <View style={styles.container}> 
      <View style={styles.headercenter}>
      <Header/>
      </View>
      <View style={styles.subtitleposi}>
        <Subtitle title="해야 할 일"/>

        <Input
        value={this.state.inputValue}
        changeText={this._changeText}
        addTodoItem={this._addTodoItem}/>
        </View>
        <View style={styles.subtitleposi}>
        <Subtitle title="해야 할 일 목록 "/>
        

        <FlatList
          data = {this.state.todos}
          renderItem = {this._makeTodoItem}
          keyExtractor = {(item,index) => {return '$(index)'}}/> 

        </View>      
      <StatusBar style="auto" />
    </View>
  );
}//keyExtractor는 key값을 받아서 매개변수에 넣고 index번호를 리턴해주는 기능 키값을받아서 해줌
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headercenter: {
    alignItems: "center",
    
  },
  subtitleposi: {
    marginLeft: 30,
    
  },
});
