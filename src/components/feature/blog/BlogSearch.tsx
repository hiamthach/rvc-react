import { IconSearch } from '@tabler/icons-react';

import { Input } from '@mantine/core';

const BlogSearch = () => {
  return <Input icon={<IconSearch />} placeholder="Search" radius={'lg'}></Input>;
};

export default BlogSearch;
