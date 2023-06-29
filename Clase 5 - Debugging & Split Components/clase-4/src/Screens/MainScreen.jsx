import {
    StyleSheet,
    TextInput,
    View,
    TouchableOpacity,
    Text,
    FlatList,
    Modal,
    Pressable
} from "react-native";
import React, { useState } from "react";

const renderItemTask = ({item, onPressTask}) => {
    return (
        <Pressable onPress={() => onPressTask(item)}>
            <View style={styles.task} key={item.id}>
                <Text style={styles.taskText}>{item.task}</Text>
            </View>
        </Pressable>
    )
}

const MainScreen = ({ taskList }) => {

    const [list, setList] = useState(taskList)
    const [input, setInput] = useState("")
    const [modalVisible, setModalVisible] = useState(false);
    const [taskActive, setTaskActive] = useState({})

    const onAddTask = () => {
        console.log("Se agregó una task");
        setList([
            ...list,
            {
                id: list.length + 1,
                task: input,
                completed: false
            }
        ])
    }

    const onPressTask = (task) => {
        console.log(task)
        setTaskActive(task)
        setModalVisible(!modalVisible)
    }

    console.log(list);

    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <TextInput
                    placeholder="Comprar vacío" 
                    style={styles.input}
                    value={input}
                    onChangeText={setInput} 
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={onAddTask}
                >
                    <Text style={styles.buttonText}>Agregar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.view2}>
                <FlatList
                    data = {list}
                    keyExtractor={task => task.id}
                    renderItem={({item}) => renderItemTask({item, onPressTask})}
                />
                {/* {list.map((item) => (
                ))} */}
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{taskActive.task}</Text>
                        <View style={styles.buttonContainer}>
                            <Pressable
                            style={[styles.button, styles.buttonDone]}
                            onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Done</Text>
                            </Pressable>
                            <Pressable
                            style={[styles.button, styles.buttonNotyet]}
                            onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Not yet</Text>
                            </Pressable>
                            <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Cancel</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    view1: {
        height: "12%",
        flexDirection: "row",
        gap: 20,
        paddingHorizontal: 10,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "flex-end",
        backgroundColor: "azure",
        width: "100%",
    },
    view2: {
        height: "88%",
        backgroundColor: "darkcyan",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 15,
    },
    input: {
        width: 250,
        height: 35,
        borderBottomColor: "deepskyblue",
        borderBottomWidth: 3,
        color: "gray",
        fontSize: 20,
    },
    button: {
        height: 35,
        width: 90,
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: "deepskyblue",
    },
    buttonText: {
        fontSize: 16,
        textAlign: "center",
    },
    task: {
        width: 200,
        backgroundColor: "azure",
        padding: 10,
        backgroundColor: "mediumpurple",
        borderRadius: 6,
        borderColor: "#000",
        borderBottomWidth: 3,
        borderRightWidth: 3,
        marginBottom: 15,
    },
    taskText: {
        fontSize: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonDone: {
        backgroundColor: 'green',
    },
    buttonNotyet: {
        backgroundColor: 'red',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
