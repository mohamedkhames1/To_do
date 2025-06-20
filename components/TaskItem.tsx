import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface Props {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}

const TaskItem: React.FC<Props> = ({ task, onToggle, onDelete }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.textContainer} onPress={onToggle}>
        <Text style={[styles.text, task.completed && styles.completed]}>
          {task.completed ? '✅ ' : '🕒 '}
          {task.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
  },
  textContainer: { flex: 1 },
  text: { fontSize: 16 },
  completed: { textDecorationLine: 'line-through', color: '#888' },
  delete: { fontSize: 18, paddingLeft: 12 },
});

export default TaskItem;
