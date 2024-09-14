import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View,  FlatList, Button,Text, TextInput} from 'react-native';
import {useState} from "react";
import TaskInput from './components/TaskInput';



export default function App() {

  const [modalVisible, setModalVisible] = useState(false);
  const [task, setTask] = useState([]); 


  function startAddTaskHandler(){
    setModalVisible(true);
   }

  function cancelAddTaskHandler(){
    setModalVisible(false);
  }

  function addTaskHandler(enteredTask){
    setTask(currentTask => [...currentTask,{task: enteredTask, id:Math.random().toString()}])
    cancelAddTaskHandler();
  };

  function deleteTaskHandler (id) {
    setTask(currentTask=> {
      return currentTask.filter((goal)=> goal.id !== id);
    });
  }


  return (
    <>
      <StatusBar style="light" />
        <View style={styles.appContainer}>
            <Button title="Add new Goal" color="cyan" onPress={startAddTaskHandler}  />
            <TaskInput taskHandler={addTaskHandler} visible={modalVisible} cancelTask={cancelAddTaskHandler} /> 
            <View style={styles.goalsContainer}>
              <FlatList 
              data={task} 
              renderItem={(itemData)=>{
                return(
                <Text>Here will be the Task with {itemData.item.task}</Text>)
              }}
              keyExtractor={(item,index)=>{
                return item.id;
              }}
              alwaysBounceVertical={false} />
            </View>
            <View style={styles.footer}>
                <Text>This is a footer</Text>
            </View>
      </View>
    </>
  );
} 

 
const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingHoriziontal:50,
  },
  goalsContainer:
  {
    flex: 5,
  },
  footer:{
    flex:1,
    backgroundColor:'blue'
  }

});
 