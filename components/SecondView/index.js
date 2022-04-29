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
export default function SecondView() {
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
            uri: "https://media.istockphoto.com/vectors/smartphone-with-checkmark-on-display-vector-illustration-flat-cartoon-vector-id887987872?b=1&k=6&m=887987872&s=612x612&w=0&h=L4J6LlygnPQ91wHj0hxn_iMvRbx_ILC-V9wGTdyINvs=",
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
            Success
          </Text>
          <Text
            style={{
              fontSize: "20px",
              fontWeight: "500",
              textAlign: "center",
              color: "grey",
            }}
          >
            Your digital ID has been succesfully created.
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
