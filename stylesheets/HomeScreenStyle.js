// styles.js
import { StyleSheet } from 'react-native';

const HomeScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 50,
        color: 'black',
        marginLeft: 20,
        marginTop: 20,
        marginBottom: -10,
    },
    dateBox: {
        height: 60,
    },
    date: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        paddingTop: 30,
    },
    leftArrow: {
        height: 40,
        width: 40,
        marginTop: 5,
        transform: [{ rotate: '90deg' }],
    },
    rightArrow: {
        height: 40,
        width: 40,
        marginTop: 5,
        transform: [{ rotate: '270deg' }],
    },
    mainText: {
        fontSize: 20,
        color: 'black',
    },
    vitaminDBox: {
        width: '90%',
        height: 300,
        marginLeft: '5%',
        marginTop: 20,
        backgroundColor: '#DADADA',
        borderRadius: 10,
    },
    progress: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    vitaminDLevel1: {
        fontSize: 40,
        color: 'black',
        position: 'absolute',
        top: 90,
        left: '30%',
    },
    vitaminDLevel2: {
        fontSize: 40,
        color: 'black',
        position: 'absolute',
        top: 150,
        left: '30%',
    },
    sessionsBox: {
        width: '90%',
        minHeight: 100,
        height: 'auto',
        marginLeft: '5%',
        marginTop: 20,
        backgroundColor: '#DADADA',
        borderRadius: 10,
        padding: 5,
    },
    foodBox: {
        width: '90%',
        height: 'auto',
        minHeight: 100,
        marginLeft: '5%',
        marginTop: 20,
        backgroundColor: '#DADADA',
        borderRadius: 10,
        marginBottom: 100,
        padding: 5,
    },
    boxText: {
        fontSize: 25,
        color: 'black',
        padding: 5.
    },
    boxTextSmall: {
        fontSize: 22,
        color: 'black',
        padding: 5.
    },
});

export default HomeScreenStyle;
