
import { View  , TextInput , Button , StyleSheet} from 'react-native'
import { useState } from 'react';


function TodoInput(props) {

    const [enteredTodoText, setEnteredTodoText] = useState('');
      // Set the todo text
  function enterTodoText(enteredText) {
    setEnteredTodoText(enteredText);
  }
  onPress = ()=>{
    props.onTodoAdded(enteredTodoText);
    setEnteredTodoText(''); // Clear the input after adding todo
  }
  return (
    <View style={styles.flexForTodo}>
        <TextInput
          style={styles.inputText}
          onChangeText={enterTodoText}
          placeholder="Add your todo"
          value={enteredTodoText} // Controlled input value
        />
        <Button title="Add Todo" color={"#c41043"} onPress={onPress} />
      </View>
  )
}

export default TodoInput

const styles = StyleSheet.create({
    flexForTodo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'yellow',
        paddingBottom: 20,
        marginBottom: 20,
      },
      inputText: {
        borderWidth: 2,
        borderColor: '#c41043',
        borderRadius: 150,
        width: '75%',
        marginRight: 5,
        padding: 7,
        color : '#c41043',
        fontSize: 15,
      },
})