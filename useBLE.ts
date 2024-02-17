/**
 * @file useBLE.ts
 * @brief Custom hook for bluetooth low energy
 * most code is from https://github.com/friyiajr/BLESampleExpo
 * changed to handle data taken from Seeed Studio XIAO nrf52840 microcontroller 11/29/2023
 */

import { useMemo, useState } from "react";
import { PermissionsAndroid, Platform } from "react-native";
import "@react-native-anywhere/polyfill-base64";
import {
    BleError,
    BleManager,
    Characteristic,
    Device,
} from "react-native-ble-plx";

import * as ExpoDevice from "expo-device";

const ENVIRONMENTAL_SENSING_UUID = "181A"; // environmental sensing service uuid
const UUID16_CHR_UV_INDEX = "2A76"; // uv index characteristic uuid

interface BluetoothLowEnergyApi { // interface for bluetooth low energy api
    requestPermissions(): Promise<boolean>;
    scanForPeripherals(): void;
    connectToDevice: (deviceId: Device) => Promise<void>;
    disconnectFromDevice: () => void;
    connectedDevice: Device | null;
    allDevices: Device[];
    uvIndex: string;
}

function useBLE(): BluetoothLowEnergyApi {
    const bleManager = useMemo(() => new BleManager(), []); // create a new instance of BleManager
    const [allDevices, setAllDevices] = useState<Device[]>([]); // array of all devices found
    const [connectedDevice, setConnectedDevice] = useState<Device | null>(null); // device that is connected
    const [uvIndex, setUVIndex] = useState<string>(""); // UV Index

    const requestAndroid31Permissions = async () => { // request permissions for android 31
        const bluetoothScanPermission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
            {
                title: "Location Permission",
                message: "Bluetooth Low Energy requires Location",
                buttonPositive: "OK",
            }
        );
        const bluetoothConnectPermission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
            {
                title: "Location Permission",
                message: "Bluetooth Low Energy requires Location",
                buttonPositive: "OK",
            }
        );
        const fineLocationPermission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: "Location Permission",
                message: "Bluetooth Low Energy requires Location",
                buttonPositive: "OK",
            }
        );

        return (
            bluetoothScanPermission === "granted" &&
            bluetoothConnectPermission === "granted" &&
            fineLocationPermission === "granted"
        );
    };

    const requestPermissions = async () => { // request permissions for android 31 and below
        if (Platform.OS === "android") {
            if ((ExpoDevice.platformApiLevel ?? -1) < 31) {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: "Location Permission",
                        message: "Bluetooth Low Energy requires Location",
                        buttonPositive: "OK",
                    }
                );
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } else {
                const isAndroid31PermissionsGranted =
                    await requestAndroid31Permissions();

                return isAndroid31PermissionsGranted;
            }
        } else {
            return true;
        }
    };

    const isDuplicteDevice = (devices: Device[], nextDevice: Device) =>
        devices.findIndex((device) => nextDevice.id === device.id) > -1;

    const scanForPeripherals = () =>
        bleManager.startDeviceScan(null, null, (error, device) => {
            if (error) {
                console.log(error);
            }
            if (device && device.name?.includes("XIAO")) {
                setAllDevices((prevState: Device[]) => {
                    if (!isDuplicteDevice(prevState, device)) {
                        return [...prevState, device];
                    }
                    return prevState;
                });
            }
        });

    const connectToDevice = async (device: Device) => {
        try {
            const deviceConnection = await bleManager.connectToDevice(
                device.id, { autoConnect: true }
            );
            setConnectedDevice(deviceConnection);
            await deviceConnection.discoverAllServicesAndCharacteristics();
            bleManager.stopDeviceScan();
            startStreamingData(deviceConnection);
        } catch (e) {
            console.log("FAILED TO CONNECT", e);
        }
    };

    const disconnectFromDevice = () => {
        if (connectedDevice) {
            bleManager.cancelDeviceConnection(connectedDevice.id);
            setConnectedDevice(null);
            setUVIndex("");
        }
    };

    const onUVIndexUpdate = (
        error: BleError | null,
        characteristic: Characteristic | null
    ) => {
        if (error) {
            console.log(error);
            return -1;
        } else if (!characteristic?.value) {
            console.log("No Data was recieved");
            return -1;
        }

        const raw = atob(characteristic.value); // convert base64 to raw binary data held in a string
        let hexString = "";
        for (let i = 0; i < raw.length; i++) { // convert base64 to hex string
            const hex = raw.charCodeAt(i).toString(16);
            hexString += hex.length === 2 ? hex : "0" + hex;
        }
        hexString = hexString.toUpperCase();

        const fromHexString = (hexString: string) => // convert hex string to Uint8Array
            Uint8Array.from(
                hexString!.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))
            );

        const data = fromHexString(hexString)[0].toString(); // convert Uint8Array to string

        setUVIndex(data); // set UV Index
    };

    const startStreamingData = async (device: Device) => {
        if (device) {
            device.monitorCharacteristicForService(
                ENVIRONMENTAL_SENSING_UUID,
                UUID16_CHR_UV_INDEX,
                onUVIndexUpdate
            );
            // device.writeCharacteristicWithResponseForService('12ab', '34cd', 'aGVsbG8gbWlzcyB0YXBweQ==') // write to characteristic
        } else {
            console.log("No Device Connected");
        }
    };

    return {
        scanForPeripherals,
        requestPermissions,
        connectToDevice,
        allDevices,
        connectedDevice,
        disconnectFromDevice,
        uvIndex: uvIndex,
    };
}

export default useBLE;