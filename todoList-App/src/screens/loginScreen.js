import React from "react";
import {
  View,
  Text,
  Alert,
  StatusBar,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [credentials, setCredentials] = React.useState({
    username: "",
    password: "",
  });

  return (
    <SafeAreaView style={style.main}>
      <View style={style.container}>
        <View style={style.inputView}>
          <Text style={style.inputLabel}>Username:</Text>
          <TextInput
            style={style.inputBox}
            onChangeText={(text) =>
              setCredentials((prev) => ({ ...prev, username: text }))
            }
            value={credentials.username}></TextInput>
        </View>
        <View style={style.inputView}>
          <Text style={style.inputLabel}>Password:</Text>
          <TextInput
            style={style.inputBox}
            onChangeText={(text) =>
              setCredentials((prev) => ({ ...prev, password: text }))
            }
            value={credentials.password}></TextInput>
        </View>
        <View style={style.buttonView}>
          <Pressable style={style.button}>
            <Text style={style.buttonText}>Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "start",
    alignItems: "start",
    paddingHorizontal: "30%",
  },
  container: {
    backgroundColor: "#eae6e6ff",
    height: "50%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 17,
    borderColor: "#ccc",
  },
  inputView: {
    width: "89%",
    marginVertical: "3%",
    marginHorizontal: "5%",
    paddingBottom: "5%",
  },

  inputLabel: {
    fontSize: 16,
    fontWeight: "600",
  },

  inputBox: {
    marginTop: 12,
    height: 50,
    color: "#000",
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
  },

  buttonView: {
    width: "100%",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 20,
  },
  button: {
    height:50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007AFF",
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#007AFF",
    color: "#fff",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});
