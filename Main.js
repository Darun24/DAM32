import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegistroTarjeta({ navigation }) {
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [numTarjeta, setNumTarjeta] = useState('');

  const handleRegistro = async () => {
    // Agrega la lógica necesaria para el registro de la tarjeta aquí
    console.log('Nombre Completo:', nombreCompleto);
    console.log('Número de Tarjeta:', numTarjeta);

    // Guardar datos y navegar a la pantalla RegistroTarjeta
    const data = {
      nombreCompleto,
      numTarjeta,
    };

    try {
      await AsyncStorage.setItem('data', JSON.stringify(data));
      console.log('Se guardaron los datos');
      navigation.navigate('RegistroTarjeta');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Tarjeta</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre Completo"
        value={nombreCompleto}
        onChangeText={setNombreCompleto}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de Tarjeta (16 dígitos)"
        value={numTarjeta}
        onChangeText={setNumTarjeta}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegistro}>
        <Text style={styles.buttonText}>Registrar Tarjeta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
