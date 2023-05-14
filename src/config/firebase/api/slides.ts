import { GCS_PATH } from '@/config/constants/general';
import { db } from '..';

import { Slide } from '@/config/types/Slide';

import { collection, getDocs, query, where } from 'firebase/firestore';

export const getSlides = async (route: string) => {
  try {
    const slideCol = collection(db, 'slides');
    const slideQ = query(slideCol, where('route', '==', route));
    const snapshot = await getDocs(slideQ);
    const slides = snapshot.docs.map((doc) => {
      const data = doc.data() as Slide;
      if (data.img) {
        data.img = GCS_PATH + data.img;
      }

      return data;
    }) as Slide[];
    return slides;
  } catch (error) {
    console.log(error);
    return [];
  }
};
