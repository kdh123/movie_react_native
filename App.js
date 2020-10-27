import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import Info from './InfoScreen';



class DetailsScreen extends React.Component {
  render() {

    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    MovieList: HomeScreen,
    Details: DetailsScreen,
    Info : Info
  },
  {
    initialRouteName: 'MovieList',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}