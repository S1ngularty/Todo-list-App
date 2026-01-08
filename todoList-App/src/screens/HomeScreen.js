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

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>
            Welcome to the homescreen!
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
