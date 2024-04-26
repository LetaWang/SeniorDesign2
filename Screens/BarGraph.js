import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BarGraph = ({ labels, data }) => {
    // Find the maximum data value to calculate the bar heights
    const maxValue = Math.max(...data);

    return (
        <View style={styles.graphContainer}>
            {/* Iterate through the data and labels to render the graph */}
            {data.map((value, index) => {
                // Calculate bar height as a percentage of the maximum value
                const barHeight = (value / maxValue) * 100;

                return (
                    <View key={index} style={styles.barContainer}>
                        {/* Bar */}
                        <View
                            style={[styles.bar, { height: `${barHeight}%` }]}
                        >
                            {/* Value */}
                            <Text style={styles.barValue}>{value}</Text>
                        </View>
                        {/* Label */}
                        <Text style={styles.label}>{labels[index]}</Text>
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    graphContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        height: 200,
        padding: 8,
        marginTop: 40,
    },
    barContainer: {
        alignItems: 'center',
    },
    bar: {
        width: 25,
        backgroundColor: '#7D9654',
        position: 'relative',
    },
    barValue: {
        position: 'absolute',
        top: -15, // Adjust this value to change the distance from the top of the bar
        alignSelf: 'center',
        fontSize: 11,
        numberOfLines: 1, // Ensure text stays on one line
    },
    label: {
        marginTop: 8,
        fontSize: 12,
    },
});

export default BarGraph;
