import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
const leftarrow = require("./assets/left-arrow.png");
const Search = require("./assets/search.png");
const map1 = require("./assets/map.jpg");

export default function Login() {
  const [activeTab, setActiveTab] = useState("Same Owner");
  const TabList = ["Same Owner", "Different Owner"];
  return (
    <View style={{ padding: 15 }}>
      <View style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
        <TouchableOpacity>
          <ImageBackground
            source={leftarrow}
            style={{ width: 20, height: 20 }}
          ></ImageBackground>
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontWeight: 600, marginLeft: 20 }}>
          General Information
        </Text>
      </View>

      <View style={{}}>
        <TextInput
          placeholder="Search near by plots"
          style={{
            height: 40,
            marginTop: 10,
            borderWidth: 1,
            paddingLeft: 10,
            padding: 5,
            borderColor: "gray",
            display: "flex",
            flexDirection: "row",
            borderRadius: 3,
          }}
        ></TextInput>
        <TouchableOpacity>
          <ImageBackground
            source={Search}
            style={{ width: 20, height: 20,bottom:30,marginLeft:335}}
          ></ImageBackground>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {TabList.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              paddingHorizontal: 15,
              paddingVertical: 10,
              backgroundColor: activeTab == item ? "#FF8C00" : "#fff",
              borderRadius: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => setActiveTab(item)}
          >
            <Text
              style={{
                color: activeTab == item ? "#fff" : "black",
                fontWeight: 600,
                fontSize: 18,
              }}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {activeTab == "Same Owner" && (
        <ScrollView>
          <View style={{}}>
            <Text style={{ marginTop: 30, fontSize: 16, fontWeight: 600 }}>
              Where you'll be
            </Text>
          </View>
          <ImageBackground
            source={map1}
            style={{ width: 400, height: 202, marginTop: 15 }}
          ></ImageBackground>

          <View style={{ marginTop: 10 }}>
            <TextInput
              placeholder="khatedar Name"
              style={{
                borderWidth: 1,
                paddingLeft: 10,
                padding: 5,
                borderColor: "gray",
                borderRadius: 10,
              }}
            ></TextInput>
            <TextInput
              placeholder="Survey No"
              style={{
                borderWidth: 1,
                paddingLeft: 10,
                padding: 5,
                borderColor: "gray",
                marginTop: 18,
                borderRadius: 10,
              }}
            ></TextInput>

            <TextInput
              placeholder="Part Hissa No"
              style={{
                borderWidth: 1,
                paddingLeft: 10,
                padding: 5,
                borderColor: "gray",
                marginTop: 18,
                borderRadius: 10,
              }}
            ></TextInput>
            <TextInput
              placeholder="Khata No (Optional)"
              style={{
                borderWidth: 1,
                paddingLeft: 10,
                padding: 5,
                borderColor: "gray",
                marginTop: 18,
                borderRadius: 10,
              }}
            ></TextInput>
            <TextInput
              placeholder="Mobile No (Optional)"
              style={{
                borderWidth: 1,
                paddingLeft: 10,
                padding: 5,
                borderColor: "gray",
                marginTop: 18,
                borderRadius: 10,
              }}
            ></TextInput>
          </View>
        </ScrollView>
      )}

      {activeTab == "Different Owner" && (
        <ScrollView>
          <View style={{}}>
            <Text style={{ marginTop: 20, fontSize: 16, fontWeight: 600 }}>
              Where you'll be
            </Text>
          </View>
          <ImageBackground
            source={map1}
            style={{ width: 400, height: 180, marginTop: 15 }}
          ></ImageBackground>

          <View style={{ marginTop: 10 }}>
            <TextInput
              placeholder="khatedar List"
              style={{
                borderWidth: 1,
                paddingLeft: 10,
                padding: 5,
                borderColor: "gray",
                borderRadius: 10
              }}
            ></TextInput>
            <TextInput
              placeholder="khatedar Name"
              style={{
                borderWidth: 1,
                paddingLeft: 10,
                padding: 5,
                borderColor: "gray",
                borderRadius: 10,
                marginTop: 18,
              }}
            ></TextInput>
            <TextInput
              placeholder="Survey No"
              style={{
                borderWidth: 1,
                paddingLeft: 10,
                padding: 5,
                borderColor: "gray",
                marginTop: 18,
                borderRadius: 10,
              }}
            ></TextInput>
            <TextInput
              placeholder="Part Hissa No"
              style={{
                borderWidth: 1,
                paddingLeft: 10,
                padding: 5,
                borderColor: "gray",
                marginTop: 18,
                borderRadius: 10,
              }}
            ></TextInput>
            <TextInput
              placeholder="Khata No"
              style={{
                borderWidth: 1,
                paddingLeft: 10,
                padding: 5,
                borderColor: "gray",
                marginTop: 18,
                borderRadius: 10,
              }}
            ></TextInput>
            <TextInput
              placeholder="Mobile No"
              style={{
                borderWidth: 1,
                paddingLeft: 10,
                padding: 5,
                borderColor: "gray",
                marginTop: 18,
                borderRadius: 10,
              }}
            ></TextInput>
          </View>
        </ScrollView>
      )}

      <View
        style={{
          // display: "flex",
          flexDirection: "row",
          // justifyContent: "space-between",
          marginTop: 18,
        }}
      >
        <View style={{ width: 180 }}>
          <Button title="Cancel" color="#FF8C00" />
        </View>
        <View style={{ width: 180, paddingLeft: 10 }}>
          <Button title="Skip" color="#FF8C00" />
        </View>
      </View>
    </View>
  );
}