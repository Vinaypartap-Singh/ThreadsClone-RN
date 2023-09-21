import {
  Image,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { EllipsisHorizontalIcon } from "react-native-heroicons/solid";
import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
  ShareIcon,
} from "react-native-heroicons/outline";
import { AntDesign } from "@expo/vector-icons";

export default function HomePost() {
  return (
    <View style={{ marginVertical: 20, marginHorizontal: 10, height: "auto" }}>
      <View
        style={{
          flexDirection: "row",
          //   alignItems: "center",
          //   backgroundColor: "red",
          paddingHorizontal: 20,
        }}
      >
        <View style={{ alignItems: "center", height: 270 }}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3560&q=80",
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
              style={{ borderWidth: 1, height: "68%", marginTop: 5 }}
            ></View>
            {/* bottom Images Stack */}
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3560&q=80",
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
                  uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3560&q=80",
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
                  uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3560&q=80",
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
        <View style={{ paddingHorizontal: 10, width: "70%", marginLeft: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "start",
              gap: 10,
              justifyContent: "space-between",
              //   backgroundColor: "blue",
            }}
          >
            <Text style={{ fontWeight: 700, fontSize: 18 }}>meta</Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Text style={{ fontWeight: 700, fontSize: 18, color: "gray" }}>
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
            <Text style={{ fontWeight: "500", width: 300, lineHeight: 23 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              praesentium velit in perspiciatis, quos quis tempora architecto
              consequuntur veritatis quasi autem omnis harum corporis quisquam
              dolorem labore quia mollitia officiis, excepturi molestiae cum.
              Rem.
            </Text>
          </View>
          {/* Button */}
          <View style={{ marginTop: 10, flexDirection: "row", gap: 20 }}>
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
    </View>
  );
}

const styles = StyleSheet.create({});
