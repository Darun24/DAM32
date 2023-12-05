// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Components/Screens/Login';
import Main from './Components/Screens/Main';
import WelcomeScreen from './Components/Screens/WelcomeScreen';
import AboutScreen from './Components/Screens/AboutScreen';
import Inicio from './Components/Screens/Inicio'; // Asegúrate de tener este archivo con la pantalla Inicio
import OpcionesScreen from './Components/Screens/OpcionesScreen'; // Asegúrate de tener este archivo con la pantalla Opciones
import Fisica from './Components/Screens/Fisica';
import Digital from './Components/Screens/Digital';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="RegistroTarjeta" component={WelcomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen
            name="Inicio"
            component={Inicio}
          />

        <Stack.Screen name="Opciones" component={OpcionesScreen} />
        <Stack.Screen name='Fisica' component={Fisica}/>
        <Stack.Screen name='Digital' component={Digital}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}





     

