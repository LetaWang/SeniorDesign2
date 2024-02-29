import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import BottomToolbar from './BottomToolbar';
import ProfileStyle from '../stylesheets/ProfileStyle.js'; // Import the stylesheet

const Profile = ({ navigation }) => {


    const editProfile = () => {
//      Alert.alert('Button Pressed');
      // You can add your custom logic or navigation here
    };

  return (
    <View style={ProfileStyle.container}>
        <View style={ProfileStyle.profileTitle}>
            <Text style={ProfileStyle.title}>Profile</Text>
          <TouchableOpacity onPress={editProfile}>
            <Image
              source={require('./assets/edit.png')}
              style={ProfileStyle.image2}
            />
          </TouchableOpacity>
        </View>
        <View style={ProfileStyle.profileBox}>
            <Image
              source={require('./assets/profile-icon.png')}
              style={ProfileStyle.image}
            />
            <Text style={ProfileStyle.text}>First and Last Name</Text>
            <Text style={ProfileStyle.text}>Member Since: 2023</Text>
            <View style={ProfileStyle.informationBox}>
                <Text style={ProfileStyle.text2}>Name: First and Last</Text>
                <Text style={ProfileStyle.text2}>Age: 20</Text>
                <Text style={ProfileStyle.text2}>Gender: Female</Text>
                <Text style={ProfileStyle.text2}>Height: 5'6"'</Text>
                <Text style={ProfileStyle.text2}>Weight: 130 lbs</Text>
                <Text style={ProfileStyle.text2}>Skin Type: Type 3</Text>
            </View>

        </View>
      {/* Include the BottomToolbar component with navigation */}
      <BottomToolbar navigation={navigation} pageName={'Profile'} />
    </View>
  );
};

export default Profile;
