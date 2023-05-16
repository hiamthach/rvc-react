import { Blog } from '@/config/types/Blog';

import BlogCard from './BlogCard';

import { Pagination } from '@mantine/core';

import { BLOG_LIMIT } from '@/config/constants/blog';
import { useContext } from 'react';
import { BlogLayoutContext } from '@/pages/BlogPage';

const BlogContent = ({ blogs }: { blogs: Blog[] }) => {
  const { page, setPage } = useContext(BlogLayoutContext);

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {blogs?.length > 0 &&
          blogs
            .slice((page - 1) * BLOG_LIMIT, page * BLOG_LIMIT)
            .map((blog) => <BlogCard key={blog.id} data={blog} />)}
      </div>

      <div className="text-center">
        {blogs.length > BLOG_LIMIT && (
          <Pagination
            value={page}
            onChange={(value) => {
              setPage(value);
            }}
            total={blogs.length / BLOG_LIMIT + 1}
            position="center"
          />
        )}
      </div>
    </div>
  );
};

export default BlogContent;
