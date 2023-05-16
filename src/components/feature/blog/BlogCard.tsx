import { Blog } from '@/config/types/Blog';

import { Card, Group, Image, Text } from '@mantine/core';
import dayjs from 'dayjs';

import { useNavigate } from 'react-router-dom';

const BlogCard = ({ data }: { data: Blog }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="hover:cursor-pointer"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      onClick={() => navigate(`/blog/${data.id}`)}
    >
      <Card.Section>
        <Image src={data.img} height={300} alt={data.title} />
      </Card.Section>

      <Text weight={700} size="lg" mt={"md"} className='uppercase'>{data.title}</Text>
      <Group position="apart" mb="xs">
        <Text weight={400}>{dayjs(data.date).format('DD/MM/YYYY HH:mm A')}</Text>
        <Text weight={400}>{data.author}</Text>
      </Group>

      <Text size="sm" color="dimmed" className="line-clamp-5">
        {data.description}
      </Text>
    </Card>
  );
};

export default BlogCard;
