import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

const BottomToolbar = ({ navigation, pageName }) => {
  const [selectedItem, setSelectedItem] = useState(pageName);

  return (
    <View style={styles.toolbar}>
      <TouchableOpacity
        style={[styles.toolbarItem, selectedItem === 'HomeScreen' && styles.selectedItem]}
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Image
          source={require('./assets/home-icon.png')}
          style={styles.image}
        />
        <Text style={styles.toolbarText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.toolbarItem,
          selectedItem === 'History' && styles.selectedItem,
        ]}
        onPress={() => navigation.navigate('History')}
      >
        <Image
          source={require('./assets/history-icon.png')}
          style={styles.image}
        />
        <Text style={styles.toolbarText}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.toolbarItem,
          selectedItem === 'Bluetooth' && styles.selectedItem,
        ]}
        onPress={() => navigation.navigate('Bluetooth')}
      >
        <Image
          source={require('./assets/bluetooth-icon.png')}
          style={styles.image}
        />
        <Text style={styles.toolbarText}>Device</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.toolbarItem,
          selectedItem === 'UVIndex' && styles.selectedItem,
        ]}
        onPress={() => navigation.navigate('UVIndex')}
      >
        <Image
          source={require('./assets/uv-icon.png')}
          style={styles.image}
        />
        <Text style={styles.toolbarText}>UV Index</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.toolbarItem,
          selectedItem === 'Profile' && styles.selectedItem,
        ]}
        onPress={() => navigation.navigate('Profile')}
      >
        <Image
          source={require('./assets/profile-icon.png')}
          style={styles.image}
        />
        <Text style={styles.toolbarText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 0,
  },
  toolbarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
//    backgroundColor: 'red',
    height: 70,
  },
  selectedItem: {
    backgroundColor: '#D9D9D9',
  },
  toolbarText: {
    color: 'black',
  },
  image: {
    height: 35,
    width: 35,
  },
});

export default BottomToolbar;
