import { Blog } from '@/config/types/Blog';

import BlogCard from './BlogCard';

import { Pagination } from '@mantine/core';

const BlogContent = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {blogs && blogs.map((blog) => <BlogCard key={blog.id} data={blog} />)}
      </div>

      <div className="text-center">
        {blogs.length > 10 && <Pagination total={blogs.length / 9} position="center" />}
      </div>
    </div>
  );
};

export default BlogContent;
