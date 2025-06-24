/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, Platform } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import SecondScreen from './src/screens/SecondScreen';

const Stack = createNativeStackNavigator();
 
 
const StackNav = () => {
  const [isLogged, setIsLoged] = useState(true)

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, animation: Platform.OS == "ios" ? "default" : "none" }}
    >  
      {/* {isLogged ? <Stack.Screen name="Splash" component={Splash} /> : null}

      {
        loggedUser?.id ? (
          <> */}
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="SecondScreen" component={SecondScreen} />
            {/* <Stack.Screen name="EventList" component={EventList} />
            <Stack.Screen name="EventSchedules" component={EventSchedules} />
            <Stack.Screen name="EventDetails" component={EventDetails} />
            <Stack.Screen name="ScanQRTD" component={ScanQRTD} />
            <Stack.Screen name="ScanQRTP" component={ScanQRTP} /> */}
          {/* </>
        )
        : <Stack.Screen name="Login" component={Login} />
      } */}
    </Stack.Navigator>
  );
};

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
        <StackNav />

      </NavigationContainer>
    // <View style={styles.container}>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <NewAppScreen templateFileName="App.tsx" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
