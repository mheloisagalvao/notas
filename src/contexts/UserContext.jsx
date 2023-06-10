import React, { createContext, useContext, useEffect, useState } from 'react';
import firebase from '../../firebaseConfig';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email } = user;
        setUser({ displayName, email });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        setUser({ displayName, email });
      })
      .catch((error) => {
        console.error('Erro ao fazer login com o Google:', error);
      });
  };

  const logout = () => {
    firebase.auth().signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error('Erro ao fazer logout:', error);
      });
  };

  const userContextValue = {
    user,
    signInWithGoogle,
    logout
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);