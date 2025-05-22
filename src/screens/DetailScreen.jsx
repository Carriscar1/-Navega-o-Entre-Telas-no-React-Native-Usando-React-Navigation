import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Detalhes</Text>
      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate('Home')}
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
    backgroundColor: '#e0f7fa', // Azul claro
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});