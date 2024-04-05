import React, { useState, useEffect } from 'react';
import { View, Text, Button, SafeAreaView, ScrollView} from 'react-native';
import HistoryStyle from '../stylesheets/HistoryStyle.js'; // Import the
import * as FileSystem from 'expo-file-system';

const History = ({ }) => {
const labels = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const data = [1008, 768, 1563, 685, 1283, 1082, 986];
    const [historyArray, setHistoryArray] = useState(null)
    const [average, setAverage] = useState(0);
    const [goal, setGoal] = useState(0);

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
        <View style={HistoryStyle.goalBox}>
        <View style={HistoryStyle.avgBox2}>
            <Text style={HistoryStyle.text}>Goal: {goal}</Text>
        </View>
        </View>
        <View style={HistoryStyle.barGraphBox}>
        <Text style={HistoryStyle.historyText}>{historyArray}</Text>
        </View>
        <View style={HistoryStyle.avgBox}>
        <View style={HistoryStyle.avgBox2}>
            <Text style={HistoryStyle.text}>Average Daily Vitamin D</Text>
            <Text style={HistoryStyle.text}>{average}</Text>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    </View>
  );
};

export default History;
