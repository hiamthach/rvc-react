import { GCS_PATH } from '@/config/constants/general';
import { db } from '@/config/firebase';
import { Content } from '@/config/types/Content';

import { collection, getDocs, orderBy, query } from 'firebase/firestore';

export const getServices = async (type: string): Promise<Content[]> => {
  try {
    const serviceCol = collection(db, 'services-content');
    const q = query(serviceCol, orderBy('cId', 'asc'));
    const snapshot = await getDocs(q);
    const contents = snapshot.docs
      .map((doc) => {
        const data = doc.data() as Content;
        if (data.image) {
          data.image = GCS_PATH + data.image;
        }

        return data;
      })
      .filter((item: Content) => item.cId.includes(type));
    return contents;
  } catch (error) {
    console.log(error);
    return [];
  }
};
