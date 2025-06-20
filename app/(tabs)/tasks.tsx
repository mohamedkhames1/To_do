import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  FlatList, StyleSheet, KeyboardAvoidingView, Platform
} from 'react-native';
import TaskItem from '../../components/TaskItem';
import { useTheme } from '../theme/ThemeContext';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export default function TasksScreen() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const addTask = () => {
    if (!input.trim()) return;
    const newTask: Task = {
      id: Date.now().toString(),
      text: input,
      completed: false,
    };
    setTasks(prev => [...prev, newTask]);
    setInput('');
  };

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={[styles.container, isDark && styles.containerDark]}
    >
      <Text style={[styles.title, isDark && styles.textDark]}>ToDo Tasks</Text>

      <View style={styles.inputRow}>
        <TextInput
          placeholder="New task..."
          placeholderTextColor={isDark ? '#aaa' : '#666'}
          value={input}
          onChangeText={setInput}
          style={[styles.input, isDark && styles.inputDark]}
        />
        <TouchableOpacity onPress={addTask} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggle={() => toggleTask(item.id)}
            onDelete={() => deleteTask(item.id)}
            theme={theme}
          />
        )}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  containerDark: { backgroundColor: '#121212' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 16, color: '#000' },
  textDark: { color: '#fff' },
  inputRow: { flexDirection: 'row', marginBottom: 20 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: '#000',
  },
  inputDark: {
    backgroundColor: '#1e1e1e',
    borderColor: '#444',
    color: '#fff',
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: { color: '#fff', fontSize: 20 },
});
