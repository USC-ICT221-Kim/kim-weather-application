import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TextStyle } from 'react-native';
import Weather from "./Weather";

export default class App extends Component {

  state = {
    isLoaded: false,
    error: null
  };

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
      this.setState({
        isLoaded: true
      });
    },
    error => {
      this.setState({
        error:error
      })
    }
    );
  }
  render() {
    const {isLoaded, error} = this.state;
    return (
      <View style={styles.container}>
         {isLoaded ? (
         <Weather />
         ) : ( 
         <View style={styles.loading}>
           <Text style={styles.loadingText}>Getting the weather information</Text>
           {error? <Text style={styles.errorText}>{error}</Text> : null}
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

  errorText:{
    color: "red",
    backgroundColor:"transparent",
    marginBottom: 50
  },

  loading:{
    flex:1,
    backgroundColor: 'yellow',
    justifyContent:'flex-end',
    paddingLeft: 30
  },
  loadingText:{
    fontSize:35,
    marginBottom: 30,
  }
  
});
