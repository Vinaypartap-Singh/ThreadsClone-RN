import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  ChatBubbleOvalLeftIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "react-native-heroicons/outline";
import { HeartIcon as HeartSolid } from "react-native-heroicons/solid";
import { AntDesign } from "@expo/vector-icons";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function ProfileThreadCard({ data }) {
  const likedData = data.likedPost;
  const [likedPost, setLikedPost] = useState();
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
  return (
    <View>
      {data?.threads ? (
        <View>
          {data?.threads.map((thread, index) => {
            return (
              <View
                key={index}
                style={{ flexDirection: "row", gap: 10, marginBottom: 30 }}
              >
                {/* Profile Image */}
                <View style={{ width: "17%" }}>
                  <Image
                    source={{ uri: data?.profileImage }}
                    width={"100%"}
                    height={60}
                    style={{ objectFit: "cover", borderRadius: 100 }}
                  />
                </View>
                <View style={{ width: "83%" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingRight: 20,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontWeight: 600 }}>{data.accountId}</Text>
                    <View style={{ flexDirection: "row", gap: 10 }}>
                      <Text style={{ fontSize: 16 }}>5m</Text>
                      <EllipsisHorizontalIcon color={"gray"} />
                    </View>
                  </View>
                  <View style={{ marginVertical: 10 }}>
                    <Text>{thread}</Text>
                  </View>
                  {/* Post Buttons */}
                  <View style={{ marginTop: 9, flexDirection: "row", gap: 20 }}>
                    {likedData?.includes(thread) ? (
                      <TouchableOpacity>
                        <HeartSolid color={"red"} />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity onPress={() => likedPost(thread)}>
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
      ) : (
        <View>
          <Text>No Threads Found</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
