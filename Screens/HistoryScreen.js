import React, { useState, useEffect } from 'react';
import { View, Text, Button, SafeAreaView, ScrollView} from 'react-native';
import BottomToolbar from './BottomToolbar';
import HistoryStyle from '../stylesheets/HistoryStyle.js'; // Import the
import BarGraph from './BarGraph.js';

const History = ({ navigation }) => {
const labels = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const data = [1008, 768, 1563, 685, 1283, 1082, 986];

    function calculateAverage(numbers) {
      // Check if the array is not empty to avoid division by zero
      if (numbers.length === 0) {
        return 0;
      }

      // Use the reduce function to sum up all the numbers
      const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

      // Divide the sum by the total number of elements to get the average
      const average = sum / numbers.length;

      const roundedAverage = Math.round(average);

      return roundedAverage;
    }
    const average = calculateAverage(data);

  return (
    <View style={HistoryStyle.container}>
    <SafeAreaView>
                <ScrollView>
        <Text style={HistoryStyle.title}>Vitamin D</Text>
        <Text style={HistoryStyle.title}>History</Text>
        <View style={HistoryStyle.barGraphBox}>
            <BarGraph data={data} labels={labels}/>
        </View>
        <View style={HistoryStyle.avgBox}>
        <View style={HistoryStyle.avgBox2}>
            <Text style={HistoryStyle.text}>Average Daily Vitamin D</Text>
            <Text style={HistoryStyle.text}>{average}</Text>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
      {/* Include the BottomToolbar component with navigation */}
      <BottomToolbar navigation={navigation} pageName={'History'} />
    </View>
  );
};

export default History;
