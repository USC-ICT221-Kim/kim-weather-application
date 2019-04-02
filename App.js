import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TextStyle } from 'react-native';
import Weather from "./Weather";

export default class App extends Component {

  state = {
    isLoaded: true
  };

  render() {
    const {isLoaded} = this.state;
    return (
      <View style={styles.container}>
         {isLoaded ? (
         <Weather />
         ) : ( 
         <View style={styles.loading}>
           <Text style={styles.loadingText}>Getting the weather information</Text>
         </View> 
         )}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loading:{
    flex:1,
    backgroundColor: 'yellow',
    justifyContent:'flex-end',
    paddingLeft: 30
  },
  loadingText:{
    fontSize:35,
    marginBottom: 90,
  }
  
});
