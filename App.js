import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

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
    setTotalGoals( currentGoals => [...totalGoals, enteredGoal]);
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
      <ScrollView>
        {totalGoals.map( ( course, index ) => {
          return (
            <View key={index} style={styles.listItem}>
              <Text style={styles.listItemText}>{course}</Text>
            </View>
          )
        })}
      </ScrollView>
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
