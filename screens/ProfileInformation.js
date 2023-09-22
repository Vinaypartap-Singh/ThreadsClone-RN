import {
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
import { BriefcaseIcon, UserIcon } from "react-native-heroicons/outline";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

export default function ProfileInformation() {
  const navigation = useNavigation();
  const currentUser = auth.currentUser.uid;
  const [bio, setBio] = useState("");
  const [accountId, setAccountId] = useState("");

  //   console.log(currentUser);

  const updateProfileInfo = async () => {
    if (bio === "" || accountId == "") {
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
    </View>
  );
}

const styles = StyleSheet.create({});
