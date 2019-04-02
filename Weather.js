import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {LinearGradient} from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default class Weather extends Component{
    render(){
        return(
        <LinearGradient 
        colors= {["#00C6FB", "#005BEA", "silver"]} 
        style = {styles.container}
        >
        <View style={styles.upper}>
            <StatusBar hidden={true} />
            <Ionicons color = "white" size ={150}  name ="ios-rainy"/>    
            <Text style={styles.temperature}>60°</Text>
        </View>
        <View style = {styles.lower}>
            <Text style={styles.title}>Raining~~~~~~~</Text>
            <Text style={styles.subtitle}>For more info, look outside</Text>

        </View>
        </LinearGradient>
        );
        
    }
}

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
        fontSize: 50
        ,
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