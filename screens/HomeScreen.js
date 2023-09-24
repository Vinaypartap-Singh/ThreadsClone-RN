import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import HomePost from "../components/HomePost";
import { auth, db } from "../firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { themeColor } from "../theme/themeColors";

export default function HomeScreen() {
  const [threads, setThreads] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      const postsData = [];
      snapshot.forEach((doc) => {
        postsData.push({ id: doc.id, ...doc.data() });
      });
      setThreads(postsData);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // console.log("Threads Data: ", threads);

  return (
    <>
      {threads ? (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{ backgroundColor: "white", flex: 1 }}
        >
          <View style={{ marginVertical: 10, alignItems: "center" }}>
            <Image
              source={require("../assets/images/tLogo.png")}
              style={{ width: 40, height: 40, objectFit: "contain" }}
            />
          </View>

          {threads.map((data, index) => {
            return <HomePost data={data} key={index} />;
          })}
        </ScrollView>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size={"large"} color={themeColor.primaryColor} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
