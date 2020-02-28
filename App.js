import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import List from './src/List';
import SectionListBasics from './src/SectionListBasics';
import SectionListDays from './src/SectionListDays';
import HttpExample from './src/HttpExample';
import RandomUser from './src/RandomUser';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Avatar
          rounded
          size="xlarge"
          title="EW"
          showEditButton
          onPress={() => console.log("Works!")}
        />
        <Text style={styles.welcome}>Emma Watson</Text>
        <View style={{ flex: 0, flexDirection: 'row' }}>
          <Button title="IN" onPress={() => console.log("In...!")} />
          <Button title="OUT" onPress={() => console.log("Out...!")} style={styles.red} />

        </View>

        <RandomUser></RandomUser>

        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>


      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  red: {
    backgroundColor: 'red',
    color: 'red'
  }
});