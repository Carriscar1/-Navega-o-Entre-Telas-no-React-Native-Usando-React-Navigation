import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        title="Ir para Detalhes"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Ir para Perfil"
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
    backgroundColor: '#f6f8ff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});