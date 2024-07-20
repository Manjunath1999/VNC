import React from "react";
import { View, Text, ImageBackground, TextInput, Button } from "react-native";

const logoIMG = require("./assets/background.jpg");

export default function Login({ navigation }) {
  return (
    <View style={{ flex: 1, width: "100%", backgroundColor: "#000" }}>
      <ImageBackground source={logoIMG} style={{ flex: 1 }}>
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 35,
            marginTop: 60,
          
          }}
        >
          VNC Project Image
        </Text>
        <Text style={{ textAlign: "center", fontSize: 18, marginTop: 15 }}>
          Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod
          tempor.
        </Text>
      </ImageBackground>

      <View
        style={{
          flex: 1,
          padding: 20,
          backgroundColor: "white",
          marginTop: 1,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          overflow: "hidden",
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: 700, marginBottom: 20 }}>
          Welcome Back!
        </Text>
        <TextInput
          placeholder="Enter Name"
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderColor: "gray",
            backgroundColor: "#fff",
          }}
        ></TextInput>
        <TextInput
          placeholder="Enter Mobile Number"
          style={{
            marginBottom: 50,
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderColor: "gray",
            backgroundColor: "#fff",
          }}
        ></TextInput>
        <View style={{ padding: 5 }}>
          <Button title="Sign In" onPress={() => navigation.navigate('Home')}/>
        </View>
        <View style={{ padding: 5 }}>
          <Button title="NOT NOW" />
        </View>
      </View>
    </View>
  );
}
