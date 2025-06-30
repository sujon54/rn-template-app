import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Platform, Button } from 'react-native';
import ToolBar from '../components/ToolBar';
import { useNavigation } from '@react-navigation/native';

const SecondScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>

      {/* <View style={styles.toolbarWrapper}>
        <ToolBar onBackPress={() => navigation.goBack()} title="Second Screen" />
      </View> */}

      <View style={styles.container}>
        <Text style={styles.title}>🚀 You’re on the second screen!</Text>
        <Text style={styles.subtitle}>This is a sample second screen for your starter template.</Text>
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
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default SecondScreen;
