import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import LoginScreen from '../screens/LoginScreen';
import BooksScreen from '../screens/BooksScreen';
import { BookInformation } from '../screens/BookInfo';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: 'Iniciar Sesión', headerShown: false }}
      />
      <Stack.Screen
        name="Books"
        component={BooksScreen}
        options={{
          title: 'Biblioteca UTP',
          headerStyle: {
            backgroundColor: '#0d730d',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
      />
      <Stack.Screen  //<-- Definimos como sera encontrado/importado nuestra vista/componente al resto de vistas
        name="BookInfo" //<--Nombre de la vista
        component={BookInformation} //<-- Componente al que hace referencia
        options={{ //<--Opciones :D
          title: 'Información detallada', //<--Titulo del encabezado
          headerStyle: { //<--Color del encabezado
            backgroundColor: '#0d730d', 
          },
          headerTintColor: 'white', //<--Color del texto del encabezado
          headerTitleStyle: { //<--Estilo para la letra del encabezado
            fontWeight: 'bold', 
          }
        }}
      />
    </Stack.Navigator>
  );
}
