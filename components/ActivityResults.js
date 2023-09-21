import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function ActivityResults() {
  return (
    <View style={{ marginTop: 35 }}>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3560&q=80",
            }}
            style={{
              width: 70,
              height: 70,
              objectFit: "cover",
              borderRadius: 100,
            }}
          />
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            paddingBottom: 14,
            borderColor: "#ededed",
            flexDirection: "row",
            alignItems: "center",
            // backgroundColor: "red",
            width: "80%",
            justifyContent: "space-between",
          }}
        >
          <View style={{ gap: 3 }}>
            <Text style={{ fontWeight: 600 }}>
              mohanlal <Text style={{ color: "#a3a3a3" }}>15h</Text>
            </Text>
            <Text style={{ fontWeight: 500, color: "#a3a3a3" }}>
              Followed you
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "#ededed",
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 30,
                marginRight: 10,
              }}
            >
              <Text style={{ textAlign: "center" }}>Follow</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
