import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';

export default function TabsLayout() {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';
          if (route.name === 'index') iconName = 'home-outline';
          else if (route.name === 'tasks') iconName = 'checkmark-done-outline';
          else if (route.name === 'settings') iconName = 'settings-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme === 'dark' ? '#fff' : '#007AFF',
        tabBarInactiveTintColor: theme === 'dark' ? '#aaa' : 'gray',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme === 'dark' ? '#1c1c1c' : '#fff',
          borderTopColor: theme === 'dark' ? '#333' : '#ddd',
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="tasks" options={{ title: 'Tasks' }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
    </Tabs>
  );
}
