import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  const goToTasks = () => {
    router.push('/(tabs)/tasks');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📝 ToDo App</Text>
      <Text style={styles.subheading}>Stay organized and get things done!</Text>

      <TouchableOpacity onPress={goToTasks} style={styles.button}>
        <Text style={styles.buttonText}>Go to Tasks</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9f0fb',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2a2a2a',
    marginBottom: 12,
  },
  subheading: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
