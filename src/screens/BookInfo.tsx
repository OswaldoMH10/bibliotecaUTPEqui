import React, { useState } from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { imagenesMap } from '../utils/imagenesFile'; //<--Importamos el mapa de imagenes
import { Book } from '../models/Book'; //<--Importamos el modelo del libro
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions,
    FlatList,
    Button
} from 'react-native'; //<-- Aqui importamos las etiquetas que vamos a utilizar
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type MaterialIconName =
  | 'home'
  | 'recommend'
  | 'book'
  | 'credit-card'
  | 'favorite'
  | 'notifications'
  | 'person'
    'favorite'
;

type BookInformationRouteProp = RouteProp<RootStackParamList, 'BookInfo'>;

export const BookInformation = () => { //<-- Esto es una funcion flecha
    const route = useRoute<BookInformationRouteProp>();
    const { item } = route.params;
    return ( //<--Retornamos el contenido de la vista
        <View>
            <Image
                source={
                    imagenesMap[item.imagen] ? imagenesMap[item.imagen] : { uri: item.imagen }
                }
                style={styles.bookImage}
                resizeMode="stretch" />
            <Text style={styles.labels}>
                Titulo: {item.nombre}
            </Text>
            <Text style={styles.labels}>
                Estado: {item.disponible ? 'Disponible' : 'No disponible'}
            </Text>
            <Text style={styles.labels}>
                No. Existencia: {item.unidades}
            </Text>
            <Text style={styles.labels}>
                Genero: {item.genero}
            </Text>
            <Text style={styles.labels}>
                Descripción: {item.descripcion}
            </Text>
            <TouchableOpacity style={ styles.buttonV1 }>
                <Text style={{textAlign:'center', padding:'5%', fontSize: 17, fontWeight: 'bold'}}>
                    Solicitar Préstamo
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.buttonV2 }>
                <MaterialIcons name='favorite' size={50} color="#666" style={styles.icono}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({ //<--Creamos una variable que contendra los estilos
    bookImage: { 
        width: '100%', 
        height: '60%'
    },

    buttonV1: { 
        backgroundColor: "#0d9701", 
        borderRadius: 5, 
        height: '7%', 
        width: '70%',
        left:'6%',
        top: '15%'
    },

    buttonV2: { 
        backgroundColor: "#0d9701", 
        borderRadius: 5, 
        height: '7%', 
        width: '15%',
        left: '79%',
        top: '8%'
    },
    labels:{
        paddingLeft: '6%',
        paddingTop: '2%',
        fontSize: 16,
        fontWeight: 'bold'
    },
    icono:{
        left:6,
        top:3
    }
})