import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TextStyle } from 'react-native';
import Weather from "./Weather";

const API_KEY = "ae5dbaf9c58f7393e53be2306fd37b8d";

export default class App extends Component {

  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null,
    cityName: null
  };

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude)
    },
    error => {
      this.setState({
        error:error
      })
    }
    );
  }

  _getWeather = (lat, long) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`
      )
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        temperature: json.main.temp,
        name: json.weather[0].main,
        // cityName: json.sys.country,
        cityName: json.name,
        isLoaded: true 
      })
    });
  };



  render() {
    const { isLoaded, error, temperature, name, cityName } = this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? (
          <Weather
            weatherName={name}
            cityNameIs={cityName}
            temp={Math.ceil(temperature - 273.15)}
          />
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the weather information</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
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
