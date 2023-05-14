import { ReactNode } from 'react';
import BlogSearch from '../feature/blog/BlogSearch';

const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-24">
      <div className="container py-16">
        <div className="flex justify-between items-center">
          <div className="div">
            <h1 className="home-section-hero leading-1 uppercase m-0">Blog</h1>
            <div className="h-[10px] w-16 bg-primary rounded-lg"></div>
          </div>
          <BlogSearch />
        </div>

        {children}
      </div>
    </div>
  );
};

export default BlogLayout;
