import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Alert,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Surface, Searchbar, Badge } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = React.useState('')
  const authUser = useSelector((state) => state.auth.value);
  console.log(authUser);
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Surface
          style={{
            padding: 8,
            height: 80,
            width: "90%",
            marginVertical: 10,
            marginHorizontal: 20,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
          }}>
          <Text
            style={{
              fontSize: 24,
            }}>
            Welcome back {authUser.email.split("@")[0]}!
          </Text>
        </Surface>
        <Searchbar
        placeholder="Search..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        onClearIcon={true}
        style={{
          marginHorizontal:10
        }}
        >

        </Searchbar>
        <View
          style={{
            marginHorizontal: 10,
            marginVertical: 40,
            height: "70%",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "flex-start",
          }}>
          {["Task", "completed Task"].map((label) => (
            <Surface
              style={{
                padding: 8,
                height: 80,
                minWidth: 150,
                borderRadius: 5,
              }}>
              <TouchableOpacity style={{
                height:"100%",
                width:"100%",
                padding:8,
                alignItems:"center",
                justifyContent:"flex-start"
              }}
              
              onPress={()=>Alert.alert("task card","still on progress!")}>
                <Text>{label}</Text>
              </TouchableOpacity>
            </Surface>
          ))}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
