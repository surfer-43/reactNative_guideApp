import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [ enteredGoal, setEnteredGoal ] = useState('');
  const [ totalGoals, setTotalGoals ] = useState([])

  const goalInputHandler = (data) => {
    setEnteredGoal(data);
  }

  const addGoalHandler = () => {
    console.log('new goal to be added: ', enteredGoal);
    // not garanteed to have the old state
    // setTotalGoals([...totalGoals, enteredGoal]);
    
    /**
     * for FlatList to work right it needs specific properties or object shapes
     * {key:{{random id}}, item: "{{string value}}"}
    */

    setTotalGoals( currentGoals => [...totalGoals, {key: Math.random().toString(), value: enteredGoal}]);
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.addContainer}>
        <TextInput 
          placeholder='Course Goal' 
          style={styles.userInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}  
        />
        <Button 
          title="Add"
          onPress={addGoalHandler}
        />
      </View>
      <FlatList 
        data={totalGoals} 
        keyExtractor={itemData => itemData.key}
        renderItem={ itemData => {
        console.log('what is in itemData: ', itemData);
        return (
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>{itemData.item.value}</Text>
          </View>
        )
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20
  },
  addContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  userInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: '80%'
  },
  listItem: {
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    backgroundColor: "#ccc",
    marginVertical: 10
  },
  listItemText: {
    color: "#999",
  }
});
