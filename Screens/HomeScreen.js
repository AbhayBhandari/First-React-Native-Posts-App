import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import PostsScreen from "./PostsScreen";

function HomeScreen({navigation}) {
  return (
    <View>
      <View style={styles.headerBox}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../images/welcome.png")}
        />
      </View>
      <View style={styles.footerBox}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Posts")}>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "900",
                fontFamily: "serif",
              }}
            >
              See Posts
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.greetingBox}>
        <Text style={styles.textStyle}>This is React Native Learning App.</Text>
        <Text style={styles.textStyle}>Created By Abhay Bhandari.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  headerBox: {
    backgroundColor: "#4afff0",
    height: "50%",
  },

  image: {
    top: "15%",
    alignSelf: "center",
    width: "90%",
    height: "30%",
  },

  greetingBox: {
    alignSelf: "center",
    backgroundColor: "white",
    height: "40%",
    width: "90%",
    borderRadius: 20,
    position: "absolute",
    top: "35%",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
  },

  footerBox: {
    backgroundColor: "#787a7a",
    height: "50%",
    justifyContent: "flex-end",
  },

  textStyle: {
    alignSelf: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
    fontFamily: "sans-serif-condensed",
    fontWeight: "700",
  },

  button: {
    width: "70%",
    height: "15%",
    alignSelf: "center",
    backgroundColor: "#4afff0",
    bottom: "10%",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default HomeScreen;
