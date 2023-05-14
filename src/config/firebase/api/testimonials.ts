import { GCS_PATH } from '@/config/constants/general';
import { db } from '@/config/firebase';
import { Testimonial } from '@/config/types/Testimonial';

import { collection, getDocs } from 'firebase/firestore';

export const getTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const testimonialCol = collection(db, 'testimonials');
    const snapshot = await getDocs(testimonialCol);
    const testimonials = snapshot.docs.map((doc) => {
      const data = doc.data() as Testimonial;
      if (data.avatar) {
        data.avatar = GCS_PATH + data.avatar;
      }

      return data;
    }) as Testimonial[];

    return testimonials;
  } catch (error) {
    console.log(error);
    return [];
  }
};
