import { View, FlatList, StyleSheet, StatusBar } from "react-native";
import React from "react";
import ImageCard from "../components/ImageCard";
import postsData from "../postsData";

function PostsScreen() {
  return (
    <View style={styles.postsScreen}>
      <FlatList
        data={postsData}
        keyExtractor={(post) => post.id}
        renderItem={({ item }) => ( //item is inbuilt keyword-----neccesary to use item keyword always
          <ImageCard title={item.title} imageName={item.imageName} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  postsScreen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "black",
    height: "100%",
  },
});

export default PostsScreen;
