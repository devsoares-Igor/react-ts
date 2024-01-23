import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

const auth = getAuth();

const isAuthenticated = (): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      unsubscribe(); // Interrompe a escuta após a primeira chamada

      // Se houver um usuário, está autenticado; caso contrário, não está
      resolve(user !== null);
    }, (error) => {
      reject(error); // Rejeita a promessa em caso de erro
    });
  });
};

export default isAuthenticated;
