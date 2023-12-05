import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground } from 'react-native';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

import CustomButton from "../CustomButton";

export default function App({navigation}) {

  useEffect(function(){
    navigation.setOptions({
      headerShown: false,
  });
  });
  
  const [username, setUsername] = useState('Bievenido');
  const [password, setPassword] = useState('');

   async function login(){
    const data = {
      user: username, 
      pass: password
    }

    try {
      await AsyncStorage.setItem("data", JSON.stringify(data));
      console.log("Se guardaron los datos");

    } catch (e){  
      console.log(e);
    }  
    navigation.navigate("Main");
  }

  return (
    
    <ImageBackground source={require('/Users/Darun/Desktop/UAQ/Sexto Semestre/PROGRAMACIÓN DE APPS/NODE/AwesomeProject/Imagenes/1.jpg')} style={styles.container}>
      <Text style={styles.login_header}>¡Hola, {username}!</Text>
      <TextInput
        onChangeText={setUsername}
        style={styles.input_login}
        placeholder="Usuario..."
      />
      <TextInput
        onChangeText={setPassword}
        style={styles.input_login}
        placeholder="Contraseña..."
        secureTextEntry={true}
      />

<CustomButton 
    text={"Iniciar Sesión"} 
    color={"#f56200"} 
    action={login} 
      />
    <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login_header: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
  },
  input_login: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
  },

 });
