import React from 'react'
import { Text , StyleSheet, Pressable} from 'react-native'

function TodoItem(props) {

  function deleteTodo(){
    props.onDelete(props.id)

  }

  return (
    <Pressable onPress={deleteTodo}>
     <Text style={styles.todo}>{props.text}</Text>
    </Pressable>
   
  )
}

export default TodoItem

const styles = StyleSheet.create({
    todo: {
        borderWidth : 2,
        borderColor: "#c41043",
        padding : 10,
        margin : 2,
        textAlign : 'center',
        fontSize : 15,
        backgroundColor : "#c41043",
        color : "white",
        borderRadius : 100,
    
      }
})