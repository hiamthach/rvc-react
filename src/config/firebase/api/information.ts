import { db } from '@/config/firebase';
import { Information } from '@/config/types/Information';

import { collection, getDocs } from 'firebase/firestore';

export const getInformation = async () => {
  try {
    const infoCol = collection(db, 'information');
    const snapshot = await getDocs(infoCol);
    const informations = snapshot.docs.map((doc) => doc.data()) as Information[];

    const info = informations[0];
    return info;
  } catch (error) {
    console.log(error);
    return null;
  }
};
