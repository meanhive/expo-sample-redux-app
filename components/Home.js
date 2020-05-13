import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { Actions } from "react-native-router-flux";

class Home extends Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
        <Button title="Add New Quote" onPress={() => Actions.NewQuote()} />
      </View>
    );
  }
}

export default Home;
