import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  LockClosedIcon,
  ArrowRightOnRectangleIcon,
} from "react-native-heroicons/outline";
import { AntDesign } from "@expo/vector-icons";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { doc, getDoc } from "firebase/firestore";
import { themeColor } from "../theme/themeColors";
import ProfileThreadCard from "../components/ProfileThreadCard";
import HomePost from "../components/HomePost";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const currentUser = auth.currentUser.uid;
  const [profileData, setProfileData] = useState(null);
  console.log(profileData?.threads);

  useEffect(() => {
    const getProfileData = async () => {
      const docRef = doc(db, "users", `${currentUser}`);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const profileInformation = docSnap.data();
        setProfileData(profileInformation);
      }
    };

    getProfileData();
  }, []);

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => {
        Alert.alert("Error", error, [
          {
            text: "ok",
            style: "default",
          },
          {
            text: "cancel",
            style: "cancel",
          },
        ]);
      });
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 20 }}>
      {profileData ? (
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

            <View
              style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
            >
              <AntDesign name="instagram" size={30} color="black" />
              <TouchableOpacity onPress={signOutUser}>
                <ArrowRightOnRectangleIcon color={"black"} size={30} />
              </TouchableOpacity>
            </View>
          </View>
          {/* Profile Informarion */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 30,
            }}
          >
            <View style={{ gap: 5, marginTop: 15 }}>
              <Text style={{ fontWeight: 600 }}>{profileData?.username}</Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <Text style={{ fontWeight: 600, fontSize: 16 }}>
                  {profileData?.accountId}
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
              <Text style={{ fontWeight: 600 }}>{profileData?.bio}</Text>
              <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                  marginTop: 5,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: -5,
                    alignItems: "center",
                  }}
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
                <View>
                  <Text style={{ fontWeight: 500 }}>
                    {profileData.followers.length - 1} Following
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Image
                source={{
                  uri: profileData.profileImage,
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
          {/* Buttons */}
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
                paddingHorizontal: 30,
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
                paddingHorizontal: 30,
              }}
            >
              <Text>Share Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 20, alignItems: "flex-start" }}>
            <TouchableOpacity
              style={{
                borderBottomWidth: 2,
                paddingHorizontal: 30,
                paddingBottom: 10,
              }}
            >
              <Text style={{ fontWeight: 500, fontSize: 16 }}>Threads</Text>
            </TouchableOpacity>
          </View>
          {/* Show Threads */}
          <View style={{ marginTop: 20 }}>
            <ProfileThreadCard data={profileData} />
            {/* <HomePost data={profileData} /> */}
          </View>
        </ScrollView>
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
