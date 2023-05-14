import { Button } from '@mantine/core';

import { Link } from 'react-router-dom';

interface Props {
  title: string;
  quote: string;
  description: string;
  img: string;
  link: string;
}

const ServicesQuote = ({ title, quote, description, img, link }: Props) => {
  return (
    <div className="w-full bg-grey py-12">
      <div className="container flex gap-5">
        <div className="flex-1 py-4 ">
          <h3 className="home-section-title font-bold uppercase text-primary text-4xl">{title}</h3>
          <h4 className="text-3xl uppercase font-semibold mb-10">&quot;{quote}&quot;</h4>

          <p className="text-base">{description}</p>
        </div>

        <div className="w-fit">
          <img src={img} alt={title} width={560} height={400} className="object-contain object-center" />

          <Link to={link} className="block mt-4 text-center">
            <Button size="lg">Tìm hiểu thêm</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesQuote;
