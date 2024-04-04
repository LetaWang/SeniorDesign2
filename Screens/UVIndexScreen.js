import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import UVIndexStyle from '../stylesheets/UVIndexStyle.js'; // Import the stylesheet

const UVIndex = ({ }) => {
    const [UVIndex, setUVIndex] = useState(1.4);
    const [shortDescription, setShortDescription] = useState('Low UV');
  return (
    <View style={UVIndexStyle.container}>
        <Text style={UVIndexStyle.title}>UV Index</Text>
         <View style={UVIndexStyle.UVIndexBox}>
             <View style={UVIndexStyle.UVFormat}>
                 <Text style={UVIndexStyle.mainText}>{UVIndex}</Text>
                 <Text style={UVIndexStyle.secondaryText}>{shortDescription}</Text>
             </View>
         </View>
         <View style={UVIndexStyle.UVInfoBox}>
            <Text style={UVIndexStyle.UVInfoTitleText}>UV Information</Text>
            <Text style={UVIndexStyle.UVInfoText}>Here is where we will put some information regarding the UV levels and what is recommended based on the UV Index.</Text>
         </View>
    </View>
  );
};

export default UVIndex;
