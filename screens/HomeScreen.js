import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HomePost from "../components/HomePost";

export default function HomeScreen() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ backgroundColor: "white", flex: 1 }}
    >
      <View style={{ marginVertical: 10, alignItems: "center" }}>
        <Image
          source={{
            uri: "https://freelogopng.com/images/all_img/1688663386threads-logo-transparent.png",
          }}
          style={{ width: 40, height: 40, objectFit: "contain" }}
        />
      </View>

      <HomePost />
      <HomePost />
      <HomePost />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
