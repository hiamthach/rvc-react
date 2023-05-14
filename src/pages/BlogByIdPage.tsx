import { useQuery } from '@tanstack/react-query';

import { useParams } from 'react-router-dom';

import BlogLayout from '@/components/layout/BlogLayout';
import Loading from '@/components/shared/Loading';
import BlogDetail from '@/components/feature/blog/BlogDetail';
import { getBlogById } from '@/config/firebase/api/blogs';

const BlogByIdPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useQuery(
    ['blogs'],
    () => {
      if (!id) {
        return;
      }
      return getBlogById(id);
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading || !data) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <BlogLayout>
      <BlogDetail data={data} />
    </BlogLayout>
  );
};

export default BlogByIdPage;
