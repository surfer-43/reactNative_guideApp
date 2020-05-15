import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [ totalGoals, setTotalGoals ] = useState([]);
  const [ modalIsVis, setModalIsVis ] = useState( false );


  const addGoalHandler = (goal) => {
    console.log('*** new goal to be added: ', goal);
    // not garanteed to have the old state
    // setTotalGoals([...totalGoals, enteredGoal]);
    
    /**
     * for FlatList to work right it needs specific properties or object shapes
     * {key:{{random id}}, item: "{{string value}}"}
    */

    setTotalGoals( currentGoals => [...totalGoals, {key: Math.random().toString(), value: goal}]);
    showModalHandler();
  }

  const cancelAddingGoal = () => {
    showModalHandler();
  }

  const deleteItemHandler = (goalId) => {
    setTotalGoals( (totalGoals) => {
      const newTotalGoals = totalGoals.filter( goal => goal.key !== goalId );
      return newTotalGoals;
    })
  }

  const showModalHandler = () => {
    console.log("state of the modal: ", modalIsVis);
    setModalIsVis( modalIsVis => !modalIsVis);
  }

  return (
    <View style={styles.mainContainer}>
      <Button title="Open Modal" onPress={showModalHandler}/>
      <GoalInput 
        isVis={modalIsVis}
        addGoal={addGoalHandler}
        cancelGoal={cancelAddingGoal}
      />
      <FlatList 
        data={totalGoals} 
        keyExtractor={itemData => itemData.key}
        renderItem={ itemData => {
          return (
            <GoalItem 
              id={itemData.item.key}
              onDelete={deleteItemHandler}
              value={itemData.item.value}
            />
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
  }
});
