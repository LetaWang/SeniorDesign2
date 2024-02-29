// styles.js
import { StyleSheet } from 'react-native';

const HistoryStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    color: 'black',
  },
    title: {
        fontSize: 50,
        color: 'black',
        marginLeft: 20,
        marginTop: 20,
        marginBottom: -30,
    },
    barGraphBox: {
        width: '90%',
        height: 350,
        marginLeft: '5%',
        marginTop: 50,
        backgroundColor: '#DADADA',
        borderRadius: 10,
    },
    avgBox: {
        width: '90%',
        height: 150,
        marginLeft: '5%',
        marginTop: 20,
        backgroundColor: '#DADADA',
        borderRadius: 10,
        padding: 10,
        marginBottom: 100,
    },
    avgBox2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HistoryStyle;
