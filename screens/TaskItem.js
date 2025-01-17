import React from 'react'; 
import { View, Text, Button, TouchableOpacity } from 'react-native'; 

const TaskItem = ({ task, onToggleComplete, onDelete }) => ( 
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}> 
    <TouchableOpacity onPress={() => onToggleComplete(task.id)}> 

        <Text style={{ textDecorationLine: task.completed ? 'line-through' : 'none' }}> {task.title}: {task.description} </Text> 
        
    </TouchableOpacity> 
    <Button title="Видалити" onPress={() => onDelete(task.id)} /> 

    </View> 
); 

export default TaskItem;