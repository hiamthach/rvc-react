import { Blog } from '@/config/types/Blog';

import { Anchor, Breadcrumbs } from '@mantine/core';

const BlogDetail = ({ data }: { data: Blog }) => {
  const items = [
    { title: 'Blog', href: '/blog' },
    { title: data.title, href: '#' },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <div>
      <div className="mb-10 mt-2">
        <Breadcrumbs separator=">">{items}</Breadcrumbs>
      </div>

      <h1 className="home-section-hero text-primary mb-8 mt-0">{data.title}</h1>

      <p className="text-base">{data.description}</p>
    </div>
  );
};

export default BlogDetail;
