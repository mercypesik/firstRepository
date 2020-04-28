import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from 'C:/Users/Lenovo/my_mobpro/mercy/components/Greeting';
import Input from 'C:/Users/Lenovo/my_mobpro/mercy/components/Input';
import Layout from 'C:/Users/Lenovo/my_mobpro/mercy/components/Layout';
import List from 'C:/Users/Lenovo/my_mobpro/mercy/components/List';

class App extends Components {
  
  constructor() {
    super();
    this.state = {
      greeting: 'Welcome to React Native'
    }
  }

  componentDidMount() {

  }

   render() {
      return (
          //Layout />
         <List />
      )
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;