import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
const bgImg = require("./assets/home-bg.png");
const bglogo = require("./assets/map-logo.jpg");
const bglogo1 = require("./assets/sync-logo.png");
const rightarrow = require("./assets/right-arrow.jpg");

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, width: "100%", backgroundColor: "#000" }}>
      <ImageBackground
        source={bgImg}
        style={{ flex: 1, shadowOpacity: 0.2, shadowRadius: 5 }}
        onPress={() => navigation.navigate('Login')}
      ></ImageBackground>
      <View
        style={{
          flex: 1,
          padding: 20,
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
          Home
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
            padding: 10,
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
              source={bglogo}
              style={{
                width: 60,
                height: 50,
                marginRight: 15,
              }}
            ></ImageBackground>
            <View style={{}}>
              <Text style={{ fontSize: 18, fontWeight: 500 }}>Mapping</Text>
              <Text style={{ fontSize: 10 }}>Lorem ipsum dolor sit amet</Text>
            </View>
          </View>
          <TouchableOpacity>
            <ImageBackground
              source={rightarrow}
              style={{ width: 20, height: 20 }}
              onPress={() => navigation.navigate('Mapping')}
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
            padding: 10,
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
              source={bglogo1}
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
      </View>
    </View>
  );
}
