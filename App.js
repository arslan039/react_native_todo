import {StyleSheet, View, FlatList} from 'react-native';
import { useState } from 'react';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';


export default function App() {

  const [todoList, setTodoList] = useState([]);

  // Add the todo text to the list
  function addTodoText(enteredTodoText) {
    if(enteredTodoText !=="") {
      setTodoList((prevTodoList) => [...prevTodoList, {text : enteredTodoText, id : Math.random().toString()}]);
      }
  }

  function deleteHandler(id){
setTodoList(todoList.filter(todo => todo.id !== id))
  }

  return (
    <View style={styles.container}>
     
      <TodoInput onTodoAdded = {addTodoText}  />

      
      <FlatList style={styles.todoList} data={todoList} renderItem={(todoItem) =>{
        return(
          <TodoItem text={todoItem.item.text} id= {todoItem.item.id} onDelete={deleteHandler} />
        )
       } }
       keyExtractor={(item, index)=>{
        return(
          item.id
        )
       }} />  

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fcfc88',
    padding: 20,
    marginHorizontal: 'auto', // Center the container horizontally

  },
  todoList:{
    height: "85%",
  },

});


