import React, { useState } from 'react';
import {
    View,
    TextInput,
    Button,
    Modal,
    StyleSheet
} from 'react-native'

const GoalInput = (props) => {
    const [ enteredGoal, setEnteredGoal ] = useState('');

    const goalInputHandler = (data) => {
      setEnteredGoal(data);
    }
      
    const addGoalhandler = () => {
      props.addGoal(enteredGoal);
      setEnteredGoal('');
    }

    const cancelGoalHandler = () => {
      props.cancelGoal();
      setEnteredGoal('');
    }

    return (
      <Modal 
        style={styles.modal}
        visible={props.isVis}
        animationType='slide'
      >
        <View style={styles.addContainer}>
          <TextInput 
            placeholder='Course Goal' 
            style={styles.userInput}
            onChangeText={goalInputHandler}
            value={enteredGoal}  
          />
          <View style={styles.BtnContainer}>
            <View style={styles.BtnWrapper}>
              <Button 
                title="Add"
                // personally I like this better until I figure out if there is an issue
              //   onPress={() => props.addGoal(enteredGoal)} - option one inline function that calls the props function with a parameter
              
              // .bind sets up the function to recieve parameters on 
              // the press event
              // the first is the 'this' object and anything after that are parameters 
              // passed directly to the function from the parent component
                  onPress={addGoalhandler}
              />
            </View>
            <View style={styles.BtnWrapper}>
              <Button 
                title="Cancel" 
                onPress={cancelGoalHandler}
                color="red"
              />
            </View>
          </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
    },
    addContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
        },
    userInput: {
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        width: '80%'
    },
    BtnContainer: {
      flexDirection: 'row',
      justifyContent:"space-around",
      alignItems: "center",
      width: '60%',
      paddingTop: 10,
    },
    BtnWrapper: {
      width: '40%',
      borderRadius: 6,
      borderColor: "#333",
      borderWidth: 1
    }
})

export default GoalInput;