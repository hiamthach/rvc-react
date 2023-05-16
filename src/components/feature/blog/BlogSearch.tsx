import iconSearch from '@/assets/icons/search.svg';

import { Input } from '@mantine/core';

import { useNavigate } from 'react-router-dom';

const BlogSearch = () => {
  const navigate = useNavigate();

  return (
    <Input
      icon={<img src={iconSearch} alt="blog-search" className="w-5 h-5" />}
      placeholder="Search"
      radius={'lg'}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          navigate(`/blog?search=${e.currentTarget.value}`);
        }
      }}
    ></Input>
  );
};

export default BlogSearch;
