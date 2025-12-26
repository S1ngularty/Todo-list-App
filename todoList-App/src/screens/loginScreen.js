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
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>Username:</Text>
          <TextInput
            onChangeText={(text) =>
              setCredentials((prev) => ({ ...prev, username: text }))
            }
            value={credentials.username}></TextInput>
        </View>
        <View>
          <Text>Password:</Text>
          <TextInput
            onChangeText={(text) =>
              setCredentials((prev) => ({ ...prev, password: text }))
            }
            value={credentials.password}></TextInput>
        </View>
        <View>
          <Pressable>
            <Text>Login</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
