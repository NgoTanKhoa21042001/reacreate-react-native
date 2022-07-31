import { StyleSheet, Text, View, StatusBar } from "react-native";
import Constants from "expo-constants";
export default function App() {
  return (
    <View>
      <StatusBar style="dark" backgroundColor="#61dafb" />
      <Text>Open up App.js to start working on your p!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
  },
});
