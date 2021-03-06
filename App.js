import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

import 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React from 'react';

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";

import Homepage from './components/Home';
import Count from './components/CountPage';
import Settings from './components/Settings';
import Information from './components/Information';

const init = async () => {
  try {
    const value = await AsyncStorage.getItem("Region");
    if (value !== null) {
    } else {
      setRegion();
    }
  } catch (e) {
    console.log(e);
  }
};

const setRegion = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    console.log("permission not granted");
  }

  const userLocation = await Location.getCurrentPositionAsync();
  //console.log(userLocation);
  let region = "";
  if (userLocation.coords.latitude >= 53) {
    region = "noord";
  }
  if (userLocation.coords.latitude < 53) {
    region = "midden";
  }
  if (userLocation.coords.latitude <= 52) {
    region = "zuid";
  }
  try {
    await AsyncStorage.setItem("Region", region);
  } catch (e) {
    console.log(e);
  }
};

init();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Home"
        component={Homepage}
        options={{ title: 'Home Page' }}
      />
      <Stack.Screen
        name="Details"
        component={Count}
        options={{ title: 'Countdown Page' }}
      />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ title: 'Setting Page' }}
      />
      <Stack.Screen
        name="Information"
        component={Information}
        options={{ title: 'Information Page' }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="cog"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;