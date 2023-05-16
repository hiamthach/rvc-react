import { IconSearch } from '@tabler/icons-react';

import { Input } from '@mantine/core';

import { useNavigate } from 'react-router-dom';

const BlogSearch = () => {
  const navigate = useNavigate();

  return (
    <Input
      icon={<IconSearch />}
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
