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
        height: 'auto',
        marginLeft: '5%',
        marginTop: 20,
        backgroundColor: '#DADADA',
        borderRadius: 10,
    },
    goalBox: {
        width: '90%',
        height: 'auto',
        marginLeft: '5%',
        marginTop: 50,
        backgroundColor: '#DADADA',
        borderRadius: 10,
        padding: 15,
    },
    historyText: {
        fontSize: 30,
        color: 'black',
        marginTop: 10,
        marginLeft: 20,
        lineHeight: 45,
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
