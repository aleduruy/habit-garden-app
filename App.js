import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Plant01 } from './src/components/plants/plant01';

export default function App() {
  return (
    <SafeAreaView>
      <Plant01>aloeVera</Plant01>
    </SafeAreaView>
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
