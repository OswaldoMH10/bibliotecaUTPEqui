import { User } from '../models/User';

// Simulación de API - reemplaza con tu API real
export class AuthService {
  static async login(matricula: string, contraseña: string): Promise<User> {
    // Simular llamada a API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (matricula && contraseña) {
          resolve({
            matricula,
            nombre: 'Usuario Demo',
            email: 'usuario@utp.edu.mx',
          });
        } else {
          reject(new Error('Credenciales inválidas'));
        }
      }, 1500);
    });
  }

  static async logout(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  }
}