import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import BottomToolbar from './BottomToolbar';
import HomeScreenStyle from '../stylesheets/HomeScreenStyle.js'; // Import the stylesheet
import CircularProgressBar from './CircularProgressBar.js';

const HomeScreen = ({ navigation }) => {
    const [date, setDate] = useState('Today, Dec. 8th');

    const leftPress = () => {
//      Alert.alert('Button Pressed');
      // You can add your custom logic or navigation here
    };

    const rightPress = () => {
//      Alert.alert('Button Pressed');
      // You can add your custom logic or navigation here
    };

  return (
    <View style={HomeScreenStyle.container}>
      {/* Your main content */}
       <SafeAreaView>
            <ScrollView>
    <Text style={HomeScreenStyle.title}>Welcome,</Text>
    <Text style={HomeScreenStyle.title}>User's Name</Text>
    <View style={HomeScreenStyle.dateBox}>
    <View style={HomeScreenStyle.date}>
      <TouchableOpacity onPress={leftPress}>
        <Image
          source={require('./assets/arrow.png')}
          style={HomeScreenStyle.leftArrow}
        />
      </TouchableOpacity>
      <Text style={HomeScreenStyle.mainText}>{date}</Text>
      <TouchableOpacity onPress={rightPress}>
        <Image
          source={require('./assets/arrow.png')}
          style={HomeScreenStyle.rightArrow}
        />
      </TouchableOpacity>
    </View>
    </View>
    <View style={HomeScreenStyle.vitaminDBox}>
        <View style={HomeScreenStyle.progress}>
            <CircularProgressBar radius={125} strokeWidth={20} progress={78} />
        </View>
        <Text style={HomeScreenStyle.vitaminDLevel1}>78/100</Text>
        <Text style={HomeScreenStyle.vitaminDLevel2}>nmol/L</Text>
    </View>
    <View style={HomeScreenStyle.sessionsBox}>
        <Text style={HomeScreenStyle.boxText}>Tracked Sessions</Text>
        <Text style={HomeScreenStyle.boxTextSmall}>8:34am - 9:31am      36 nmol/L</Text>
        <Text style={HomeScreenStyle.boxTextSmall}>2:56pm - 4:42pm      52 nmol/L</Text>
        <Text style={HomeScreenStyle.boxTextSmall}>6:26am - 8:13am      34 nmol/L</Text>
    </View>
    <View style={HomeScreenStyle.foodBox}>
        <Text style={HomeScreenStyle.boxText}>Food</Text>
        <Text style={HomeScreenStyle.boxTextSmall}>Steak                           12 nmol/L</Text>
        <Text style={HomeScreenStyle.boxTextSmall}>Chips                             4 nmol/L</Text>
        <Text style={HomeScreenStyle.boxTextSmall}>Banana                       16 nmol/L</Text>
        <Text style={HomeScreenStyle.boxTextSmall}>Yogurt                         10 nmol/L</Text>
    </View>
      </ScrollView>
    </SafeAreaView>
      {/* Include the BottomToolbar component with navigation */}
      <BottomToolbar navigation={navigation} pageName={'HomeScreen'} />
    </View>
  );
};

export default HomeScreen;
