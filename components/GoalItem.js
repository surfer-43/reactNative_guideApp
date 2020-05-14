import React from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet
 } from 'react-native'

const GoalItem = (props) => {

    return (
        <TouchableOpacity 
            activeOpacity={.8}
            // onPress={() =>  props.onDelete(props.id) }
            onPress={props.onDelete.bind(this, props.id)}
        >
        <View 
            style={styles.listItem}
        >
            <Text style={styles.listItemText}>{props.value}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
})

export default GoalItem;