import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  StyleSheet,
  Alert,
  Button,
} from "react-native";
export default function FirstView() {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View
        style={{ flex: 6, backgroundColor: "#240046", position: "relative" }}
      >
        <Image
          source={{
            uri: "https://us.123rf.com/450wm/strizh/strizh1603/strizh160300071/53408216-identificaci%C3%B3n-icono-de-la-aplicaci%C3%B3n-ilustraci%C3%B3n-vectorial-de-huellas-digitales-icono-de-huellas-da.jpg?ver=6",
          }}
          style={styles.profileImg}
        />
        <Text
          style={{
            backgroundColor: "#b100e8",
            paddingTop: "8px",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 200,
            width: "100px",
            height: "40px",
            textAlign: "center",
            position: "relative",
            color: "white",
            fontWeight: "500",
            fontSize: "18px",
          }}
        >
          STEP 1
        </Text>
      </View>

      <View style={{ flex: 4, backgroundColor: "white" }}>
        <View
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "15px",
          }}
        >
          <Text
            style={{ fontSize: "25px", fontWeight: "500", textAlign: "center" }}
          >
            Create a digital ID
          </Text>
          <Text
            style={{ fontSize: "25px", fontWeight: "500", textAlign: "center" }}
          >
            on this device
          </Text>
        </View>
      </View>
      <View style={{ flex: 2, backgroundColor: "white" }}>
        <Text
          style={{
            marginTop: "50px",
            margin: "auto",
            backgroundColor: "#4cc9f0",
            width: "350px",
            height: "40px",
            textAlign: "center",
            paddingTop: "10px",
            color: "white",
            fontSize: "15px",
            fontWeight: "500",
          }}
        >
          Next
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  profileImg: {
    height: 240,
    width: 240,
    borderRadius: 240,
    margin: "auto",
  },
});
