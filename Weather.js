import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {LinearGradient} from 'expo';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
    Rain:{
        colors: ["#00C6FB", "#005BEA"],
        title: "Raining",
        subtitle: "Stay in your room and take a nap",
        icon: "ios-rainy"
    },

    Clear:{
        colors: ["#EFF61F", "#EFF61F"],
        title: "Sunny Day",
        subtitle: "Better go to the library",
        icon: "ios-sunny"
    },

    Thunderstorm:{
        colors: ["#00ECBC", "#1FF6D9"],
        title: "Thunderstorm",
        subtitle: "What a great weather to study",
        icon: "ios-thunderstorm"
    },

    Clouds:{
        colors: ["#085A98", "#2F4F4F"],
        title: "Clouds",
        subtitle: "Better bring umbrella with you",
        icon: "ios-cloudy"
    },

    Snow:{
        colors: ["#F0F8FF", "#F5FFFA"],
        title: "Snow",
        subtitle: "Not in Australia.......",
        icon: "ios-snow"
    },

    Drizzle:{
        colors: ["#87CEEB", "#B0E0E6"],
        title: "Drizzle",
        subtitle: "Nice weather to have a cup of coffee",
        icon: "ios-rainy-outline"
    }



}

function Weather({temp, weatherName}){
    console.log(weatherName);
    return(
        <LinearGradient 
        colors= {weatherCases[weatherName].colors} 
        style = {styles.container}>
        <View style={styles.upper}>
            <StatusBar hidden={true} />
            <Ionicons color = "white" size ={150}  name ={weatherCases[weatherName].icon}/>    
            <Text style={styles.temperature}>{temp}°</Text>
        </View>
        <View style = {styles.lower}>
            <Text style={styles.title}> {weatherCases[weatherName].title} </Text>
            <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>

        </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired
};

export default Weather;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    upper:{
        flex:1,
        alignItems:"center",
        justifyContent:'center'
    },

    temperature:{
        fontSize: 50,
        backgroundColor:"transparent",
        color:"white",
        marginTop: 15
    },

    lower:{
        flex:1,
        alignItems:'flex-start',
        justifyContent:"flex-end",
        paddingLeft: 25
    },
    title:{
        fontSize: 38,
        backgroundColor:"transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300"

    },
    subtitle:{
        fontSize: 25,
        backgroundColor:"transparent",
        color:"white",
        marginBottom: 30

    }
});