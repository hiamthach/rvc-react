import { IconMail, IconMapPin, IconPhoneCall, IconPointer } from '@tabler/icons-react';

import { Information } from '@/config/types/Information';

import { Button, TextInput, Textarea } from '@mantine/core';
// import { useForm } from '@mantine/form';

const ContactForm = ({ information }: { information: Information }) => {
  // const form = useForm({
  //   initialValues: {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     phone: '',
  //     feedback: '',
  //   },
  // });

  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row w-full gap-5">
        <div className="flex-1">
          <h3 className="home-section-hero uppercase">Liên hệ</h3>
          <div className="bg-primary h-[10px] w-[100px] rounded-lg"></div>

          <h4 className="mt-10 mb-1 text-2xl leading-1">Công ty TNHH Rồng Vàng Capital</h4>
          <h5 className="mb-10 mt-0 text-2xl leading-1 font-medium">RONG VANG CAPITAL COMPANY LTD.</h5>

          <ul className="list-none pl-0">
            <li className="flex gap-3 items-center mb-1">
              <IconPhoneCall className="w-6 h-6" />
              <span className="text-xl">{information.phone}</span>
            </li>
            <li className="flex gap-3 items-center mb-1">
              <IconMail className="w-6 h-6" />
              <span className="text-xl">{information.email}</span>
            </li>
            <li className="flex gap-3 items-center mb-1">
              <IconMapPin className="w-6 h-6" />
              <span className="text-xl">{information.address}</span>
            </li>
            <li className="flex gap-3 items-center mb-1">
              <IconPointer className="w-6 h-6" />
              <span className="text-xl">{information.website}</span>
            </li>
          </ul>
        </div>

        <div className="flex-1 shadow-lg rounded-3xl p-4 border border-solid border-[#f1f1f1]">
          <h4 className="home-section-hero text-primary text-center">Get in touch with us</h4>
          <form className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <TextInput placeholder="First name" size="lg" name="firstName" />
              </div>
              <div className="flex-1">
                <TextInput placeholder="Last name" size="lg" name="lastName" />
              </div>
            </div>
            <TextInput placeholder="Email" size="lg" name="email" />
            <TextInput placeholder="Số điện thoại" size="lg" name="phone" />
            <Textarea placeholder="Lời nhắn của bạn" size="lg" minRows={4} name="feedback" />
            <Button type="submit" size="lg">
              Gửi thông tin
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
