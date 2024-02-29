// styles.js
import { StyleSheet } from 'react-native';

const UVIndexStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
  },
   title: {
          fontSize: 50,
          color: 'black',
          marginLeft: 20,
          marginTop: 20,
          marginBottom: -10,
      },
   UVIndexBox: {
        width: '90%',
        height: 150,
        marginLeft: '5%',
        marginTop: 40,
        backgroundColor: '#DADADA',
        borderRadius: 10,
        padding: 10,
    },
    UVFormat: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
    },
    mainText: {
        fontSize: 50,
         color: 'black',
    },
    secondaryText: {
        fontSize: 40,
         color: 'black',
    },
   UVInfoBox: {
        width: '90%',
        height: 250,
        marginLeft: '5%',
        marginTop: 20,
        backgroundColor: '#DADADA',
        borderRadius: 10,
        padding: 10,
    },
    UVInfoTitleText: {
        fontSize: 25,
         color: 'black',
    },
    UVInfoText: {
        fontSize: 22,
         color: 'black',
         marginTop: 5,
    },
});

export default UVIndexStyle;
