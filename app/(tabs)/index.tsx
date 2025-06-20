import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../theme/ThemeContext";

export default function HomeScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const goToTasks = () => {
    router.push("/(tabs)/tasks");
  };

  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      <Text style={[styles.heading, isDark && styles.textDark]}>
        📝 ToDo App
      </Text>
      <Text style={[styles.subheading, isDark && styles.textDark]}>
        Stay organized and get things done!
      </Text>

      <TouchableOpacity onPress={goToTasks} style={styles.button}>
        <Text style={styles.buttonText}>Go to Tasks</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9f0fb",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  containerDark: {
    backgroundColor: "#121212",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2a2a2a",
    marginBottom: 12,
  },
  subheading: {
    fontSize: 16,
    color: "#555",
    marginBottom: 30,
    textAlign: "center",
  },
  textDark: {
    color: "#fff",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
