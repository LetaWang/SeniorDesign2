import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import UVIndexStyle from '../stylesheets/UVIndexStyle.js'; // Import the stylesheet

const UVIndex = ({heartRate}) => {
    const [UVIndex, setUVIndex] = useState(1.4);
    const [shortDescription, setShortDescription] = useState('');
    const [longDescription, setLongDescription] = useState('');

    useEffect(() => {
        // Define your logic to change shortDescription based on heartRate
        if (heartRate <= 2) {
            setShortDescription('Low UV');
            setLongDescription('Low danger from the sun\'s UV rays for the average person. Wear sunglasses on bright days. If you burn easily, cover up and use broad spectrum SPF 30+ sunscreen. Watch out for bright surfaces, like sand, water and snow, which reflect UV and increase exposure.');
        } else if (heartRate <= 5) {
            setShortDescription('Moderate UV');
            setLongDescription('Moderate risk of harm from unprotected sun exposure. Stay in shade near midday when the sun is strongest. If outdoors, wear protective clothing and UV-blocking sunglasses. Generously apply broad SPF 30+ sunscreen every 2 hours, even on cloudy days. Watch out for bright surfaces, like sand, water and snow, which reflect UV and increase exposure.');
        } else if (heartRate <= 7) {
            setShortDescription('High UV');
            setLongDescription('High risk of harm from unprotected sun exposure. Protection against skin and eye damage is needed. Reduce time in the sun between 10 a.m. and 4 p.m. If outdoors, seek shade and wear protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating. Watch out for bright surfaces, like sand, water and snow, which reflect UV and increase exposure.');
        } else if (heartRate <= 10) {
            setShortDescription('Very High UV');
            setLongDescription('Very high risk of harm from unprotected sun exposure. Take extra precautions because unprotected skin and eyes will be damaged and can burn quickly. Reduce time in the sun between 10 a.m. and 4 p.m. If outdoors, seek shade and wear protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating. Watch out for bright surfaces, like sand, water and snow, which reflect UV and increase exposure.');
        } else {
            setShortDescription('Extreme UV');
            setLongDescription('Extreme risk of harm from unprotected sun exposure. Take all precautions because unprotected skin and eyes can burn in minutes. Reduce time in the sun between 10 a.m. and 4 p.m. If outdoors, seek shade and wear protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating. Watch out for bright surfaces, like sand, water and snow, which reflect UV and increase exposure.');
        }
    }, [heartRate]); // This effect will re-run whenever heartRate changes

  return (
    <View style={UVIndexStyle.container}>
    <ScrollView>
    <Text style={UVIndexStyle.title}>UV Index</Text>
         <View style={UVIndexStyle.UVIndexBox}>
             <View style={UVIndexStyle.UVFormat}>
                 <Text style={UVIndexStyle.mainText}>{heartRate}</Text>
                 <Text style={UVIndexStyle.secondaryText}>{shortDescription}</Text>
             </View>
         </View>
         <View style={UVIndexStyle.UVInfoBox}>
            <Text style={UVIndexStyle.UVInfoTitleText}>{shortDescription}</Text>
            <Text style={UVIndexStyle.UVInfoText}>{longDescription}</Text>
         </View>
    </ScrollView>

    </View>
  );
};

export default UVIndex;
