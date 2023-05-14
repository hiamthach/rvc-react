import { Information } from '@/config/types/Information';

import ContactBanner from './ContactBanner';
import ContactForm from './ContactForm';

const ContactContent = ({ information }: { information: Information }) => {
  return (
    <div>
      <ContactBanner />
      <ContactForm information={information} />
    </div>
  );
};

export default ContactContent;
