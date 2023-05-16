import { Information } from '@/config/types/Information';

import phoneIcon from '@/assets/icons/phone-black.svg';
import mailIcon from '@/assets/icons/mail-black.svg';
import locationIcon from '@/assets/icons/location-black.svg';
import websiteIcon from '@/assets/icons/website-black.svg';

import { Button, TextInput, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

import emailjs from '@emailjs/browser';

interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  feedback: string;
}

const ContactForm = ({ information }: { information: Information }) => {
  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      feedback: '',
    },
  });

  const handleSubmit = (values: IFormValues) => {
    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          from_name: values.firstName + ' ' + values.lastName,
          message: values.feedback,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(() => {
        notifications.show({
          color: 'green',
          title: 'Thông tin của bạn đã được gửi đi',
          message: 'Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất',
        });
      })
      .catch(() => {
        notifications.show({
          color: 'red',
          title: 'Có lỗi xảy ra',
          message: 'Vui lòng thử lại sau',
        });
      });
  };

  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row w-full gap-5">
        <div className="flex-1">
          <h3 className="home-section-hero uppercase">Liên hệ</h3>
          <div className="bg-primary h-[10px] w-[100px] rounded-lg"></div>

          <h4 className="mt-10 mb-1 text-xl md:text-2xl leading-1">
            Công ty TNHH Rồng Vàng Capital
          </h4>
          <h5 className="mb-4 md:mb-10 mt-0 text-xl md:text-2xl leading-1 font-medium">
            RONG VANG CAPITAL COMPANY LTD.
          </h5>

          <ul className="list-none pl-0">
            <li className="flex gap-3 items-center mb-1">
              <img
                src={phoneIcon}
                alt="phone"
                className="w-4 h-4 md:w-6 md:h-6"
              />
              <span className="text-sm md:text-xl">{information.phone}</span>
            </li>
            <li className="flex gap-3 items-center mb-1">
              <img
                src={mailIcon}
                alt="mail"
                className="w-4 h-4 md:w-6 md:h-6"
              />
              <span className="text-sm md:text-xl">{information.email}</span>
            </li>
            <li className="flex gap-3 items-center mb-1">
              <img
                src={locationIcon}
                alt="location"
                className="w-4 h-4 md:w-6 md:h-6"
              />
              <span className="text-sm md:text-xl">{information.address}</span>
            </li>
            <li className="flex gap-3 items-center mb-1">
              <img
                src={websiteIcon}
                alt="website"
                className="w-4 h-4 md:w-6 md:h-6"
              />
              <span className="text-sm md:text-xl">{information.website}</span>
            </li>
          </ul>
        </div>

        <div className="flex-1 shadow-lg rounded-3xl p-4 border border-solid border-[#f1f1f1]">
          <h4 className="home-section-hero text-primary text-center mb-4">
            Get in touch with us
          </h4>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.onSubmit((values) => handleSubmit(values))}
          >
            <div className="flex gap-4 flex-col sm:flex-row">
              <div className="flex-1">
                <TextInput
                  placeholder="First name"
                  size="lg"
                  name="firstName"
                  {...form.getInputProps('firstName')}
                />
              </div>
              <div className="flex-1">
                <TextInput
                  placeholder="Last name"
                  size="lg"
                  name="lastName"
                  {...form.getInputProps('lastName')}
                />
              </div>
            </div>
            <TextInput
              placeholder="Email"
              size="lg"
              name="email"
              type="email"
              withAsterisk
              {...form.getInputProps('email')}
            />
            <TextInput
              placeholder="Số điện thoại"
              size="lg"
              name="phone"
              type="tel"
              withAsterisk
              {...form.getInputProps('phone')}
            />
            <Textarea
              placeholder="Lời nhắn của bạn"
              size="lg"
              minRows={4}
              name="feedback"
              {...form.getInputProps('feedback')}
            />
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
