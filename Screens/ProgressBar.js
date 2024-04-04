import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { width: `${progress}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: '100%',
    backgroundColor: '#aeaeae',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1, // Add border width
    borderColor: '#ccc', // Add border color
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#BD0000',
    borderRadius: 10,
  },
});

export default ProgressBar;
