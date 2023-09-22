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
import { LockClosedIcon, EnvelopeIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { themeColor } from "../theme/themeColors";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const userId = auth.currentUser?.uid;

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (!authUser) {
        setLoading(false);
      }
      if (authUser) {
        const docRef = doc(db, "users", `${authUser.uid}`);

        try {
          const docSnapshot = await getDoc(docRef);

          if (docSnapshot.exists()) {
            const sub = docSnapshot.data();
            // console.log(sub);
            if (sub.bio && sub.accountId) {
              navigation.navigate("Main");
            } else {
              navigation.navigate("ProfileSetup");
            }
          } else {
            console.log("Document does not exist");
          }
        } catch (error) {
          console.log("Error");
        }
      }
    });

    return unsubscribe;
  }, []);

  const loginUser = async () => {
    if (email === "" || password === "") {
      Alert.alert("Invalid Details", "Please fill all the details to login", [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Ok",
          style: "default",
        },
      ]);
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          Alert.alert(
            "Login Success",
            "Your account has been logged in successfully. Enjoy!",
            [
              {
                text: "cancel",
                style: "cancel",
              },
              {
                text: "ok",
                style: "default",
              },
            ],
            { cancelable: true }
          );
          const docSnap = await getDoc(doc(db, "users", `${userId}`));

          if (docSnap.exists()) {
            console.log(docSnap.data());
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Alert.alert("Error", errorMessage, [
            {
              text: "Ok",
              style: "cancel",
            },
          ]);
        });
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/images/loadingLogo.png")}
              style={{
                width: 80,
                height: 80,
                objectFit: "contain",
              }}
            />
          </View>
          <ActivityIndicator
            style={{ marginTop: 30 }}
            size={"large"}
            color={themeColor.primaryColor}
          />
        </View>
      ) : (
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
                Login to your account
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
              onPress={loginUser}
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
                Login
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
                Don't have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={{ fontWeight: 700, fontSize: 17 }}>
                  Register Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
