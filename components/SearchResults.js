import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { auth, db } from "../firebase";
import { arrayUnion, doc, updateDoc, getDoc } from "firebase/firestore";

export default function SearchResults({ data, searchInput, setSearchInput }) {
  const currentUser = auth.currentUser.uid;
  const [followUserCurrent, setFollowUserCurrent] = useState(false);

  useEffect(() => {
    // Check if the current user is already following this user
    async function checkFollowingStatus() {
      try {
        const userRef = doc(db, "users", currentUser);
        const userDoc = await getDoc(userRef);
        const userFollowers = userDoc.data()?.followers || [];

        if (userFollowers.includes(data.id)) {
          // If the user is already following, setFollowUserCurrent to true
          setFollowUserCurrent(true);
        }
      } catch (error) {
        console.error("Error checking following status:", error);
      }
    }

    checkFollowingStatus();
  }, [data.id, currentUser]);

  const followUser = async (userdata) => {
    try {
      const userRef = doc(db, "users", currentUser);

      // Update the Firestore document to add the liked post using arrayUnion
      await updateDoc(userRef, {
        followers: arrayUnion(userdata.id),
      });

      // Update the local state to reflect the new follow status
      setFollowUserCurrent(true);

      Alert.alert(
        "Followed",
        `You have started following ${userdata.username}`,
        [
          {
            text: "Ok",
            style: "default",
          },
          {
            text: "Cancel",
            style: "cancel",
          },
        ],
        { cancelable: true }
      );
    } catch (error) {
      console.error("Error following user:", error);
    }
  };

  const isSearchMatch =
    data.accountId.toLowerCase().includes(searchInput.toLowerCase()) ||
    data.username.toLowerCase().includes(searchInput.toLowerCase());

  if (!isSearchMatch) {
    return null;
  }

  if (data.id === currentUser) {
    return null;
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
        <View style={{ gap: 8 }}>
          <Text style={{ fontWeight: "600" }}>{data.accountId}</Text>
          <Text style={{ fontWeight: "500", color: "#a3a3a3" }}>
            {data.username}
          </Text>
          <Text style={{ fontWeight: "500" }}>
            {data.followers?.length > 0 ? "followerd" : "0 followers"}
          </Text>
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
          onPress={() => followUser(data)}
        >
          <Text style={{ textAlign: "center" }}>
            {followUserCurrent ? "Following" : "Follow"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
