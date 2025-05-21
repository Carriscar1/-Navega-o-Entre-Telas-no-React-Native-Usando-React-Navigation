import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Button 
        title="Go to Home" 
        onPress={() => navigation.navigate('Home')} 
      />
      <Button 
        title="Go to Details" 
        onPress={() => navigation.navigate('Details')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#e6e6fa' // Cor de fundo roxa clara
  },
  title: { 
    fontSize: 24, 
    marginBottom: 20 
  },
});