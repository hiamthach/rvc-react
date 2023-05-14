import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBH1R56UTA1Uw9czUs89ga7H_O17lVgTZc',
  authDomain: 'rvc-website-23570.firebaseapp.com',
  projectId: 'rvc-website-23570',
  storageBucket: 'rvc-website-23570.appspot.com',
  messagingSenderId: '1060428405044',
  appId: '1:1060428405044:web:fab80a155ef8208ee4ad61',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
