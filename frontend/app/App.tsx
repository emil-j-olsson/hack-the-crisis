import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Onboarding } from './screens/Onboarding';

const { width, height } = Dimensions.get("window");

export default function App() {
  return (
    <Onboarding></Onboarding>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
