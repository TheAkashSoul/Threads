import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import SearchCard from "../../components/searchComponents/SearchCard";

const search: React.FC = () => {
  return (
    <View style={{ backgroundColor: "#FFFFFF" }}>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.heading}>Search</Text>
          <TextInput
            style={styles.SearchInput}
            placeholder="Search"
            placeholderTextColor="#929297"
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.SearchCardWrapper}
          >
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
          </ScrollView>
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
  SearchInput: {
    backgroundColor: "#EFEFEF",
    padding: 10,
    borderRadius: 7,
    marginTop: 10,
    fontSize: 15,
  },
  SearchCardWrapper: {
    paddingTop: 20,
    marginBottom: 254,
  },
});
export default search;
