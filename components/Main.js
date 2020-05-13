import React, { Component } from "react";
import { StyleSheet, ScrollView, AsyncStorage } from "react-native";

import { Router, Scene, Reducer } from "react-native-router-flux";
import { connect } from "react-redux";

import Home from "./home";
import NewQuote from "./NewQuote";

//importing data
import Data from "../quotes.json";

import { getQuotes } from "../action/index";

// reducer for router
const reducerCreate = (params) => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    return defaultReducer(state, action);
  };
};

// scene style
const getSceneStyle = (props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: "#fff",
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64;
  }
  return style;
};

class Main extends Component {
  // get data
  componentDidMount() {}

  render() {
    return (
      <ScrollView style={styles.container}>
        <Router createReducer={reducerCreate}>
          <Scene key="root">
            <Scene key="Home" component={Home} title="Home" />
            <Scene key="NewQuote" component={NewQuote} title="New Quote" />
          </Scene>
        </Router>
      </ScrollView>
    );
  }
}

function mapStateToProps(state, props) {
  return {};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(mapStateToProps, { getQuotes })(Main);
