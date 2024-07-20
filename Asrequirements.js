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
const photo = require("./assets/Capture.jpg");


export default function Login() {
  const [activeTab, setActiveTab] = useState("Asset Condition");
  const TabList = ["Asset Condition", "Work Monitor"];
  return (
    <View style={{ padding: 15 }}>
      <View style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
        <TouchableOpacity>
          <ImageBackground
            source={leftarrow}
            style={{ width: 20, height: 20,top:2 }}
          ></ImageBackground>
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontWeight: 600, marginLeft: 20 }}>
          Condition of Asset
        </Text>
      </View>

      <View style={{}}>
        <TextInput
          placeholder="Search near by Asset"
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
            style={{ width: 20, height: 20, bottom: 30, marginLeft: 335 }}
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
      {activeTab == "Asset Condition" && (
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

          <View style={{ marginTop: 15 }}>
            <TextInput
              placeholder="Asset ID & Name"
              style={{
                borderWidth: 1,
                paddingLeft: 10,
                padding: 5,
                borderColor: "gray",
                borderRadius: 10,
              }}
            ></TextInput>
            <TextInput
              placeholder="Asset Condition"
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
              placeholder="Description"
              style={{
                borderWidth: 1,
                paddingLeft: 10,
                borderColor: "gray",
                marginTop: 18,
                borderRadius: 10,
                height: 140,
              }}
            ></TextInput>
            <Text
              style={{
                padding: 10,
                marginTop: 10,
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              Photograph
            </Text>
            <View>
      <Text
        style={{
          borderWidth: 1,
          paddingLeft: 10,
          padding: 5,
          borderColor: "gray",
          marginTop: 18,
          borderRadius: 10,
          height: 160,
        }}
      >
        <TouchableOpacity
         
        >
          <ImageBackground
            source={photo}
            style={{ width: 60, height: 60,marginLeft:140,marginTop:10 }}
          ></ImageBackground>
          <Text style={{ fontSize: 18, fontWeight: 500,marginLeft:115,marginTop:10}}>Capture Photo</Text>
          <Text style={{marginLeft:20  }}>Upload JPEG,PNG,PDF[resolution 800×400px]</Text>
        </TouchableOpacity>
      </Text>
      </View>
      <View style={{marginTop:20}}>
          <Button title="SAVE" color="#FF8C00" />
        </View>
            <TextInput
              placeholder="Description"
              style={{
                borderWidth: 1,
                paddingLeft: 10,
                borderColor: "gray",
                marginTop: 18,
                borderRadius: 10,
                height: 140,
              }}
            ></TextInput>
          </View>
        </ScrollView>
      )}

      {activeTab == "Work Monitor" && (
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
              placeholder="Work ID & Name"
              style={{
                borderWidth: 1,
                paddingLeft: 10,
                padding: 5,
                borderColor: "gray",
                borderRadius: 10,
              }}
            ></TextInput>
            <TextInput
              placeholder="Status of Work"
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
              placeholder="Note"
              style={{
                borderWidth: 1,
                paddingLeft: 10,
                padding: 5,
                borderColor: "gray",
                marginTop: 18,
                borderRadius: 10,
                height: 140,
              }}
            ></TextInput>

            <Text
              style={{
                padding: 10,
                marginTop: 10,
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              Photograph
            </Text>
            <View>
      <Text
        style={{
          borderWidth: 1,
          paddingLeft: 10,
          padding: 5,
          borderColor: "gray",
          marginTop: 18,
          borderRadius: 10,
          height: 160,
        }}
      >
        <TouchableOpacity
         
        >
          <ImageBackground
            source={photo}
            style={{ width: 60, height: 60,marginLeft:140,marginTop:10 }}
          ></ImageBackground>
          <Text style={{ fontSize: 18, fontWeight: 500,marginLeft:115,marginTop:10}}>Capture Photo</Text>
          <Text style={{marginLeft:20  }}>Upload JPEG,PNG,PDF[resolution 800×400px]</Text>
        </TouchableOpacity>
      </Text>
      </View>
      <View style={{marginTop:20}}>
          <Button title="SAVE" color="#FF8C00" />
        </View>
          
            <Text
              style={{
                borderWidth: 1,
                paddingLeft: 10,
                padding: 5,
                borderColor: "gray",
                marginTop: 18,
                borderRadius: 10,
                height: 180,
              }}
            ></Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
}
