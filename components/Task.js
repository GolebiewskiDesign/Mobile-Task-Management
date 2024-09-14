import { StyleSheet, View, Text, Pressable } from "react-native";


function Task(props){
    return(
        <Pressable 
        android_ripple={{color:"gray"}} 
        onPress={props.deleteItem.bind(this, props.id)}
        style={({pressed})=> pressed && styles.pressedItem } >
            <View style={styles.task}>
                <Text style={styles.taskText}>{props.text}</Text>
            </View>
        </Pressable>
    )
}
export default Task;

const styles = StyleSheet.create({
    task:{
        margin:8,
        borderRadius: 6,
        backgroundColor:'#d4d0ff',
        alignItems:'center'
      },
      taskText:{
        color:'black',
        padding: 8,
        fontSize:20,
        fontWeight:'bold'
      },
      pressedItem:{
        opacity:0.5
      }
})
