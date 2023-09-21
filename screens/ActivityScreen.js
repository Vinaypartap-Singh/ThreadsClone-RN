import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import ActivityResults from "../components/ActivityResults";

export default function ActivityScreen() {
  const [selectedActivity, setSelectedActivity] = useState("All");

  const activites = [
    {
      name: "All",
    },
    {
      name: "Requests",
    },
    {
      name: "Replies",
    },
    {
      name: "Mentions",
    },
    {
      name: "Quotes",
    },
    {
      name: "Reposts",
    },
  ];

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
      }}
    >
      <View style={{ marginTop: 20 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {activites.map((data, index) => {
            const isSelected = data.name === selectedActivity;
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedActivity(data.name)}
                style={{
                  borderWidth: 1,
                  paddingHorizontal: 40,
                  paddingVertical: 10,
                  borderRadius: 10,
                  backgroundColor: isSelected ? "black" : "white",
                  marginRight: 10,
                }}
              >
                <Text
                  style={{
                    color: isSelected ? "white" : "black",
                    fontWeight: isSelected ? "bold" : "500",
                  }}
                >
                  {data.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <ActivityResults />
        <ActivityResults />
        <ActivityResults />
        <ActivityResults />
        <ActivityResults />
        <ActivityResults />
        <ActivityResults />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
