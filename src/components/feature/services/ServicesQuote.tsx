import Paragraph from '@/components/shared/Paragraph';

import { Button } from '@mantine/core';

import { Link } from 'react-router-dom';

import clsx from 'clsx';

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
      <div className="container flex flex-col md:flex-row gap-5 items-center">
        <div className="flex-1 py-4">
          <h3 className="home-section-title font-bold uppercase text-primary text-2xl md:text-4xl">
            {title}
          </h3>
          <h4 className="text-xl md:text-3xl uppercase font-semibold mb-4 md:mb-10">
            &quot;{quote}&quot;
          </h4>

          <Paragraph content={description} />
        </div>

        <div className="w-fit max-w-full md:max-w-[50%]">
          <img
            src={img}
            alt={title}
            width={560}
            height={400}
            className="max-w-full object-cover md:object-contain object-center"
          />

          <Link to={link} className="block mt-4 text-center">
            <Button
              size="lg"
              component="a"
              href={link}
              target="_blank"
              className={clsx(!link && 'pointer-events-none')}
            >
              Tìm hiểu thêm
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesQuote;
