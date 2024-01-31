import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";

const activity: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<number>(0);
  const activityFilter = [
    "All",
    "Follows",
    "Replies",
    "Mentions",
    "Quotes",
    "Reposts",
    "Verified",
  ];

  const filterHandle = (filterFetch: string, indexChange: number) => {
    setActiveFilter(indexChange);
  };

  return (
    <View style={{ backgroundColor: "#FFFFFF" }}>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.heading}>Activity</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filter}
          >
            {activityFilter.map((filter, index) => (
              <Pressable
                key={index}
                style={[
                  styles.textContainer,
                  {
                    backgroundColor:
                      activeFilter === index ? "#000000" : "#FFF",
                  },
                ]}
                onPress={() => filterHandle(filter, index)}
              >
                <Text
                  style={[
                    styles.textFilter,
                    { color: activeFilter === index ? "#FFF" : "#000000" },
                  ]}
                >
                  {filter}
                </Text>
              </Pressable>
            ))}
          </ScrollView>

          <View></View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 34,
    color: "black",
  },
  filter: {
    display: "flex",
    gap: 8,
    marginVertical: 10,
  },
  textContainer: {
    borderWidth: 1,
    width: 90,
    height: 34,
    borderColor: "#D9D9D9",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  textFilter: {
    fontWeight: "700",
    fontSize: 14,
    color: "#000000",
  },
});
export default activity;
