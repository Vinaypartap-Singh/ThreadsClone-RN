import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function SearchResults({ data, searchInput, setSearchInput }) {
  const isSearchMatch =
    searchInput === "" ||
    data.accountId.toLowerCase().includes(searchInput.toLowerCase()) ||
    data.username.toLowerCase().includes(searchInput.toLowerCase());

  if (!isSearchMatch) {
    return null; // Don't render if it doesn't match the search criteria
  }

  return (
    <View style={{ marginTop: 35, flexDirection: "row", gap: 10 }}>
      <Image
        source={{ uri: data.profileImage }}
        style={{
          width: 70,
          height: 70,
          objectFit: "cover",
          borderRadius: 100,
        }}
      />
      <View
        style={{
          borderBottomWidth: 1,
          paddingBottom: 14,
          borderColor: "#ededed",
          flexDirection: "row",
          alignItems: "center",
          width: "80%",
          justifyContent: "space-between",
        }}
      >
        <View style={{ gap: 3 }}>
          <Text style={{ fontWeight: "600" }}>{data.accountId}</Text>
          <Text style={{ fontWeight: "500", color: "#a3a3a3" }}>
            {data.username}
          </Text>
          <Text style={{ fontWeight: "500" }}>{data.followers} followers</Text>
        </View>
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
  );
}
