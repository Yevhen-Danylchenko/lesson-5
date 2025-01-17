import React, { useState } from 'react'; 
import TaskItem from './TaskItem';
import {Text, View, StyleSheet, Button, TextInput, FlatList} from "react-native";
import {useContext} from "react";
import {AuthContext} from "../App";

const TaskListScreen = () => {
    const {user, setUser} = useContext(AuthContext);
	const [tasks, setTasks] = useState([]); 
	const [title, setTitle] = useState(''); 
	const [description, setDescription] = useState('');

	const addTask = () => { 
		if (title && description) { 
			setTasks([...tasks, { id: Date.now().toString(), title, description, completed: false }]); 
			setTitle(''); 
			setDescription(''); 
		} 
	};

	const toggleCompleteTask = (taskId) => { 
		setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task)); 
	};

	const deleteTask = (taskId) => { 
		setTasks(tasks.filter(task => task.id !== taskId)); 
	};

	const onLogout = () => {
		setUser('');
	}

	return (
	  <View style={styles.container}> 
			<Text style={styles.text}>Привіт, {user.name}!</Text> 
			<TextInput placeholder="Назва завдання" 
				value={title} 
				onChangeText={setTitle} 
				style={styles.input} 
			/> 
			<TextInput placeholder="Опис завдання" 
				value={description} 
				onChangeText={setDescription} 
				style={styles.input} 
			/> 
			<Button title="Додати завдання" onPress={addTask} /> 
			<FlatList 
				data={tasks} 
				keyExtractor={item => item.id} 
				renderItem={({ item }) => ( 
					<TaskItem 
						task={item} 
						onToggleComplete={toggleCompleteTask} 
						onDelete={deleteTask} 
					/> 
				)} 
				style={styles.list} 
			/> 
			<Button title="Вихід" onPress={onLogout} style={styles.logoutButton} />
		  
	  	</View>
	)
}

export default TaskListScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 20,
		marginBottom: 10,
	},
	input: { 
		marginBottom: 10, 
		borderBottomWidth: 1, 
		borderColor: 'grey', 
		width: '100%', 
	}, 
	list: { 
		marginTop: 20, 
		width: '100%', 
	}, 
	logoutButton: { 
		marginTop: 20, 
	},
})