import React from 'react';
import { View, Text, Button } from 'react-native';
import MainStyles from './stylesheets/MainStyles.js'; // Import the stylesheet
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BluetoothComponent from './Screens/bluetooth/BluetoothComponent.js';
// import HomeScreen from './Screens/HomeScreen.js';
// import UVIndex from './Screens/UVIndexScreen.js';
// import History from './Screens/HistoryScreen.js';
import Profile from './Screens/ProfileScreen.js';

const Stack = createStackNavigator();

const App = () => {

  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;