import { getBlogs } from '@/config/firebase/api/blogs';
import { useQuery } from '@tanstack/react-query';

import Loading from '@/components/shared/Loading';
import BlogContent from '@/components/feature/blog/BlogContent';
import BlogLayout from '@/components/layout/BlogLayout';

const BlogPage = () => {
  const { data, isLoading } = useQuery(['blogs'], () => {
    return getBlogs();
  });

  if (isLoading || !data) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <BlogLayout>
      <BlogContent blogs={data} />
    </BlogLayout>
  );
};

export default BlogPage;
