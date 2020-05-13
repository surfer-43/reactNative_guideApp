import React, { useState } from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet
} from 'react-native'

const GoalInput = (props) => {
    const [ enteredGoal, setEnteredGoal ] = useState('');

    const goalInputHandler = (data) => {
        setEnteredGoal(data);
      }    

    return (
        <View style={styles.addContainer}>
        <TextInput 
          placeholder='Course Goal' 
          style={styles.userInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}  
        />
        <Button 
          title="Add"
        //   onPress={() => props.addGoal(enteredGoal)} - option one inline function that calls the props function with a parameter
        
        // .bind sets up the function to recieve parameters on 
        // the press event
        // the first is the 'this' object and anything after that are parameters 
        // passed directly to the function from the parent component
            onPress={props.addGoal.bind(this, enteredGoal)}
        />
      </View>
    )
}

const styles = StyleSheet.create({
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
})

export default GoalInput;