//import React, { useState, useEffect } from 'react';
//import { View, Text } from 'react-native';
//import { Svg, Circle } from 'react-native-svg';
//
//const CircularProgressBar = ({ radius, strokeWidth, progress }) => {
//  const [circumference, setCircumference] = useState(0);
//
//  useEffect(() => {
//    const calcCircumference = () => 2 * Math.PI * radius;
//    setCircumference(calcCircumference());
//  }, [radius]);
//
//  const calculateStrokeDashoffset = () => {
//    const percentage = (100 - progress) / 100;
//    return circumference * percentage;
//  };
//
//  return (
//    <View>
//      <Svg height={radius * 2} width={radius * 2}>
//        <Circle
//          cx={radius}
//          cy={radius}
//          r={radius - strokeWidth / 2}
//          fill="transparent"
//          stroke="#B0B0B0"
//          strokeWidth={strokeWidth}
//        />
//        <Circle
//          cx={radius}
//          cy={radius}
//          r={radius - strokeWidth / 2}
//          fill="transparent"
//          stroke="#BD0000"
//          strokeWidth={strokeWidth}
//          strokeDasharray={`${circumference} ${circumference}`}
//          strokeDashoffset={calculateStrokeDashoffset()}
//          strokeLinecap="round" // Make the line rounded at the ends
//          transform={`rotate(-90 ${radius} ${radius})`} // Rotate the circle to start from the top
//        />
//      </Svg>
//    </View>
//  );
//};
//
//export default CircularProgressBar;
