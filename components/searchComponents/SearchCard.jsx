import { View, Text, Image, Pressable } from "react-native";
import React from "react";

const SearchCard = () => {
  const imgDP =
    "https://images.pexels.com/photos/3775141/pexels-photo-3775141.jpeg?auto=compress&cs=tinysrgb&w=600";

  return (
    <Pressable>
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: 14,
          justifyContent: "space-between",
        }}
      >
        <View style={{ display: "flex", flexDirection: "row", gap: 14 }}>
          <View
            style={{
              height: 33,
              width: 33,
              overflow: "hidden",
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={{ uri: imgDP }}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Text style={{ fontWeight: "600", fontSize: 16, color: "#000000" }}>
              creators
            </Text>
            <Text numberOfLines={1} style={{ color: "#A3A3A3", fontSize: 14 }}>
              Instagram creator
            </Text>
            <View>
              <Text
                style={{
                  fontWeight: "500",
                  marginTop: 8,
                  fontSize: 12,
                  color: "#464646",
                }}
              >
                2.6M followers
              </Text>
            </View>
          </View>
        </View>

        <Pressable style={{}}>
          <Text
            style={{
              borderWidth: 0.9,
              borderRadius: 7,
              borderColor: "#D9D9D9",
              fontSize: 16,
              paddingHorizontal: 22,
              paddingVertical: 6,
              color: "#000000",
              fontWeight: "500",
            }}
          >
            Follow
          </Text>
        </Pressable>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            flex: 1,
            height: 0.5,
            backgroundColor: "#DDDDDD",
            marginLeft: 47,
            marginVertical: 10,
          }}
        />
      </View>
    </Pressable>
  );
};

export default SearchCard;
