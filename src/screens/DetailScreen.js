import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Button 
        title="Go to Home" 
        onPress={() => navigation.navigate('Home')} 
      />
      <Button 
        title="Go to Profile" 
        onPress={() => navigation.navigate('Profile')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fafae6' // Cor de fundo
  },
  title: { 
    fontSize: 24, 
    marginBottom: 20 
  },
});