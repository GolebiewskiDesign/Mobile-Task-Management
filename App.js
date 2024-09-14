import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View,  FlatList, Button} from 'react-native';
import {useState} from "react";
import TaskInput from './components/TaskInput';
import Task from './components/Task';


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
            <View style={styles.tasksContainer}>
              <FlatList 
              data={task} 
              renderItem={(taskData)=>{
                return(
                  <Task text={taskData.item.task} deleteItem={deleteTaskHandler} id={taskData.item.id} />
                )
              }}
              keyExtractor={(item,index)=>{
                return item.id;
              }}
              alwaysBounceVertical={false} />
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
  tasksContainer:
  {
    flex: 5,
  },
  footer:{
    flex:1,
    backgroundColor:'blue'
  }

});
 