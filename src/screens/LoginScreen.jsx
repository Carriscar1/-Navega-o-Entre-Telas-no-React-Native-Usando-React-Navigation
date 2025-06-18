import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import Background from './Background'; // Importando o componente Background

export default function LoginScreen({ navigation }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [loginsSalvos, setLoginsSalvos] = useState([]);
  const [loginSelecionado, setLoginSelecionado] = useState(null);

  // Carrega os logins
  const LoadLogin = async () => {
    try {
      const StoredLogins = await AsyncStorage.getItem('Logins');
      if (StoredLogins !== null) {
        setLoginsSalvos(JSON.parse(StoredLogins));
      }
    } catch (error) {
      console.log('Erro ao carregar o Login:', error);
    }
  };

  // Salva um array de logins
  const SaveLogin = async (LoginArray) => {
    try {
      await AsyncStorage.setItem('Logins', JSON.stringify(LoginArray));
      setLoginsSalvos(LoginArray);
    } catch (error) {
      console.log('Erro ao salvar Login:', error);
    }
  };

  // Adiciona um login 
  const AddLogin = () => {
    if (!login || !senha) {
      Alert.alert('Erro', 'Preencha login e senha!');
      return;
    }
    
    const novoLogin = { login, senha };
    const novosLogins = [...loginsSalvos, novoLogin];
    SaveLogin(novosLogins);
    Alert.alert('Sucesso', 'Login adicionado com sucesso!');
    setLogin('');
    setSenha('');
  };

  // Deleta um login
  const DeleteLogin = (index) => {
    const novosLogins = loginsSalvos.filter((_, i) => i !== index);
    SaveLogin(novosLogins);
    Alert.alert('Sucesso', 'Login removido com sucesso!');
  };

  // Preenche os campos com um login selecionado
  const SelectLogin = (selectedLogin) => {
    setLogin(selectedLogin.login);
    setSenha(selectedLogin.senha);
    setLoginSelecionado(selectedLogin);
  };

  const handleLogin = () => {
    if (login === 'admin' && senha === '123') {
      navigation.navigate('Home');
    } else {

      // Verifica se o login existe
      const VerificarLogin = loginsSalvos.some(
        item => item.login === login && item.senha === senha
      );
      
      if (VerificarLogin) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Erro', 'Login ou senha incorretos!');
      }
    }
  };

  useEffect(() => {
    LoadLogin();
  }, []);

  return (
    <Background>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
  
          <Pressable style={[styles.button, styles.addButton]} onPress={AddLogin}>
            <Text style={styles.buttonText}>Adicionar Login</Text>
          </Pressable>
  
          <Text style={styles.savedLoginsTitle}>Logins Salvos:</Text>
  
          {loginsSalvos.length > 0 ? (
            loginsSalvos.map((item, index) => (
              <View key={index} style={styles.loginItem}>
                <Pressable
                  style={styles.loginTextContainer}
                  onPress={() => SelectLogin(item)}
                >
                  <Text style={styles.loginText}>{item.login}</Text>
                </Pressable>
  
                <Pressable
                  style={styles.deleteButton}
                  onPress={() => DeleteLogin(index)}
                >
                  <Text style={styles.deleteButtonText}>X</Text>
                </Pressable>
              </View>
            ))
          ) : (
            <Text style={styles.noLoginsText}>Nenhum login salvo</Text>
          )}
        </View>
      </ScrollView>
      </Background>
  ); 
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: '#8B4513',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  addButton: {
    backgroundColor: '#8B4513',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  savedLoginsTitle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: '10%',
  },
  loginItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  loginTextContainer: {
    flex: 1,
  },
  loginText: {
    fontSize: 30,
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  noLoginsText: {
    color: '#666',
    fontStyle: 'italic',
  },
});