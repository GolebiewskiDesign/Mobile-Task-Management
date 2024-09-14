import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View,  FlatList, Button,Text, TextInput} from 'react-native';
import {useState} from "react";



export default function App() {

  const [modalVisible, setModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]); 


  function startAddGoalHandler(){
    setModalVisible(true);
   }

  function cancelAddGoalHandler(){
    setModalVisible(false);
  }

  function addGoalHandler(enteredGoalText){
    setCourseGoals(currentCourseGoals => [...currentCourseGoals,{task: enteredGoalText, id:Math.random().toString()}])
    cancelAddGoalHandler();
  };

  function deleteGoalHandler (id) {
    setCourseGoals(currentCourseGoals=> {
      return currentCourseGoals.filter((goal)=> goal.id !== id);
    });
  }


  return (
    <>
      <StatusBar style="light" />
        <View style={styles.appContainer}>
            <Button title="Add new Goal" color="cyan" onPress={startAddGoalHandler}  />
            <TextInput placeholder="Type new Task" />
            <View style={styles.goalsContainer}>
              <FlatList 
              data={courseGoals} 
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
 