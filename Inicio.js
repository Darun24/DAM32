// Inicio.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Inicio({ route }) {
  const { nombre } = route.params;
  const navigation = useNavigation();

  const saldo = 5000; // Obtén el saldo real del usuario desde tus datos o estado.
  const tarjetaFisicaImage = require('/Users/Darun/Desktop/UAQ/Sexto Semestre/PROGRAMACIÓN DE APPS/NODE/AwesomeProject/Imagenes/Tarjeta1.png'); // Ruta a tu imagen de tarjeta física ficticia
  const tarjetaDigitalImage = require('/Users/Darun/Desktop/UAQ/Sexto Semestre/PROGRAMACIÓN DE APPS/NODE/AwesomeProject/Imagenes/Tarjeta2.png'); // Ruta a tu imagen de tarjeta digital ficticia

  const handleOptionsPress = () => {
    navigation.navigate('Opciones');
  };

  const handleTransferPress = () => {
    // Implementa la lógica para transferir dinero de la tarjeta a la cuenta.
    console.log('Transferir dinero');
  };

  const handleTarjetaPress = (tipoTarjeta) => {
    if (tipoTarjeta === 'Fisica') {
      navigation.navigate('Fisica');
    } else if (tipoTarjeta === 'Digital') {
      navigation.navigate('Digital'); // Navega a la pantalla Digital.js
    } else {
      console.log(`Clic en tarjeta ${tipoTarjeta}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Hola {nombre}</Text>
      </View>

      {/* Botón para opciones fuera de la pantalla */}
      <TouchableOpacity style={styles.optionsButton} onPress={handleOptionsPress}>
        <Text>Opciones</Text>
      </TouchableOpacity>

      {/* Sección de tarjeta física */}
      <TouchableOpacity onPress={() => handleTarjetaPress('Fisica')}>
        <Image source={tarjetaFisicaImage} style={styles.tarjetaImage} />
        <Text>Tarjeta Física</Text>
      </TouchableOpacity>

      {/* Sección de tarjeta digital */}
      <TouchableOpacity onPress={() => handleTarjetaPress('Digital')}>
        <Image source={tarjetaDigitalImage} style={styles.tarjetaImage} />
        <Text>Tarjeta Digital</Text>
      </TouchableOpacity>

      {/* Sección de cantidad de dinero */}
      <View style={styles.saldoContainer}>
        <Text style={styles.saldoText}>Saldo disponible:</Text>
        <Text style={styles.saldoAmount}>$ {saldo}</Text>
      </View>

      {/* Botón para transferir dinero */}
      <TouchableOpacity style={styles.transferButton} onPress={handleTransferPress}>
        <Text style={styles.transferButtonText}>Transferir dinero</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
    position: 'relative', // Agregado para la posición relativa
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  optionsButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'blue', // Puedes ajustar el color según tus preferencias
  },
  tarjetaImage: {
    width: 200,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
    marginVertical: 10,
  },
  saldoContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  saldoText: {
    fontSize: 16,
    color: 'gray',
  },
  saldoAmount: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  transferButton: {
    backgroundColor: 'blue',
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  transferButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
