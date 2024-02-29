import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { BleManager } from 'react-native-ble-plx';
import BottomToolbar from '../BottomToolbar';
import BluetoothStyle from '../../stylesheets/BluetoothStyle.js'

function ArduinoConnectionComponent({ navigation }) {
  const [connected, setConnected] = useState(false);
  const [manager, setManager] = useState(null);
  const [device, setDevice] = useState(null);

  useEffect(() => {
    const bleManager = new BleManager();
    setManager(bleManager);
    console.log("Bluetooth Manager Started");

    return () => {
      if (device) {
        device.cancelConnection();
      }
      bleManager.destroy();
    };
  }, []);

  const connectToArduinoNano = async () => {
    if (connected) {
      console.log('Already connected to Arduino Nano.');
      return;
    }

    if (!device) {
        console.log("Scanning for Device");
      // Replace 'your-device-id' with the actual device ID (Bluetooth MAC address)
      const deviceID = '56:03:E6:B9:2F:0C';
      console.log('Retrieving device information...');
      try {
        const discoveredDevice = await manager.devices([deviceID]);
        if (discoveredDevice.length === 1) {
          setDevice(discoveredDevice[0]);
        } else {
          console.error('Device not found. Check the device ID.');
          return;
        }
      } catch (error) {
        console.error('Error retrieving device information:', error);
        return;
      }
    }

    try {
      console.log('Connecting to Arduino Nano...');
      await device.connect();
      console.log('Connected to Arduino Nano.');

      // Replace with the actual Service UUID and Characteristic UUID
      const serviceUUID = 'your-service-uuid';
      const characteristicUUID = 'your-characteristic-uuid';

      // Subscribe to notifications or read/write characteristics as needed
      // await device.monitorCharacteristicForService(serviceUUID, characteristicUUID, (error, characteristic) => {
      //   if (error) {
      //     console.error('Error monitoring characteristic:', error);
      //   } else {
      //     console.log('Received data:', characteristic.value);
      //     // Handle the received data as needed
      //   }
      // });

      setConnected(true);
    } catch (error) {
      console.error('Error connecting to Arduino Nano:', error);
      setConnected(false);
    }
  };

  return (
    <View style={BluetoothStyle.container}>
      <Text style={BluetoothStyle.title} >Device</Text>
      <View style={BluetoothStyle.button}>
          <TouchableOpacity
            onPress={connectToArduinoNano}
            disabled={connected}
            style={{marginLeft: 10, alignItems: 'center',}}
          >
            <Text style={{ color: 'black', fontSize: 25, }}>
              {connected ? 'Connected' : 'Connect to Device'}
                  <Image
                    source={require('./../assets/bluetooth-icon.png')}
                    style={BluetoothStyle.image}
                  />
            </Text>
          </TouchableOpacity>
       </View>
    <View style={BluetoothStyle.connectedBox}>
      <Text style={BluetoothStyle.text}>Connected Device</Text>
      <Text style={BluetoothStyle.text2}>No Device Connected</Text>
    </View>
    <View style={BluetoothStyle.deviceInformation}>
        <Text style={BluetoothStyle.text}>Device Information</Text>
          <Text style={BluetoothStyle.text2}>No Device Connected (But if there was a device connected here is where we would put information about the device, how it works, etc.</Text>
     </View>

      <BottomToolbar navigation={navigation}  pageName={'Bluetooth'}  />
    </View>
  );
}

export default ArduinoConnectionComponent;
