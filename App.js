
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navigation from './Navigation';
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDce23J808QMfEcg8uK-fi11GriQnNFxU4",
  authDomain: "furnistore-a235c.firebaseapp.com",
  projectId: "furnistore-a235c",
  storageBucket: "furnistore-a235c.appspot.com",
  messagingSenderId: "478713563038",
  appId: "1:478713563038:web:e1e0f4e419605c7e89f88f"
};

const app = initializeApp(firebaseConfig);



export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
