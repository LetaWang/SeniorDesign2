//import React from 'react';
//import { StyleSheet, View, Dimensions } from 'react-native';
//import { BarChart } from 'react-native-chart-kit';
//
//const BarGraph = ({ labels, data }) => {
//  const chartData = {
//    labels,
//    datasets: [
//      {
//        data,
//      },
//    ],
//  };
//
//  const chartConfig = {
//    backgroundGradientFrom: "#1E2923",
//    backgroundGradientFromOpacity: 0,
//  backgroundGradientTo: "#08130D",
//  backgroundGradientToOpacity: 0,
////  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
//    color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
//    strokeWidth: 2,
//     barRadius: 10,
//     barPercentage: 0.7,
//  };
//
//  return (
//    <View style={styles.container}>
//      <BarChart
//        style={styles.chart}
//        data={chartData}
//        width={Dimensions.get('window').width - 50}
//        height={340}
//        chartConfig={chartConfig}
//        fromZero='true'
//        showBarTops={false}
//        showValuesOnTopOfBars='true'
//      />
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    alignItems: 'center',
//    justifyContent: 'center',
//    marginTop: 16,
//    backgroundColor: 'transparent',
//  },
//  chart: {
//    marginVertical: 8,
//    borderRadius: 16,
//  },
//});
//
//export default BarGraph;
