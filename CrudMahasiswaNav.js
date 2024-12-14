import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profil from './App'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faUserGraduate, faPlusCircle, faUserPen, faClipboard, faClipboardList, faHiking, faMountain, faEdit, faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { WebView } from 'react-native-webview';
import Createdata from './Createdata';
import DataMahasiswa from './Listdata';
import Editdata from './Editdata';
import Halamanutama from'./Halamanutama';

function UtamaScreen() {
  return (
    <Halamanutama />
  
  );
}

function MapScreen() {
  return (
    <WebView
      source={{ uri: 'https://pgpbl-6-rho.vercel.app/' }}
    />
  );
}

function HomeScreen() {
  return (
    <Createdata />
  );
}

function DataMahasiswaScreen() {
  return (
    <DataMahasiswa />
  );
}

function EditScreen() {
  return (
    <Editdata />
  );
}



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>

      <Tab.Screen name="Home" component={UtamaScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faHome} color={color} size={20} />
            ),
          }} />

        <Tab.Screen name="Map" component={MapScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faMountain} color={color} size={20} />
            ),
          }} />
        <Tab.Screen name="Registrasi" component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faClipboardList} color={color} size={20} />
            ),
          }} />

        <Tab.Screen name="Pendaki" component={DataMahasiswaScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faHiking} color={color} size={20} />
            ),
          }} />
        <Tab.Screen name="Edit" component={EditScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faEdit} color={color} size={20} />
            ),
          }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}