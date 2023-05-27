import { convertParagraph } from '@/config/helpers/general';
import clsx from 'clsx';

const Paragraph = ({
  content,
  classNames,
}: {
  content: string;
  classNames?: string;
}) => {
  return (
    <p
      className={clsx('text-sm md:text-base', classNames)}
      dangerouslySetInnerHTML={{
        __html: convertParagraph(content || ''),
      }}
    ></p>
  );
};

export default Paragraph;
