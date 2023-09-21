import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  LockClosedIcon,
  Bars3BottomRightIcon,
} from "react-native-heroicons/outline";
import { AntDesign } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 20 }}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <LockClosedIcon color={"black"} size={30} />
          </View>

          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <AntDesign name="instagram" size={30} color="black" />
            <Bars3BottomRightIcon color={"black"} size={35} />
          </View>
        </View>
        {/* Profile Informarion */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View style={{ gap: 5, marginTop: 15 }}>
            <Text style={{ fontWeight: 600 }}>Username</Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <Text style={{ fontWeight: 600, fontSize: 16 }}>
                vinay_._sandhu
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#dfdfdf",
                  paddingHorizontal: 8,
                  borderRadius: 20,
                  paddingVertical: 4,
                }}
              >
                <Text style={{ fontSize: 12 }}>threads.net</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ fontWeight: 600 }}>Expectation</Text>
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <View
                style={{ flexDirection: "row", gap: -5, alignItems: "center" }}
              >
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
                  }}
                  style={{
                    width: 25,
                    height: 25,
                    objectFit: "cover",
                    borderRadius: 50,
                  }}
                />
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
                  }}
                  style={{
                    width: 25,
                    height: 25,
                    objectFit: "cover",
                    borderRadius: 50,
                  }}
                />
              </View>
              <Text style={{ fontWeight: 500 }}>8 followers</Text>
            </View>
          </View>
          <View>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
              }}
              style={{
                width: 80,
                height: 80,
                objectFit: "cover",
                borderRadius: 50,
              }}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "center",
            gap: 18,
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#a3a3a3",
              paddingVertical: 10,
              borderRadius: 10,
              paddingHorizontal: 50,
            }}
          >
            <Text>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#a3a3a3",
              paddingVertical: 10,
              borderRadius: 10,
              paddingHorizontal: 50,
            }}
          >
            <Text>Share Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
