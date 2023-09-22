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
import React, { useState } from "react";
import {
  LockClosedIcon,
  EnvelopeIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const RegisterUser = () => {
    if (username === "" || email === "" || password === "") {
      Alert.alert(
        "Invalid Details",
        "Please all the details to continue",
        [
          {
            text: "Ok",
            style: "default",
          },
          {
            text: "cancel",
            style: "cancel",
          },
        ],
        { cancelable: true }
      );
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const uid = user.uid;

          setDoc(doc(db, "users", `${uid}`), {
            username: username,
            email: email,
            createdAt: date + " " + time,
          });

          Alert.alert(
            "Account Created",
            "Your account has been created successfully. Login to Continue",
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

          navigation.navigate("Login");
          // ...
        })
        .catch((error) => {
          Alert.alert("Error", error, [
            {
              text: "Ok",
              style: "default",
            },
            {
              text: "cancel",
              style: "cancel",
            },
          ]);
          // ..
        });
    }
  };

  return (
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
            source={{
              uri: "https://freelogopng.com/images/all_img/1688663386threads-logo-transparent.png",
            }}
            style={{
              width: 80,
              height: 80,
              objectFit: "contain",
            }}
          />
        </View>

        <View>
          <Text style={{ textAlign: "center", fontWeight: 700, fontSize: 18 }}>
            Create New Account
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
            placeholder="Username"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setUsername(text)}
          />
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
          <EnvelopeIcon size={25} color={"black"} />
          <TextInput
            placeholder="Email Address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
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
          <LockClosedIcon size={25} color={"black"} />
          <TextInput
            placeholder="Password"
            secureTextEntry
            autoCorrect={false}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity
          onPress={RegisterUser}
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
            Register
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "black", fontWeight: 500, fontSize: 17 }}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ fontWeight: 700, fontSize: 17 }}>Login Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
