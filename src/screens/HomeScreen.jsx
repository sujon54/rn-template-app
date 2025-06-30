import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Button } from 'react-native';
import ToolBar from '../components/ToolBar';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  const navigation = useNavigation();
  const store = useSelector((state) => state.user);
  const goToSecondScreen = () => {
    navigation.navigate('SecondScreen');
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome {store.name}</Text>
        <Text style={styles.subtitle}>This is your starter React Native template app.</Text>
        <View style={{ marginTop: 20 }}>
          <Button title="Go to Second Screen" onPress={goToSecondScreen} />
        </View>
          <View style={{ marginTop: 20 }}>
            <Button title="Go to Login Screen" onPress={() => navigation.navigate('Login')} />
          </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  toolbarWrapper: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#f2f2f2',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default HomeScreen;