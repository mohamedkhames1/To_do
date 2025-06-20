import { Slot } from 'expo-router';
import { ThemeProvider } from './theme/ThemeContext';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
}
