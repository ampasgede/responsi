import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontawesome6 from 'react-native-vector-icons/FontAwesome6';
import  { WebView} from "react-native-webview";
import Getjsonfile from '../Getjsonfile';

const webView =require('../peta/map.html');

const Tab = createBottomTabNavigator();

function Generalscreen() {
    return (
        <ScrollView>
        <View>
            <View style={style.listitems}> 
        <Image source={require('../peta/BatasDAS.png')} style={
        styles.image} />
        <Text style={styles.caption}> Peta Batas DAS</Text>
            </View>
        </View>
        <View>
            
        </View>
        </ScrollView>

    )
}

function HomeScreen() {
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

function ProfileScreen() {
    return (
        <View>
            <Text>Profile</Text>
        </View>
    )
}

function MahasiswaScreen() {
    return (
        <View>
            <Getjsonfile/>
        </View>
    )
}

function MyTabs() {
  return (
    <NavigationContainer>
            <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
	tabBarLabel: 'Home',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="home" color={color} size={size} />
	),
}}
/>
<Tab.Screen name="Profile" component={ProfileScreen} options={{
	tabBarLabel: 'Profile',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="profile" color={color} size={size} />
	),
}}
/>

<Tab.Screen name="Mahasiswa" component={MahasiswaScreen} options={{
	tabBarLabel: 'Profile',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="users" color={color} size={size} />
	),
}}
/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'stretch',
    },
    listitems: {
        padding: 20,
        alignItems: 'center',
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    }
});