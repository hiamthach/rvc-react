import { GCS_PATH } from '@/config/constants/general';
import { db } from '@/config/firebase';
import { Content } from '@/config/types/Content';

import { collection, getDocs, orderBy, query } from 'firebase/firestore';

export const getAboutUs = async (): Promise<Content[]> => {
  try {
    const aboutUsCol = collection(db, 'about_us_content');
    const q = query(aboutUsCol, orderBy('cId', 'asc'));
    const snapshot = await getDocs(q);
    const contents = snapshot.docs.map((doc) => {
      const data = doc.data() as Content;
      if (data.image) {
        data.image = GCS_PATH + data.image;
      }

      return data;
    });

    return contents;
  } catch (error) {
    console.log(error);
    return [];
  }
};
