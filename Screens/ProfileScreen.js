import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import ProfileStyle from '../stylesheets/ProfileStyle.js';
import * as FileSystem from 'expo-file-system';

const Profile = ({}) => {
    const [editMode, setEditMode] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [newFirstName, setNewFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [yearJoined, setYearJoined] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [skinType, setSkinType] = useState('');
    const [fullName, setFullName] = useState('');

    const writeFile = async () => {
        const fileUri = FileSystem.documentDirectory + 'myTextFile.txt';
        const contentToWrite = `${yearJoined} ${fullName} ${age} ${gender} ${height} ${weight} ${skinType}`;

        try {
            await FileSystem.writeAsStringAsync(fileUri, contentToWrite);
            console.log('File written successfully.');
        } catch (error) {
            console.error('Error writing file:', error);
        }
    };

    async function readFromTextFile() {
        const fileUri = FileSystem.documentDirectory + 'myTextFile.txt';

        try {
            const content = await FileSystem.readAsStringAsync(fileUri);

            const myArray = content.split(" ");
            setYearJoined(myArray[0]);
            setFirstName(myArray[1]);
            setLastName(myArray[2]);
            setAge(myArray[3]);
            setGender(myArray[4]);
            setHeight(myArray[5]);
            setWeight(myArray[6]);
            setSkinType(myArray[7]);
            setFullName(myArray[1] + " " + myArray[2])
            console.log('array ', myArray)

            console.log('File content:', content);
        } catch (error) {
            console.error('Error reading file:', error);
        }
    }

   const handleFirstNameChange = (text) => {
    };

    useEffect(() => {
        readFromTextFile();
    }, []);

    const toggleEditMode = () => {
        if(editMode){
            writeFile();
        }
        setEditMode(!editMode);
    };

    return (
        <View style={ProfileStyle.container}>
            <View style={ProfileStyle.profileTitle}>
                <Text style={ProfileStyle.title}>Profile</Text>
                <TouchableOpacity onPress={toggleEditMode}>
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
                {editMode ? (
                    <TextInput
                        style={ProfileStyle.inputText}
                        onChangeText={setFullName}
                        value={fullName}
                        placeholder="Full Name"
                    />
                ) : (
                    <Text style={ProfileStyle.text}>{fullName}</Text>
                )}
                <Text style={ProfileStyle.text}>Member Since: {yearJoined}</Text>
                <View style={ProfileStyle.informationBox}>
                <View style={ProfileStyle.informationRow}>
                    <Text style={ProfileStyle.text2}>Age: </Text>
                    {editMode ? (
                        <TextInput
                            style={ProfileStyle.inputText}
                            onChangeText={setAge}
                            value={age}
                            placeholder="Age"
                        />
                    ) : (
                        <Text style={ProfileStyle.text2}>{age}</Text>
                    )}
                </View>
                <View style={ProfileStyle.informationRow}>
                    <Text style={ProfileStyle.text2}>Gender: </Text>
                    {editMode ? (
                        <TextInput
                            style={ProfileStyle.inputText}
                            onChangeText={setGender}
                            value={gender}
                            placeholder="gender"
                        />
                    ) : (
                        <Text style={ProfileStyle.text2}>{gender}</Text>
                    )}
                </View>
                <View style={ProfileStyle.informationRow}>
                    <Text style={ProfileStyle.text2}>Height: </Text>
                    {editMode ? (
                        <TextInput
                            style={ProfileStyle.inputText}
                            onChangeText={setHeight}
                            value={height}
                            placeholder="height"
                        />
                    ) : (
                        <Text style={ProfileStyle.text2}>{height}</Text>
                    )}
                </View>
                <View style={ProfileStyle.informationRow}>
                    <Text style={ProfileStyle.text2}>Weight: </Text>
                    {editMode ? (
                        <TextInput
                            style={ProfileStyle.inputText}
                            onChangeText={setWeight}
                            value={weight}
                            placeholder="height"
                        />
                    ) : (
                        <Text style={ProfileStyle.text2}>{weight} lbs</Text>
                    )}
                </View>
                <View style={ProfileStyle.informationRow}>
                    <Text style={ProfileStyle.text2}>Skin Type: Type </Text>
                    {editMode ? (
                        <TextInput
                            style={ProfileStyle.inputText}
                            onChangeText={setSkinType}
                            value={skinType}
                            placeholder="skinType"
                        />
                    ) : (
                        <Text style={ProfileStyle.text2}>{skinType}</Text>
                    )}
                </View>
                </View>
            </View>
        </View>
    );
};

export default Profile;
