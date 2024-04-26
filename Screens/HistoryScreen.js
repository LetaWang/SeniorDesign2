import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Picker } from 'react-native';
import HistoryStyle from '../stylesheets/HistoryStyle.js'; // Import the
import * as FileSystem from 'expo-file-system';
import BarGraph from './BarGraph';

const History = ({ }) => {

    function calculateAverage(list) {
        // Check if the list is empty
        if (list.length === 0) {
            return 0; // Return 0 for an empty list
        }
    
        // Calculate the sum of all elements in the list
        const sum = list.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
        // Calculate the average
        const average = sum / list.length;
    
        // Round the average to the nearest whole number
        const roundedAverage = Math.round(average);

        return roundedAverage;
    }
    
    const labels = ['4/22', '4/23', '4/24', '4/25', '4/26', '4/27', '4/28'];
    const data = [1008, 768, 1563, 685, 1283, 1082, 986];
    const [historyArray, setHistoryArray] = useState(null)
    const [average, setAverage] = useState(0);
    const weeklyAverage = calculateAverage(data);
    const [goal, setGoal] = useState(0);
    const monthLabels = ['November', 'December', 'January', 'February', 'March', 'April'];
    const monthData = [0, 0, 0, 6315, 3087, 7375]; 
    const monthlyAverage = calculateAverage(monthData);


    const [buttonText, setButtonText] = useState('Week');

    // Function to handle button press
    const handlePress = () => {
        // Toggle button text
        setButtonText(buttonText === 'Week' ? 'Month' : 'Week');
    };

    const writeFile = async () => {
        const fileUri = FileSystem.documentDirectory + 'history.txt';
        const contentToWrite = '4/3/2024 - 3182;4/2/2024 - 1986;4/1/2024 - 2017';

        try {
            await FileSystem.writeAsStringAsync(fileUri, contentToWrite);
            console.log('File written successfully.');
        } catch (error) {
            console.error('Error writing file:', error);
        }
    };

     async function readFromTextFile() {
        const fileUri = FileSystem.documentDirectory + 'history.txt';

        try {
            const content = await FileSystem.readAsStringAsync(fileUri);

            const myArray = content.split(";");
//            console.log('File content:', myArray);
            const myLength = myArray.length;
            if (myArray.length > 7){
                myLength = 7;
            }
            setHistoryArray(myArray.map((element) => element + '\n').join(''));
            const splitValues = [];

            // Loop through each element of the array and split by "-"
            for (let i = 0; i < myLength; i++) {
                const subValues = myArray[i].split(" - ");
                splitValues.push(...subValues);
            }
//            console.log(splitValues);
            var sum = 0;
            var count = 0;
            for (let i = 1; i < splitValues.length; i = i + 2){
                sum = sum + parseInt(splitValues[i]);
                count++;
            }
            setAverage(sum/count);
        } catch (error) {
            console.error('Error reading file:', error);
        }

            const fileUri2 = FileSystem.documentDirectory + 'myTextFile.txt';

            try {
                const content = await FileSystem.readAsStringAsync(fileUri2);

                const myArray = content.split(" ");
                setGoal(parseInt(myArray[6]) * 27);

                console.log('File content:', content);
            } catch (error) {
                console.error('Error reading file:', error);
            }
     }

    useEffect(() => {
//        setProgress(0);
    //    writeFile();
    readFromTextFile();
//        setProgress(vitaminDReceived/vitaminDNeeded * 100);
    }, []);

  return (
    <View style={HistoryStyle.container}>
    <SafeAreaView>
                <ScrollView>
        <Text style={HistoryStyle.title}>Vitamin D</Text>
        <Text style={HistoryStyle.title}>History</Text>
        <TouchableOpacity onPress={handlePress} style={HistoryStyle.dropdownButton}>
                <Text style={{ color: 'black', fontSize: 25 }}>{buttonText}</Text>
            </TouchableOpacity>
        <View style={HistoryStyle.goalBox}>
        <View style={HistoryStyle.avgBox2}>
            <Text style={HistoryStyle.text}>Goal: {goal}</Text>
        </View>
        </View>
        <View style={HistoryStyle.barGraphBox}>
        <BarGraph labels={buttonText === 'Week' ? labels : monthLabels} data={buttonText === 'Week' ? data : monthData} />
        {/* <Text style={HistoryStyle.historyText}>{historyArray}</Text> */}
        </View>
        <View style={HistoryStyle.avgBox}>
        <View style={HistoryStyle.avgBox2}>
            <Text style={HistoryStyle.text}>{buttonText === 'Week' ? 'Average Daily Vitamin D' : 'Average Monthly Vitamin D'}</Text>
            <Text style={HistoryStyle.text}>{buttonText === 'Week' ? weeklyAverage : monthlyAverage}</Text>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    </View>
  );
};

export default History;
