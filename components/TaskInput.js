import {StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native';
import {useState} from 'react';


function TaskInput(props) {
    const [enteredTaskText, setEnteredTaskText] = useState('');

    function taskInputHandler(entredText){
        setEnteredTaskText(entredText)
      };


      function addTaskHandler () {
        props.taskHandler(enteredTaskText);
        setEnteredTaskText('');
      }

    
    

    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/community.png')} />
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Provide Your task' 
                    onChangeText={taskInputHandler}
                    value={enteredTaskText}
                 />
                 <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button  title='Cancel' onPress={props.cancelTask} color="#ff3200" />
                   </View>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addTaskHandler} color="cyan" />
                    </View>
                 </View>
         </View>
      </Modal>
    )
}


export default TaskInput;

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        backgroundColor:'#313b6b'
      },
      textInput: {
        borderWidth:1,
        borderColor: '#d4d0ff',
        backgroundColor:'#d4d0ff',
        color:'#120438',
        borderRadius:6,
        width: '100%',
        padding:8
      },
      buttonContainer:
      {
        marginTop:16,
        flexDirection:'row'
      },
      button:{
        width: 100,
        marginHorizontal:8
      },
      image: {
        width:'30%',
        height:'15%',
        margin:20,
        objectFit:'cover',
      }
})
