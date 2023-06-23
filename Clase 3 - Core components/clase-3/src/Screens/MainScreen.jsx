import { StyleSheet, TextInput, View, TouchableOpacity, Text} from 'react-native'
import React from 'react'

const MainScreen = ({taskList}) => {
    console.log(taskList);
  return (
    <View style = {styles.container}>
        <View style={styles.view1}>
            <TextInput style = {styles.input}/>
            <TouchableOpacity 
                style = {styles.button}
            >
                <Text>Agregar tarea</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.view2}>
            {taskList.map(item => 
                <View style = {styles.task} key={item.id}>
                    <Text>
                        {item.task}
                    </Text>
                </View>
                )
            }
        </View>
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    view1: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "azure",
        width: '100%'
    },
    view2: {
        flex: 8,
        backgroundColor: "blue",
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 15
    },
    input: {
        width: 150,
        borderBottomColor: 'deepskyblue',
        borderBottomWidth: 3,
        marginBottom: 8
    },
    button: {
        paddingHorizontal: 10,
        width: 150,
        backgroundColor: 'deepskyblue'
    },
    task: {
        width: '80%',
        backgroundColor: 'azure',
        padding: 10,
    }
})