import {
  ActivityIndicator,
  Alert,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { themeColor } from "../theme/themeColors";
import { useNavigation } from "@react-navigation/native";

export default function NewPostScreen() {
  const navigation = useNavigation();
  const userId = auth.currentUser.uid;
  const [userProfile, setUserProfile] = useState(null);
  const [thread, setThread] = useState("");

  useEffect(() => {
    const getUserInfo = async () => {
      const docRef = doc(db, "users", `${userId}`);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserProfile(docSnap.data());
      }
    };

    getUserInfo();
  }, []);

  const postThread = async () => {
    if (thread === "") {
      Alert.alert(
        "Invalid Details",
        "Please add the thread properly and then click on post",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Ok",
            style: "default",
          },
        ],
        { cancelable: true }
      );
    } else {
      try {
        Alert.alert("Posting", "We are posting your thread. Please Wait", [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Ok",
            style: "default",
          },
        ]);

        // Fetch data from firebase to check wheather some posts exist already or not

        const docRef = doc(db, "posts", `${userProfile.accountId}`);
        const docSnap = await getDoc(docRef);
        const existingThreads = docSnap.data()?.threads || [];

        existingThreads.push(thread);

        await setDoc(
          docRef,
          {
            threads: existingThreads,
            userProfile,
            userId: userId,
            likes: 0,
          },
          { merge: true }
        );

        // Add Data to Second Document Reference

        const docRef2 = doc(db, "users", `${userId}`);
        const docSnap2 = await getDoc(docRef2);
        const existingThreads2 = docSnap2.data()?.threads || [];
        existingThreads2.push(thread);

        await setDoc(
          docRef2,
          {
            threads: existingThreads2,
            userId: userId,
          },
          { merge: true }
        );

        Alert.alert(
          "Post Success",
          "Your Post has been published successfully",
          [
            {
              text: "Cancel",
              style: "cancel",
            },
            {
              text: "Ok",
              style: "default",
            },
          ],
          { cancelable: true }
        );

        setThread("");
        navigation.navigate("Home");
      } catch (error) {
        console.error("Error posting thread:", error);
      }
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 20 }}>
      {userProfile ? (
        <KeyboardAvoidingView>
          <View
            style={{
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <View>
              <Text style={{ fontSize: 22, fontWeight: 600 }}>New Thread</Text>
              <View style={{ marginTop: 20, flexDirection: "row", gap: 10 }}>
                <Image
                  source={{
                    uri: userProfile.profileImage,
                  }}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 100,
                    objectFit: "cover",
                  }}
                />
                <View style={{ gap: 5 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <Text style={{ fontSize: 18, fontWeight: 600 }}>
                      {userProfile.username}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "lightgray",
                        fontWeight: 600,
                      }}
                    >
                      {userProfile.accountId}
                    </Text>
                  </View>

                  <TextInput
                    style={{ marginTop: 8 }}
                    placeholder="Start a thread..."
                    autoCorrect={false}
                    placeholderTextColor={"#a3a3a3"}
                    onChangeText={(text) => setThread(text)}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 20,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 400 }}>
                Your followers can reply
              </Text>
              <TouchableOpacity onPress={postThread}>
                <Text style={{ color: "blue", fontSize: 16, fontWeight: 600 }}>
                  Post
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
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
