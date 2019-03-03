
import React, {Component} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
import CodePush from 'react-native-code-push';


const CodePushConfig = {
  installMode: CodePush.CheckFrequency.MANUAL
}


class App extends Component {

  checkForUpdates = () => {
    CodePush.sync({
      updateDialog: false,
      installMode: CodePush.InstallMode.IMMEDIATE
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Code Push v2!</Text>
        <Button
          title='Check for Updates'
          onPress={this.checkForUpdates}
        />     
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
});


export default CodePush(CodePushConfig)(App);
