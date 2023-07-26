/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Button} from 'react-native';

const FirstScreen = () => {
  const openAlert = () => {
    alert('You clicked the button!');
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{margin: 16}}>
        Hello
        <Text style={{color: 'red'}}> World!</Text>
      </Text>
      <Button onPress={openAlert} title="This is button" />
    </View>
  );
};

// challenge
const ChallegeScreen = () => {
  const showAlert = () => {
    alert('I am Awesome!!!');
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: 'green', margin: 10}}>
        Let's Learn React Native Framework
      </Text>
      <Text style={{marginBottom: 10}}>My name is Alexa </Text>
      <Text style={{textAlign: 'center'}}>
        Now I'm learning about
        <Text style={{color: 'blue'}}> React Native Components</Text> to build
        the user interface for android apps
      </Text>

      <Text style={{color: 'red', margin: 10}}>I Love Coding</Text>
      <Button title="CLICK ME" onPress={showAlert} />
    </View>
  );
};

export default ChallegeScreen;
