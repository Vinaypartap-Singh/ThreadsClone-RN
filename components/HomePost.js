import {
  Image,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { EllipsisHorizontalIcon } from "react-native-heroicons/solid";
import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
  ShareIcon,
} from "react-native-heroicons/outline";
import { HeartIcon as HeartSolid } from "react-native-heroicons/solid";
import { AntDesign } from "@expo/vector-icons";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function HomePost({ data }) {
  const userId = auth.currentUser.uid;
  const [likedPost, setLikedPost] = useState();
  const profileInfo = data.userProfile;
  const [userData, setUserData] = useState(null);

  const likePost = async (post) => {
    try {
      const postRef = doc(db, "users", `${userId}`);

      // Update the Firestore document to add the liked post using arrayUnion
      await updateDoc(postRef, {
        likedPost: arrayUnion(post),
      });

      // Update the local state to reflect the new like status
      setLikedPost(post);

      const getProfileData = async () => {
        const docRef = doc(db, "users", `${userId}`);

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const profileInformation = docSnap.data();
          setUserData(profileInformation);
        }
      };

      getProfileData();
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  useEffect(() => {
    const getProfileData = async () => {
      const docRef = doc(db, "users", `${userId}`);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const profileInformation = docSnap.data();
        setUserData(profileInformation);
      }
    };

    getProfileData();
  }, []);

  return (
    <>
      {data?.threads ? (
        <View
          style={{
            marginVertical: 20,
            marginHorizontal: 10,
            height: "auto",
            gap: 50,
          }}
        >
          {data?.threads.map((data, index) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  //   alignItems: "center",
                  //   backgroundColor: "red",
                  paddingHorizontal: 20,
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    height: "auto",
                  }}
                >
                  <Image
                    source={{
                      uri: profileInfo.profileImage,
                    }}
                    style={{
                      width: 60,
                      height: 60,
                      objectFit: "cover",
                      borderRadius: 100,
                    }}
                  />
                  <View style={{ alignItems: "center" }}>
                    <View
                      style={{ borderWidth: 1, height: 40, marginTop: 5 }}
                    ></View>
                    {/* bottom Images Stack */}
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <Image
                        source={{
                          uri: profileInfo.profileImage,
                        }}
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 100,
                          marginTop: -10,
                        }}
                      />
                      <Image
                        source={{
                          uri: profileInfo.profileImage,
                        }}
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 100,
                          marginTop: 10,
                        }}
                      />
                      <Image
                        source={{
                          uri: profileInfo.profileImage,
                        }}
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 100,
                          marginTop: -10,
                        }}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    paddingHorizontal: 10,
                    width: "80%",
                    marginLeft: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "start",
                      gap: 10,
                      justifyContent: "space-between",
                      //   backgroundColor: "blue",
                    }}
                  >
                    <Text style={{ fontWeight: 700, fontSize: 18 }}>
                      {profileInfo.username}
                    </Text>
                    <View style={{ flexDirection: "row", gap: 10 }}>
                      <Text
                        style={{ fontWeight: 700, fontSize: 18, color: "gray" }}
                      >
                        5m
                      </Text>
                      <EllipsisHorizontalIcon color={"gray"} />
                    </View>
                  </View>
                  {/* Post Content */}
                  <View
                    style={{
                      backgroundColor: "#fdfdfd",
                      borderRadius: 10,
                      //   paddingHorizontal: 10,
                      paddingVertical: 10,
                    }}
                  >
                    <Text style={{ fontWeight: "700", lineHeight: 23 }}>
                      {data}
                    </Text>
                  </View>
                  {/* Button */}
                  <View
                    style={{ marginTop: 10, flexDirection: "row", gap: 20 }}
                  >
                    {userData?.likedPost?.includes(data) ? (
                      <TouchableOpacity>
                        <HeartSolid color={"red"} />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity onPress={() => likePost(data)}>
                        <HeartIcon color={"black"} />
                      </TouchableOpacity>
                    )}

                    <TouchableOpacity>
                      <ChatBubbleOvalLeftIcon color={"black"} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <AntDesign name="retweet" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <PaperAirplaneIcon color={"black"} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({});
