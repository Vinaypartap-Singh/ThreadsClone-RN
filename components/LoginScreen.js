import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {} from "react-native-heroicons/outline";

export default function LoginScreen() {
  return (
    <View>
      <Image
        source={require("../assets/images/threadsBG.png")}
        style={{ width: "120%", height: 620, objectFit: "cover" }}
      />
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({});
