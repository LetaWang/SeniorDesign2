// styles.js
import { StyleSheet } from 'react-native';

const BluetoothStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    color: 'black',
  },
  text2: {
    fontSize: 22,
    color: 'black',
    marginTop: 10,
  },
    title: {
        fontSize: 50,
        color: 'black',
        marginLeft: 20,
        marginTop: 20,
        marginBottom: -10,
    },
    button: {
        width: '90%',
        marginLeft: '5%',
        marginTop: 20,
        height: 70,
        backgroundColor: '#C3E6FF',
        borderRadius: 10,
    },
    image: {
        height: 45,
        width: 45,
    },
    connectedBox: {
        width: '90%',
        height: 100,
        marginLeft: '5%',
        marginTop: 20,
        backgroundColor: '#DADADA',
        borderRadius: 10,
        padding: 10,
    },
    deviceInformation: {
        width: '90%',
        minHeight: 100,
        height: 'auto',
        marginLeft: '5%',
        marginTop: 20,
        backgroundColor: '#DADADA',
        borderRadius: 10,
        padding: 10,
    },
});

export default BluetoothStyle;
