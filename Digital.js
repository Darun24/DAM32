// Digital.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Digital() {
  // Puedes agregar lógica específica de la pantalla aquí
  const numeroTarjeta = '**** **** **** 5678'; // Número de la tarjeta ficticio
  const nombreTitular = 'Nombre Apellido'; // Nombre del titular ficticio
  const fechaExpiracion = '12/25'; // Fecha de expiración ficticia

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarjeta Digital</Text>

      <View style={styles.card}>
        <Image
          source={require('/Users/Darun/Desktop/UAQ/Sexto Semestre/PROGRAMACIÓN DE APPS/NODE/AwesomeProject/Imagenes/Tarjeta2.png')} // Ruta a la imagen de la tarjeta digital
          style={styles.cardImage}
        />
        <Text style={styles.cardText}>{numeroTarjeta}</Text>
        <Text style={styles.cardText}>{nombreTitular}</Text>
        <Text style={styles.cardText}>{fechaExpiracion}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    alignItems: 'center',
  },
  cardImage: {
    width: 200,
    height: 120,
    resizeMode: 'cover',
    marginBottom: 15,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 10,
  },
});
