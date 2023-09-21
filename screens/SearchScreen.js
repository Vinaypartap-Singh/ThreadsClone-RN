import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import SearchResults from "../components/SearchResults";

export default function SearchScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 20 }}>
      <View>
        <Text style={{ fontWeight: 700, fontSize: 24 }}>Search</Text>
        <View
          style={{
            marginTop: 10,
            borderWidth: 1,
            borderRadius: 10,
            paddingVertical: 10,
            flexDirection: "row",
            paddingHorizontal: 10,
            alignItems: "center",
            gap: 10,
            backgroundColor: "#ededed",
            borderColor: "#ededed",
          }}
        >
          <MagnifyingGlassIcon size={25} color={"gray"} />
          <TextInput
            placeholder="Search"
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor={"gray"}
          />
        </View>
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        <SearchResults />
        <SearchResults />
        <SearchResults />
        <SearchResults />
        <SearchResults />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
