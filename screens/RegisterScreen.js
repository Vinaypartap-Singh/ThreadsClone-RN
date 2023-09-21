import {
  Image,
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

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
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
      <View
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
      </View>
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
  );
}

const styles = StyleSheet.create({});
