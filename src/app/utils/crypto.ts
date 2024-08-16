export function encryptMessage(message: string, key: string): string {
    // Simple encryption logic
    return btoa(`${key}${message}${key}`);
  }
  
  export function decryptMessage(encrypted: string, key: string): string {
    // Simple decryption logic
    return atob(encrypted).replace(new RegExp(key, 'g'), '');
  }
  