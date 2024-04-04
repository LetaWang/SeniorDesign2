import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import HomeScreenStyle from '../stylesheets/HomeScreenStyle.js'; // Import the stylesheet
import * as FileSystem from 'expo-file-system';
import ProgressBar from './ProgressBar';

const HomeScreen = () => {
    const [date, setDate] = useState('Today, Dec. 8th');
    const [name, setName] = useState("");
    const [progress, setProgress] = useState(25);

     async function readFromTextFile() {
            const fileUri = FileSystem.documentDirectory + 'myTextFile.txt';

            try {
                const content = await FileSystem.readAsStringAsync(fileUri);

                const myArray = content.split(" ");
                setName(myArray[1]);

                console.log('File content:', content);
            } catch (error) {
                console.error('Error reading file:', error);
            }
        }

    useEffect(() => {
        readFromTextFile();
    }, []);

    const leftPress = () => {
//      Alert.alert('Button Pressed');
      // You can add your custom logic or navigation here
    };

    const rightPress = () => {
//      Alert.alert('Button Pressed');
      // You can add your custom logic or navigation here
    };

    const currentDate = new Date();

    // Array of month names
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    // Get the month name
    const monthName = monthNames[currentDate.getMonth()];

    // Format the date as desired
    const formattedDate = `${monthName} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  return (
    <View style={HomeScreenStyle.container}>
      {/* Your main content */}
       <SafeAreaView>
            <ScrollView>
    <Text style={HomeScreenStyle.title}>Welcome,</Text>
    <Text style={HomeScreenStyle.title}>{name}</Text>
    <View style={HomeScreenStyle.dateBox}>
    <View style={HomeScreenStyle.date}>
      <TouchableOpacity onPress={leftPress}>
        <Image
          source={require('./assets/arrow.png')}
          style={HomeScreenStyle.leftArrow}
        />
      </TouchableOpacity>
      <Text style={HomeScreenStyle.mainText}>{formattedDate}</Text>
      <TouchableOpacity onPress={rightPress}>
        <Image
          source={require('./assets/arrow.png')}
          style={HomeScreenStyle.rightArrow}
        />
      </TouchableOpacity>
    </View>
    </View>
    <View style={HomeScreenStyle.vitaminDBox}>
        <ProgressBar progress={progress} />
        <Text style={HomeScreenStyle.vitaminDLevel1}>78/100 nmol/L</Text>
    </View>
    <View style={HomeScreenStyle.sessionsBox}>
        <Text style={HomeScreenStyle.boxText}>Tracked Sessions</Text>
        <Text style={HomeScreenStyle.boxTextSmall}>8:34am - 9:31am      36 nmol/L</Text>
        <Text style={HomeScreenStyle.boxTextSmall}>2:56pm - 4:42pm      52 nmol/L</Text>
        <Text style={HomeScreenStyle.boxTextSmall}>6:26am - 8:13am      34 nmol/L</Text>
    </View>
      </ScrollView>
    </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
