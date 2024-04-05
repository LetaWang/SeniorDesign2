import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DeviceModal from "./DeviceConnectionModal";
import useBLE from "./useBLE";
import EndOfDayTask from './Screens/bluetooth/EndOfDayTask';
import * as FileSystem from 'expo-file-system';
import BottomToolbar from './Screens/BottomToolbar.js';

import Profile from './Screens/ProfileScreen.js';
import UVIndex from './Screens/UVIndexScreen.js';
import HomeScreen from './Screens/HomeScreen.js';
import History from './Screens/HistoryScreen.js';

const Bluetooth = ( {} ) => {
  const {
    requestPermissions,
    scanForPeripherals,
    allDevices,
    connectToDevice,
    connectedDevice,
    heartRate,
    disconnectFromDevice,
    sendData,
  } = useBLE();

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [vitaminD, setVitaminD] = useState(0);
  const [skinType, setSkinType] = useState('');
  const [age, setAge] = useState('');
  const [selectedItem, setSelectedItem] = useState("HomeScreen");

  const handleItemSelected = (itemName) => {
    setSelectedItem(itemName);
    console.log("Selected item:", itemName);
  };

    useEffect(() => {
      // Pass heart rate data to parent component
      // onHeartRateChange(heartRate, vitaminD);

    // Trigger an action every minute
    const interval = setInterval(async () => {
      // Call the function you want to trigger every minute here
      console.log('This function will be called every minute');

      // this is where the vitamin D calculations should go
      if (heartRate > 0) {
        const fileUri = FileSystem.documentDirectory + 'myTextFile.txt';

         try {
             const content = await FileSystem.readAsStringAsync(fileUri);

             const myArray = content.split(" ");
             setAge(myArray[3]);
             setSkinType(myArray[7]);

             console.log('File content:', content);
         } catch (error) {
             console.error('Error reading file:', error);
         }
         var STF = 1;
        if (skinType == '2'){
            STF = 3.2/3;
        } else if (skinType == '3') {
            STF = 3.2/4;
        } else if (skinType == '4') {
            STF = 3.2/5.25;
        } else if (skinType == '5') {
             STF = 3.2/7.5;
         }

         var AF = 1;

        if (parseInt(age) < 21){
            AF = 1;
        } else if (parseInt(age) < 41) {
            AF = 0.83;
        } else if (parseInt(age) < 59) {
            AF = 0.66;
        } else {
            AF = 0.49;
         }

        var SED =( heartRate / (40/24/60)) * 1;
        const ASCF = 1.049;
        const GCF = 0.417;
        var VDD = SED * ASCF * GCF;

        console.log(vitaminD);
        
        var help = (parseFloat(vitaminD) + VDD * ((4861/24/60) / SED) * STF * 0.5 * AF).toFixed(2);
        
        setVitaminD(help);
      }

    }, 1000); // 60000 milliseconds = 1 minute

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);


    }, [heartRate]); // Triggered whenever heart rate changes

    const currentDate = new Date();
    const month = (currentDate.getMonth() + 1).toString(); // Adding 1 because getMonth() returns zero-based month
    const day = currentDate.getDate().toString();
    const year = currentDate.getFullYear().toString();

    const formattedDate = `${month}/${day}/${year}`;

  const endOfDayFunction = () => {
        const fileUri = FileSystem.documentDirectory + 'myTextFile.txt';

        try {
            var content = FileSystem.readAsStringAsync(fileUri);
            content = formattedDate + " - " + vitaminD + ";" + content;
            FileSystem.writeAsStringAsync(fileUri, content);
            console.log('File written successfully.');
        } catch (error) {
            console.error('Error writing file:', error);
        }


    console.log('End of the day!');
  };

  const scanForDevices = async () => {
    const isPermissionsEnabled = await requestPermissions();
    if (isPermissionsEnabled) {
      scanForPeripherals();
    }
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const openModal = async () => {
    scanForDevices();
    setIsModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <EndOfDayTask endOfDayFunction={endOfDayFunction} />
        {selectedItem == "Bluetooth" ? (
          <>
        <View style={styles.heartRateTitleWrapper}>
        {connectedDevice ? (
          <>
              <Text style={styles.heartRateTitleText}>
                Connect Device
              </Text>
            <Text style={styles.heartRateText2}>Device Connected</Text>
            <Text style={styles.heartRateText}>{connectedDevice.name}</Text>
          </>
        ) : (
          <Text style={styles.heartRateTitleText}>
            Connect Device
          </Text>
        )}
      </View>
      <TouchableOpacity
        onPress={connectedDevice ? disconnectFromDevice : openModal}
        style={styles.ctaButton}
      >
        <Text style={styles.ctaButtonText}>
          {connectedDevice ? "Disconnect" : "Connect Device"}
        </Text>
      </TouchableOpacity>
      <DeviceModal
        closeModal={hideModal}
        visible={isModalVisible}
        connectToPeripheral={connectToDevice}
        devices={allDevices}
      />
          </>
      
        ) : (
          <></>
        )}
        {selectedItem == "UVIndex" ? (
          <>
            <UVIndex heartRate={heartRate}/>
          </>
      
        ) : (
          <></>
        )}
        {selectedItem == "HomeScreen" ? (
          <>
            <HomeScreen vitaminD={vitaminD}/>
          </>
      
        ) : (
          <></>
        )}
        {selectedItem == "Profile" ? (
          <>
            <Profile />
          </>
      
        ) : (
          <></>
        )}
        {selectedItem == "History" ? (
          <>
            <History />
          </>
      
        ) : (
          <></>
        )}
      
      <BottomToolbar pageName={'Homescreen'} onItemSelected={handleItemSelected}/>
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
  },
  heartRateTitleText: {
      marginTop: 20,
      fontSize: 50,
      marginLeft: 20,
  },
  heartRateText: {
    fontSize: 25,
    marginTop: 15,
    marginLeft: 20,
  },
  heartRateText2: {
    fontSize: 25,
    marginTop: 100,
    marginLeft: 20,
  },
  ctaButton: {
    backgroundColor: "#C3E6FF",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginHorizontal: 20,
    marginBottom: '115%',
    borderRadius: 8,
    fontSize: 22,
  },
  ctaButtonText: {
    fontSize: 22,
    color: "black",
  },
});

export default Bluetooth;
