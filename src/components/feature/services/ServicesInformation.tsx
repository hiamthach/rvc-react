import clsx from 'clsx';

interface Props {
  title: string;
  subtitle: string;
  description: string;
  img: string;
  isReverse?: boolean;
}

const ServicesInformation = ({ title, subtitle, description, img, isReverse }: Props) => {
  return (
    <div className={clsx('container flex gap-10', isReverse && 'flex-row-reverse')}>
      <div className="flex-1 py-10">
        <h3 className="home-section-title font-bold  text-3xl">{title}</h3>
        <h4 className="text-2xl font-medium mb-10">{subtitle}</h4>

        <p className="text-base">{description}</p>
      </div>

      <div className="w-fit">
        <img src={img} alt={title} width={560} height={400} />
      </div>
    </div>
  );
};

export default ServicesInformation;
