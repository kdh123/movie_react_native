import React from "react";
import { Alert, StyleSheet, Text, View, Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export default class Info extends React.Component{

    render(){

       

        return (
            <View>
                <Text>{JSON.stringify(this.props.navigation.getParam('name', 'NO-ID'))}</Text>
            </View>
        )

    }
   

}


