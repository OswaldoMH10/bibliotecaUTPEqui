import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { AuthViewModel } from '../viewModels/AuthViewModel';
import { HomeViewModel } from '../viewModels/HomeViewModel';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const dispatch = useDispatch();
  const user = HomeViewModel.getUserInfo();

  const handleLogout = async () => {
    await AuthViewModel.logout();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido al Home</Text>
      {user && (
        <View style={styles.userInfo}>
          <Text style={styles.userText}>Matrícula: {user.matricula}</Text>
          {user.nombre && <Text style={styles.userText}>Nombre: {user.nombre}</Text>}
          {user.email && <Text style={styles.userText}>Email: {user.email}</Text>}
        </View>
      )}
      <Button title="Cerrar sesión" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  userInfo: { marginBottom: 30, alignItems: 'center' },
  userText: { fontSize: 16, marginBottom: 5 },
});