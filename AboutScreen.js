// AboutScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AboutScreen() {
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [edad, setEdad] = useState('');
  const [direccion, setDireccion] = useState('');
  const [cuentaBancaria, setCuentaBancaria] = useState('');
  const [perfilGuardado, setPerfilGuardado] = useState(false);

  const navigation = useNavigation();

  const guardarPerfil = () => {
    // Guarda la información del usuario, por ejemplo, en AsyncStorage o en un estado global.
    // En este ejemplo, simplemente marcamos que el perfil ha sido guardado.
    setPerfilGuardado(true);

    // Navegar a la pantalla "Inicio" y pasar el nombre como parámetro
    navigation.navigate('Inicio', { nombre: nombreCompleto });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esta es la pantalla About</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nombre Completo"
        value={nombreCompleto}
        onChangeText={text => setNombreCompleto(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Edad"
        value={edad}
        onChangeText={text => setEdad(text)}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Dirección"
        value={direccion}
        onChangeText={text => setDireccion(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Cuenta Bancaria"
        value={cuentaBancaria}
        onChangeText={text => setCuentaBancaria(text)}
        keyboardType="numeric"
      />

      <Button title="Guardar Perfil" onPress={guardarPerfil} />

      {perfilGuardado && (
        <View>
          <Text style={styles.text}>Perfil Guardado:</Text>
          <Text style={styles.text}>Nombre Completo: {nombreCompleto}</Text>
          <Text style={styles.text}>Edad: {edad}</Text>
          <Text style={styles.text}>Dirección: {direccion}</Text>
          <Text style={styles.text}>Cuenta Bancaria: {cuentaBancaria}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
});