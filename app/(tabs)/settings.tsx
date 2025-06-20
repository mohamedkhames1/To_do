import { View, Text, StyleSheet, Switch, useColorScheme } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function SettingsScreen() {
  const systemTheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemTheme === 'dark');

  useEffect(() => {
    // Optional: persist user theme preference to local storage
  }, [isDarkMode]);

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <Text style={[styles.title, isDarkMode && styles.textDark]}>
        Dark Mode
      </Text>
      <Switch
        value={isDarkMode}
        onValueChange={setIsDarkMode}
        trackColor={{ false: '#ccc', true: '#007AFF' }}
        thumbColor={isDarkMode ? '#fff' : '#f4f3f4'}
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
