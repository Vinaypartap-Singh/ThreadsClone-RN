import {
  Alert,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { BriefcaseIcon, UserIcon } from "react-native-heroicons/outline";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

export default function ProfileInformation() {
  const navigation = useNavigation();
  const currentUser = auth.currentUser.uid;
  const [bio, setBio] = useState("");
  const [accountId, setAccountId] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const profileImages = [
    {
      url: "https://wallpapercave.com/dwp2x/wp9904153.jpg",
    },
    {
      url: "https://wallpapercave.com/dwp2x/wp12810099.jpg",
    },
    {
      url: "https://wallpapercave.com/dwp2x/wp10424263.jpg",
    },
    {
      url: "https://wallpapercave.com/dwp2x/wp12810132.jpg",
    },
    {
      url: "https://wallpapercave.com/dwp2x/wp8573359.jpg",
    },
    {
      url: "https://wallpapercave.com/dwp2x/wp9632991.jpg",
    },
    {
      url: "https://wallpapercave.com/dwp2x/wp12538430.jpg",
    },
    {
      url: "https://wallpapercave.com/dwp2x/wp2801304.jpg",
    },
  ];

  //   console.log(currentUser);

  const updateProfileInfo = async () => {
    if (bio === "" || accountId === "" || profileImage === "") {
      Alert.alert("Error", "Invalid Details", [
        {
          text: "Ok",
          style: "default",
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]);
    } else {
      setDoc(
        doc(db, "users", `${currentUser}`),
        {
          bio: bio,
          accountId: accountId,
          profileImage: profileImage,
        },
        { merge: true }
      );
    }

    Alert.alert(
      "Profile Updates",
      "You profile has been updated successfully",
      [
        {
          text: "Ok",
          style: "default",
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]
    );

    navigation.navigate("Main");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
        style={{ marginTop: 70 }}
      >
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              paddingHorizontal: 30,
              gap: 30,
              backgroundColor: "white",
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../assets/images/tLogo.png")}
                style={{
                  width: 80,
                  height: 80,
                  objectFit: "contain",
                }}
              />
            </View>

            <View>
              <Text
                style={{ textAlign: "center", fontWeight: 700, fontSize: 18 }}
              >
                Complete your profile
              </Text>
            </View>

            <Text style={{ fontSize: 16, fontWeight: 600 }}>
              Choose Profile Picture
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              {profileImages.map((data, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setProfileImage(data.url)}
                  >
                    <Image
                      source={{ uri: data.url }}
                      style={{
                        width: 60,
                        height: 60,
                        objectFit: "cover",
                        borderRadius: 50,
                      }}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>

            <View
              style={{
                borderWidth: 1,
                borderRadius: 10,
                paddingVertical: 20,
                flexDirection: "row",
                paddingHorizontal: 30,
                alignItems: "center",
                gap: 10,
              }}
            >
              <UserIcon size={25} color={"black"} />
              <TextInput
                placeholder="Account Id"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => setAccountId(text)}
              />
            </View>

            <Text style={{ color: "#bababa", fontWeight: 600 }}>
              For Example sample_._com
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 10,
                paddingVertical: 20,
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 30,
                gap: 10,
              }}
            >
              <BriefcaseIcon size={25} color={"black"} />
              <TextInput
                placeholder="Bio Information"
                autoCorrect={false}
                onChangeText={(text) => setBio(text)}
              />
            </View>
            <TouchableOpacity
              onPress={updateProfileInfo}
              style={{
                borderWidth: 1,
                borderRadius: 10,
                paddingVertical: 20,
                flexDirection: "row",
                paddingHorizontal: 30,
                gap: 10,
                alignItems: "center",
                backgroundColor: "black",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontWeight: 600, fontSize: 16 }}>
                Complete Profile
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
