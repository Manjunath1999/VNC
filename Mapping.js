import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
const bgImg = require("./assets/mapping.jpg");
const bgImg1 = require("./assets/mapping-logo1.jpg");
const rightarrow = require("./assets/right-arrow.jpg");
const bgImg2 = require("./assets/logo2.jpg");
const bgImg3 = require("./assets/download-icon.png");

export default function Mapping() {
  return (
    <View style={{ flex: 1, width: "100%", backgroundColor: "#000" }}>
      <ImageBackground
        source={bgImg}
        style={{ flex: 1, shadowOpacity: 0.2, shadowRadius: 5, padding: 10 }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            marginTop: 10,
            color: "white",
          }}
        >
          VNC project mobile
        </Text>
      </ImageBackground>
      <View
        style={{
          flex: 1,
          padding: 10,
          backgroundColor: "white",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          overflow: "hidden",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: 700,
          }}
        >
          VCN Modules
        </Text>
        <Text>Description about the modules in this project.</Text>

        <View
          style={{
            height: 70,
            width: 370,
            borderWidth: 1,
            borderColor: "black",
            display: "flex",
            flexDirection: "row",
            padding: 20,
            alignItems: "center",
            borderRadius: 10,
            marginTop: 20,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ImageBackground
              source={bgImg1}
              style={{ width: 50, height: 50, marginRight: 15 }}
            ></ImageBackground>

            <View style={{}}>
              <Text style={{ fontSize: 18, fontWeight: 500 }}>
                Crop Mapping
              </Text>
              <Text style={{ fontSize: 10 }}>Lorem ipsum dolor sit amet</Text>
            </View>
          </View>
          <TouchableOpacity>
            <ImageBackground
              source={rightarrow}
              style={{ width: 20, height: 20 }}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 70,
            width: 370,
            borderWidth: 1,
            borderColor: "black",
            display: "flex",
            flexDirection: "row",
            padding: 20,
            alignItems: "center",
            borderRadius: 10,
            marginTop: 20,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ImageBackground
              source={bgImg2}
              style={{ width: 50, height: 50, marginRight: 15 }}
            ></ImageBackground>

            <View style={{}}>
              <Text style={{ fontSize: 18, fontWeight: 500 }}>
                Asset Condition Monitoring
              </Text>
              <Text style={{ fontSize: 10 }}>Lorem ipsum dolor sit amet</Text>
            </View>
          </View>
          <TouchableOpacity>
            <ImageBackground
              source={rightarrow}
              style={{ width: 20, height: 20 }}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 70,
            width: 370,
            borderWidth: 1,
            borderColor: "black",
            display: "flex",
            flexDirection: "row",
            padding: 20,
            alignItems: "center",
            borderRadius: 10,
            marginTop: 20,
            justifyContent: "space-between",
            borderStyle: 'dashed',
            borderColor:'red'
          }}
        >
           <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ImageBackground
              source={bgImg3}
              style={{ width: 50, height: 50, marginRight: 15 }}
            ></ImageBackground>
               <Text style={{ fontSize: 18, fontWeight: 500 }}>
                Download channel tile map
              </Text>
                </View>
                </View>
          

      </View>
    </View>
  );
}
