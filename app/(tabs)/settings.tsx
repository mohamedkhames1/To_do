import { View, Text, StyleSheet, Switch } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

export default function SettingsScreen() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      <Text style={[styles.title, isDark && styles.textDark]}>Dark Mode</Text>
      <Switch
        value={isDark}
        onValueChange={toggleTheme}
        trackColor={{ false: '#ccc', true: '#007AFF' }}
        thumbColor={isDark ? '#fff' : '#f4f3f4'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
    backgroundColor: '#fff',
  },
  containerDark: {
    backgroundColor: '#1c1c1c',
  },
  title: {
    fontSize: 20, marginBottom: 10, color: '#000',
  },
  textDark: {
    color: '#fff',
  },
});
