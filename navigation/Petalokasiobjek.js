import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import  { WebView} from "react-native-webview";
import Callapi from '../Callapi';



const Tab = createBottomTabNavigator();


//Peta web dari github pages
const forminput = ' https://ampasgede.github.io/android-map/';

//Peta web dari github pages
const webmap = 'https://ampasgede.github.io/android-map/map.html';

function Generalscreen() {
    return (
        
        <Text style={styles.caption}> Kabupaten Kota Pasuruan</Text>
           
    )
}

function MapScreen() {
    return (
        <WebView
         source={{ uri: webmap}}
        />
    )
}

function AdddataScreen() {
    return (
        <WebView
         source={{ uri: forminput}}
        />
    )
}

function ProfilScreen(){
    return (
        <ScrollView>
             <Text style={styles.title}> INFORMASI PENGEMBANG APLIKASI </Text>
             
             <Image source={require('../data/Faisal.jpg') } style={styles.image1}/>

            <Text style={styles.profil}>Nama : Akhmad Faisal Zein</Text>
            <Text style={styles.profil}>NIM : 21/477782/SV/19212</Text>
            <Text style={styles.profil}>Instagram :_faisalzein_</Text>
            <Text style={styles.profil}>Github : ampasgede</Text>
        </ScrollView>
    )
}

function HomeScreen() {
    return (
       
        <ScrollView>
            <Text style={styles.title}> APLIKASI TEMPAN (TEMPAT PARIWISATA PASURUAN)</Text>
            <Image source={require('../data/Pasuruan.jpg') } style={styles.image}/>
            <Text style={styles.caption}>
                                       Aplikasi ini merupakan aplikasi di mana menampilkan persebaran wisata yang berada di Kabupaten Pasuruan.
              Aplikasi ini diharapkan membantu menginformasikan persebaran wisata yang berad di Kabupaten Pasuruan. Terdapat empat attribute
              yang tertampil dari titik ini yakni nama wisata, deskripsi, latitude, dan longitude. Fitur tambahan dari aplikasi ini yakni
              terdapat data administrasi Kabupaten Pasuruan pada form maupun pada peta. Dengan fitur ini, diharapkan para pengguna memahami batas 
              administrasi dari Kabupaten Pasuruan.  

            </Text>

            <Text style={styles.caption}> Aplikasi pendukung:  </Text>
            <Text style={styles.caption}> 1. React Native</Text>
            <Text style={styles.caption}> 2. HTML </Text>
            <Text style={styles.caption}> 3. LeafletJS</Text>
            <Text style={styles.caption}> 4. Google Sheets</Text>
            <Text style={styles.caption}> 5. App Script</Text>
            <Text style={styles.caption}> 6. Awesome</Text>
            <Text style={styles.caption}> 7. Github </Text>

            


        </ScrollView>
        
    )
}

function ApiScreen() {
    return(
        <Callapi/>
    );
}


function MyTabs() {
  return (
    <NavigationContainer>
            <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
	tabBarLabel: 'Homescreen',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="home" color={color} size={size} />
	),
}}
/>
<Tab.Screen name="Map" component={MapScreen} options={{
	tabBarLabel: 'Map',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="map" color={color} size={size} />
	),
}}
/>

<Tab.Screen name="Add Data" component={AdddataScreen} options={{
	tabBarLabel: 'Add data',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="user-plus" color={color} size={size} />
	),
}}
/>

<Tab.Screen name="Nama wisata" component={ApiScreen} options={{
	tabBarLabel: 'List wisata',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="list" color={color} size={size} />
	),
}}
/>

<Tab.Screen name="ProfilScreen" component={ProfilScreen} options={{
	tabBarLabel: 'ProfilScreen',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="user" color={color} size={size} />
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

    image1: {
        width: '100%',
        height: 350,
        resizeMode: 'center',
        
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

    profil: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },

    container:{
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 20,
        padding: 20,
    }
})

export default MyTabs;