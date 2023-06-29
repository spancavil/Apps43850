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
import TopBar from "../Components/TopBar";
import TaskList from "../Components/TaskList";
import ModalTask from "../Components/Modal";

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
            <TopBar
                input={input}
                onAddTask={onAddTask}
                setInput={setInput}          
            />
            <TaskList
                list={list}
                onPressTask={onPressTask}
            />

            <ModalTask
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                taskActive={taskActive}
            />
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
});
