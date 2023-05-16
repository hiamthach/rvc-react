import { createContext, useState, useEffect } from 'react';
import { getBlogs } from '@/config/firebase/api/blogs';
import { Blog } from '@/config/types/Blog';
import { useQuery } from '@tanstack/react-query';

import Loading from '@/components/shared/Loading';
import BlogContent from '@/components/feature/blog/BlogContent';
import BlogLayout from '@/components/layout/BlogLayout';
import useDocumentTitle from '@/hooks/useDocumentTitle';

import { useSearchParams } from 'react-router-dom';

interface BlogLayoutProps {
  page: number;
  setPage: (page: number) => void;
}

export const BlogLayoutContext = createContext<BlogLayoutProps>({
  page: 1,
  setPage: () => {
    throw new Error('setPage function must be overridden');
  },
});

const BlogPage = () => {
  useDocumentTitle('Blog');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState<Blog[]>([]);
  const [searchParams] = useSearchParams();
  const { data, isLoading } = useQuery(['blogs'], () => {
    return getBlogs();
  });
  useEffect(() => {
    if (!data) return;
    const searchKeyword = searchParams.get('search') || '';
    if (data && searchKeyword) {
      const searchResult = data.filter((blog) =>
        blog.title.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      setSearch(searchResult);
    } else {
      setSearch(data || []);
    }
  }, [data, searchParams]);

  if (isLoading || !data) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <BlogLayoutContext.Provider value={{ page, setPage }}>
      <BlogLayout>
        {data ? (
          <BlogContent blogs={search} />
        ) : (
          <div className="">
            <h5>No Data</h5>
          </div>
        )}
      </BlogLayout>
    </BlogLayoutContext.Provider>
  );
};

export default BlogPage;
