import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandTwitterFilled,
  IconBrandYoutube,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconPointer,
} from '@tabler/icons-react';

import { Link } from 'react-router-dom';

import Logo from '@/components/shared/Logo';

import { Information } from '@/config/types/Information';

import clsx from 'clsx';

const Footer = ({ information }: { information: Information }) => {
  if (!information) return null;

  const { email, website, phone, address, facebook, instagram, twitter, youtube } = information;

  return (
    <footer className="w-full bg-primary">
      <div className="container py-10">
        <div className="flex flex-col md:flex-row gap-4 flex-wrap md:flex-nowrap justify-between items-center md:items-stretch mb-3">
          <div className="flex flex-col items-center md:items-start gap-2 w-fit h-full">
            <div className="mb-3">
              <Logo width={240} height={56} />
            </div>

            <div className="flex gap-2 text-white">
              <IconPhoneCall className="w-5 h-5" />
              <span className="text-sm">{phone}</span>
            </div>
            <div className="flex gap-2 text-white">
              <IconMail className="w-5 h-5" />
              <span className="text-sm">{email}</span>
            </div>
            <div className="flex gap-2 text-white">
              <IconMapPin className="w-5 h-5" />
              <span className="text-sm">{address}</span>
            </div>
            <div className="flex gap-2 text-white">
              <IconPointer className="w-5 h-5" />
              <span className="text-sm">{website}</span>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-end justify-between">
            <div className="flex flex-col sm:flex-row gap-4 md:gap-10 justify-end mb-2">
              <div className="flex flex-col items-center w-full sm:items-start gap-2 sm:w-fit">
                <Link to={'/'} className="uppercase text-base text-white no-underline font-medium">
                  Trang chủ
                </Link>
              </div>
              <div className="flex flex-col items-center w-full sm:items-start gap-2 sm:w-fit">
                <Link to={'/about-us'} className="uppercase text-base text-white no-underline font-medium">
                  Về chúng tôi
                </Link>

                <Link to={'/about-us/vision'} className="text-sm text-white no-underline">
                  Tầm nhìn
                </Link>
                <Link to={'/about-us/mission'} className="text-sm text-white no-underline">
                  Sứ mệnh
                </Link>
                <Link to={'/about-us/story'} className="text-sm text-white no-underline">
                  Câu chuyện đầu tư
                </Link>
              </div>
              <div className="flex flex-col items-center w-full sm:items-start gap-2 sm:w-fit">
                <Link to={'/services/list'} className="uppercase text-base text-white no-underline font-medium">
                  Sản phẩm
                </Link>
                <Link to={'/services/list'} className="text-sm text-white no-underline">
                  Danh mục sản phẩm
                </Link>
                <Link to={'/services/asset'} className="text-sm text-white no-underline">
                  Quản lý tài sản
                </Link>
                <Link to={'/services/investment'} className="text-sm text-white no-underline">
                  Ủy thác đầu tư
                </Link>
              </div>
              <div className="flex flex-col items-center w-full sm:items-start gap-2 sm:w-fit">
                <Link to={'/blog'} className="uppercase text-base text-white no-underline font-medium">
                  Blog
                </Link>
              </div>
              <div className="flex flex-col items-center w-full sm:items-start gap-2 sm:w-fit">
                <Link to={'/contact'} className="uppercase text-base text-white no-underline font-medium">
                  Liên hệ
                </Link>
              </div>
            </div>

            <div className="flex gap-4 justify-center md:justify-end items-center mt-auto w-full">
              <Link
                to={facebook ? facebook : '/'}
                target="_blank"
                className={clsx(
                  'flex items-center justify-center w-9 h-9 rounded-full bg-white text-primary',
                  !facebook && 'pointer-events-none'
                )}
              >
                <IconBrandFacebookFilled className="w-[26px] h-[26px]" />
              </Link>
              <Link
                to={instagram ? instagram : '/'}
                target="_blank"
                className={clsx(
                  'flex items-center justify-center w-9 h-9 rounded-full bg-white text-primary',
                  !instagram && 'pointer-events-none'
                )}
              >
                <IconBrandInstagram className="w-7 h-7" />
              </Link>
              <Link
                to={twitter ? twitter : '/'}
                target="_blank"
                className={clsx(
                  'flex items-center justify-center w-9 h-9 rounded-full bg-white text-primary',
                  !twitter && 'pointer-events-none'
                )}
              >
                <IconBrandTwitterFilled className="w-6 h-6" />
              </Link>
              <Link
                to={instagram ? instagram : '/'}
                target="_blank"
                className={clsx(
                  'flex items-center justify-center w-9 h-9 rounded-full bg-white text-primary',
                  !youtube && 'pointer-events-none'
                )}
              >
                <IconBrandYoutube className="w-7 h-7" />
              </Link>
            </div>
          </div>
        </div>

        <p className="text-center text-white text-xs mb-0">© Copyright 2023, Rong Vang Capital.</p>
      </div>
    </footer>
  );
};

export default Footer;
