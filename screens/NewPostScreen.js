import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export default function NewPostScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 20 }}>
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
                  uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3560&q=80",
                }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  objectFit: "cover",
                }}
              />
              <View style={{ gap: 5 }}>
                <Text style={{ fontSize: 18, fontWeight: 600 }}>
                  vinay_._sandhu
                </Text>
                <TextInput
                  placeholder="Start a thread..."
                  placeholderTextColor={"#a3a3a3"}
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
            <TouchableOpacity>
              <Text style={{ color: "blue", fontSize: 16, fontWeight: 600 }}>
                Post
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({});
