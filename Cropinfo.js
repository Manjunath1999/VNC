import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Select,
  TouchableOpacity,
  ScrollView,
  DropDownPicker,
  
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
const leftarrow = require("./assets/left-arrow.png");
const photo = require("./assets/Capture.jpg");

export default function Login() {
  return (
    <View style={{ padding: 15 }}>
      <View style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
        <TouchableOpacity>
          <ImageBackground
            source={leftarrow}
            style={{ width: 20, height: 20, top: 3 }}
          ></ImageBackground>
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: 600, marginLeft: 20 }}>
          Crop Plot Information
        </Text>
      </View>
      <TextInput
        placeholder="Crop Category"
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
        placeholder="Crop "
        style={{
          borderWidth: 1,
          paddingLeft: 10,
          padding: 5,
          borderColor: "gray",
          marginTop: 18,
          borderRadius: 10,
        }}
      ></TextInput>
      <Text
        style={{
          marginTop: 10,
          fontSize: 18,
          fontWeight: 800,
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
            height: 180,
          }}
        >
          <TouchableOpacity>
            <ImageBackground
              source={photo}
              style={{ width: 60, height: 60, marginLeft: 140, marginTop: 20 }}
            ></ImageBackground>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 500,
                marginLeft: 115,
                marginTop: 10,
              }}
            >
              Capture Photo
            </Text>
            <Text style={{ marginLeft: 20 }}>
              Upload JPEG,PNG,PDF[resolution 800×400px]
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
      
        <RNPickerSelect
          placeholder={{label:'select',value:'null'}}
          items={[
            { label: "opt1", value: "9",key:1 },
            { label: "opt2", value: "9" ,key:2},
            { label: "opt3", value: "9",key:3 },
            { label: "opt1", value: "9",key:9 },
            { label: "opt2", value: "9" ,key:8},
            { label: "opt3", value: "9",key:0 },
          ]}
          onValueChange={()=>{}}
          value= {null}
         
            
        />
      
    </View>
  );
}
