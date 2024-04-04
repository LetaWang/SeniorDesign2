import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DeviceModal from "./DeviceConnectionModal";
import { PulseIndicator } from "./PulseIndicator";
import useBLE from "./useBLE";
import Bluetooth from "./Screens/bluetooth/Bluetooth.tsx"
import BottomNavBar from './Screens/BottomNavBar';
import BottomToolbar from './Screens/BottomToolbar.js';
import Profile from './Screens/ProfileScreen.js';
import UVIndex from './Screens/UVIndexScreen.js';
import HomeScreen from './Screens/HomeScreen.js';

const Home = () => (
  <View>
    <Text>Home Page</Text>
  </View>
);

const App = () => {
  const [selectedItem, setSelectedItem] = useState("HomeScreen");
    const [heartRate, setHeartRate] = useState(null); // State to store heart rate data

    // Callback function to receive heart rate data from Bluetooth component
    const handleHeartRateChange = (newHeartRate) => {
        setHeartRate(newHeartRate);
    };

  const handleItemSelected = (itemName) => {
    setSelectedItem(itemName);
    console.log("Selected item:", itemName);
  };

  const renderSelectedScreen = () => {
    switch (selectedItem) {
      case 'HomeScreen':
        return <HomeScreen />;
      case 'Bluetooth':
        return <Bluetooth onHeartRateChange={handleHeartRateChange} />
      // Add cases for other screens as needed
      case 'Profile':
        return <Profile />;
      case 'UVIndex':
        return <UVIndex heartRate={heartRate}/>;
      default:
        return null; // Default case
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {renderSelectedScreen()}
     <BottomToolbar pageName={'HomeScreen'} onItemSelected={handleItemSelected}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  heartRateTitleWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heartRateTitleText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 20,
    color: "black",
  },
  heartRateText: {
    fontSize: 25,
    marginTop: 15,
  },
  ctaButton: {
    backgroundColor: "#FF6060",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginHorizontal: 20,
    marginBottom: 5,
    borderRadius: 8,
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default App;
