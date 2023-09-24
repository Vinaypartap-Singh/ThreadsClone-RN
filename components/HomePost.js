import {
  Image,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { EllipsisHorizontalIcon } from "react-native-heroicons/solid";
import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
  ShareIcon,
} from "react-native-heroicons/outline";
import { AntDesign } from "@expo/vector-icons";

export default function HomePost({ data }) {
  const profileInfo = data.userProfile;
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
          {data.threads.map((data, index) => {
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
                    <TouchableOpacity>
                      <HeartIcon color={"black"} />
                    </TouchableOpacity>
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
