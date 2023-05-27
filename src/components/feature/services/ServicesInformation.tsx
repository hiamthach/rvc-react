import clsx from 'clsx';

import Paragraph from '@/components/shared/Paragraph';

interface Props {
  title: string;
  subtitle: string;
  description: string;
  img: string;
  isReverse?: boolean;
}

const ServicesInformation = ({
  title,
  subtitle,
  description,
  img,
  isReverse,
}: Props) => {
  return (
    <div
      className={clsx(
        'container flex flex-col md:flex-row gap-4 md:gap-10',
        isReverse && 'md:flex-row-reverse'
      )}
    >
      <div className="flex-1 py-10">
        <h3 className="home-section-title font-bold text-2xl md:text-3xl">
          {title}
        </h3>
        <h4 className="text-xl md:text-2xl font-medium mb-4 md:mb-10">
          {subtitle}
        </h4>

        <Paragraph content={description} />
      </div>

      <div className="w-fit">
        <img
          src={img}
          alt={title}
          width={560}
          height={400}
          className="w-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default ServicesInformation;
