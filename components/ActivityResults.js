import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { themeColor } from "../theme/themeColors";
import { useNavigation } from "@react-navigation/native";

export default function ActivityResults() {
  const navigation = useNavigation();
  const currentUser = auth.currentUser.uid;
  const [likedThread, setLikedThreads] = useState(null);

  useEffect(() => {
    const getProfileData = async () => {
      const docRef = doc(db, "users", `${currentUser}`);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const profileInformation = docSnap.data();
        setLikedThreads(profileInformation.likedPost);
      }
    };

    getProfileData();
  }, []);

  return (
    <View style={{ marginTop: 35 }}>
      {likedThread ? (
        <View style={{ flexDirection: "column", gap: 20 }}>
          {likedThread.map((thread, index) => {
            return (
              <View key={index} style={{ flexDirection: "row", gap: 10 }}>
                <View
                  style={{
                    borderBottomWidth: 1,
                    paddingBottom: 14,
                    borderColor: "#ededed",
                    width: "100%",
                  }}
                >
                  <View>
                    <Text style={{ fontWeight: 600, lineHeight: 30 }}>
                      {thread}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={{
                borderWidth: 1,
                borderColor: "#ededed",
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 30,
                marginRight: 10,
                backgroundColor: "black",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                View More
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 200,
          }}
        >
          <ActivityIndicator size={"large"} color={themeColor.primaryColor} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
