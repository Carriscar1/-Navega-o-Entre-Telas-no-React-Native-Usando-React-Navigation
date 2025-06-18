import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

export default function HomeScreen({ navigation }) {

  const cookies = [
    { nome: "Cookie Clássico", preco: "R$5,90" },
    { nome: "Cookie de Chocolate", preco: "R$6,50" },
    { nome: "Cookie de Aveia", preco: "R$5,75" },
    { nome: "Cookie Red Velvet", preco: "R$7,20" },
    { nome: "Cookie Nutella", preco: "R$8,00" },
  ];

  return (
    <View style={styles.container}>

      <View style={styles.navbar}>
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        
        
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.navText}>Sair</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>LOJA DE COOKIES</Text>
        

        <View style={styles.cookiesContainer}>
          {cookies.map((cookie, index) => (
            <View key={index} style={styles.cookieCard}>
              <View style={styles.cookieImage} />
              <Text style={styles.cookieName}>{cookie.nome}</Text>
              <Text style={styles.cookiePrice}>{cookie.preco}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDBBB',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#8B4513',
    paddingVertical: 15,
    width: '100%',
  },
  navButton: {
    paddingHorizontal: windowWidth * 0.02, 
    minWidth: windowWidth * 0.2,
    alignItems: 'center',
  },
  navText: {
    color: 'white',
    fontSize: windowWidth * 0.04, 
    fontWeight: '500',
  },
  content: {
    padding: 20,
    paddingTop: 80, 
  },
  title: {
    fontSize: windowWidth * 0.06,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#8B4513',
  },
  cookiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cookieCard: {
    width: windowWidth < 400 ? '100%' : '48%', 
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cookieImage: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    backgroundColor: '#D2B48C',
    borderRadius: windowWidth * 0.15,
    marginBottom: 10,
  },
  cookieName: {
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
    color: '#5C4033',
    textAlign: 'center',
    marginBottom: 5,
  },
  cookiePrice: {
    fontSize: windowWidth * 0.04,
    color: '#8B4513',
    fontWeight: '600',
  },
});