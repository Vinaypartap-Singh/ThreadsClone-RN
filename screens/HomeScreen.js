import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HomePost from "../components/HomePost";
import { auth } from "../firebase";

export default function HomeScreen() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ backgroundColor: "white", flex: 1 }}
    >
      <View style={{ marginVertical: 10, alignItems: "center" }}>
        <Image
          source={require("../assets/images/tLogo.png")}
          style={{ width: 40, height: 40, objectFit: "contain" }}
        />
      </View>

      <HomePost />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
