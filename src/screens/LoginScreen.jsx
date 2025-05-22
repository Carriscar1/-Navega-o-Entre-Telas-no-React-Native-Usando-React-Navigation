import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (login === 'admin' && senha === '123') {
      navigation.navigate('Home');
    } else {
      Alert.alert('Erro', 'Login ou senha incorretos!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu login"
        value={login}
        onChangeText={setLogin}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#007bff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});