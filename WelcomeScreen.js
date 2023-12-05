// WelcomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  const goToAboutScreen = () => {
    navigation.navigate('About');
  };

  return (
    <ImageBackground source={require('/Users/Darun/Desktop/UAQ/Sexto Semestre/PROGRAMACIÓN DE APPS/NODE/AwesomeProject/Imagenes/1.jpg')} style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.logo}>Bienvenido a Expense Minder</Text>
        <Text style={styles.text}>¡Comencemos con la experiencia de mejorar tus gastos!</Text>
        
        {/* Botón para ir a la pantalla "About" */}
        <TouchableOpacity onPress={goToAboutScreen} style={styles.button}>
          <Text style={styles.buttonText}>Ir a About</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  // Agrega estilos adicionales si es necesario
});