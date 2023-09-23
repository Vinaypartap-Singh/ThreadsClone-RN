import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import SearchResults from "../components/SearchResults";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { themeColor } from "../theme/themeColors";

export default function SearchScreen() {
  const [searchResults, setSearchResults] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    const userCollection = collection(db, "users");

    const getData = onSnapshot(userCollection, (snapshot) => {
      const allUsers = [];
      snapshot.forEach((doc) => {
        allUsers.push({ id: doc.id, ...doc.data() });
      });
      setSearchResults(allUsers);
    });

    return () => getData();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 20 }}>
      {searchResults ? (
        <View>
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
                onChangeText={(text) => setSearchInput(text)}
              />
            </View>
          </View>
          {/* <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}
          > */}
          {searchResults?.map((data, index) => {
            return (
              <SearchResults
                key={index}
                data={data}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
              />
            );
          })}
        </View>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size={"large"} color={themeColor.primaryColor} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
