import React from "react";
import { Alert, StyleSheet, Text, View, Image} from 'react-native';
import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });

export default function Movie({title, year, img, navigation}){

  
    return (
        
            <View style={{flexDirection : "row", paddingBottom : 20}} >
                <Image style={styles.logo} source={{uri : img}} />
                <Text style={{alignSelf : "center"}} onPress={() => {
            navigation.navigate('Info', {
              name: title,
              
            });
          }}>{title} </Text>
                <Text style={{alignSelf : "center"}}>{year}</Text>
            </View>
        
    )


}