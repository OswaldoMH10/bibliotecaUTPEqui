// src/services/encryptionService.ts
import CryptoJS from "crypto-js";

export class EncryptionService {
  // Encripta una cadena con SHA256
  static encrypt(text: string): string {
    return CryptoJS.SHA256(text).toString();
  }

  // Utilidad temporal: encripta y manda a consola
  static debugEncrypt(text: string): void {
    const encrypted = this.encrypt(text);
    console.log(`Texto original: ${text}`);
    console.log(`Texto encriptado: ${encrypted}`);
  }
}
