import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ImageCard({ title, imageName }) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.textStyle}>{title}</Text>
      <View style={styles.imageBorder}>
        <Image resizeMode="cover" style={styles.image} source={imageName} />
      </View>
      <View style={styles.icons}>
        <MaterialCommunityIcons name="heart" color="white" size={30} />
        <MaterialCommunityIcons name="comment" color="white" size={30} />
        <MaterialCommunityIcons name="share" color="white" size={30} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: "white",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    margin: 10,
    marginBottom: "20%",
  },

  icons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 15,
  },

  image: {
    width: "100%",
    height: 200,
  },

  imageBorder: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: "white",
  },

  textStyle: {
    fontFamily: "notoserif",
    color: "white",
    fontSize: 16,
    marginVertical: 15,
    marginLeft: 20,
  },
});

export default ImageCard;
