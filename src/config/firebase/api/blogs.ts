import { GCS_PATH } from '@/config/constants/general';
import { db } from '@/config/firebase';
import { Blog } from '@/config/types/Blog';

import { collection, doc, getDoc, getDocs, orderBy, query, where } from 'firebase/firestore';

export const getBlogs = async (): Promise<Blog[]> => {
  try {
    const blogCol = collection(db, 'blogs');
    const blogQ = query(blogCol, orderBy('date', 'desc'));
    const blogSnap = await getDocs(blogQ);
    const blogs = blogSnap.docs.map((doc) => {
      const data = doc.data() as Blog;
      if (data.img) {
        data.img = GCS_PATH + data.img;
      }
      return {
        ...data,
        date: data.date.toDate(),
        id: doc.id,
      } as Blog;
    }).filter((blog) => blog.published);

    return blogs;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getBlogById = async (id: string): Promise<Blog | null> => {
  try {
    const blogCol = collection(db, 'blogs');

    const blogSnap = await getDoc(doc(blogCol, id));

    const data = blogSnap.data() as Blog;

    data.date = data.date.toDate();
    data.id = blogSnap.id;
    if (data.img) {
      data.img = GCS_PATH + data.img;
    }

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
