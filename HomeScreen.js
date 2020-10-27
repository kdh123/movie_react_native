import React from "react";
import { ActivityIndicator, FlatList, Text, View, ScrollView, Button } from 'react-native';
import Loading from './Loading';
import Movie from './Movie';
import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export default class HomeScreen extends React.Component{


    /* constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
   
  } */
  state = {
    data: [],
    isLoading: true
  };

  MyStack(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  componentDidMount() {

    fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.data.movies });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading,  } = this.state;
    const { navigation } = this.props;
   

    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <Loading/> : (
         
          <ScrollView>
           {/*  <Button
          title="Go to Details"
          onPress={() => {
            navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        /> */}
              { data.map(movie => <Movie key={movie.id} title={movie.title} year={movie.year} img={movie.medium_cover_image} navigation={navigation} />)}
          </ScrollView>
         
        )}
      </View>
    );
  }
    
}