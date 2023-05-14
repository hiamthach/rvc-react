import { GCS_PATH } from '@/config/constants/general';
import { db } from '..';

import { Partner } from '@/config/types/Partner';

import { collection, getDocs } from 'firebase/firestore';

export const getPartners = async () => {
  try {
    const partnerCol = collection(db, 'partners');
    const snapshot = await getDocs(partnerCol);
    const partners = snapshot.docs.map((doc) => {
      const data = doc.data() as Partner;
      if (data.logo) {
        data.logo = GCS_PATH + data.logo;
      }

      return data;
    }) as Partner[];
    return partners;
  } catch (error) {
    console.log(error);
    return [];
  }
};
