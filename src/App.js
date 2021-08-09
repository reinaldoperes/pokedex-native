import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { Icon } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import Pokemons from './Components/Pokemons';
import Details from './Components/Details';
import { mdiPokeball } from '@mdi/js';

const appNavigator = createStackNavigator(
  {
    Pokemons: {
      screen: Pokemons,
      navigationOptions: ({ navigation }) => ({
        title: 'Pokémons',
        headerLeft: (
          <Icon
            containerStyle = {styles.icon}
            path={mdiPokeball}
          />
        ),
      }),
    },
    Detalhes: {
      screen: Details,
    },
  },
  {
    initialRouteName: 'Pokemons',
  },
);

const AppContainer = createAppContainer(appNavigator);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;

const styles = StyleSheet.create({
  icon: {
    paddingLeft: 10
  }
});