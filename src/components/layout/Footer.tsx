import phoneIcon from '@/assets/icons/phone.svg';
import mailIcon from '@/assets/icons/mail.svg';
import locationIcon from '@/assets/icons/location.svg';
import websiteIcon from '@/assets/icons/website.svg';

import facebookIcon from '@/assets/icons/facebook.png';
import instagramIcon from '@/assets/icons/instagram.png';
import twitterIcon from '@/assets/icons/twitter.png';
import youtubeIcon from '@/assets/icons/youtube.png';

import { Link } from 'react-router-dom';

import Logo from '@/components/shared/Logo';

import { Information } from '@/config/types/Information';

import clsx from 'clsx';

const Footer = ({ information }: { information: Information }) => {
  if (!information) return null;

  const {
    email,
    website,
    phone,
    address,
    facebook,
    instagram,
    twitter,
    youtube,
  } = information;

  return (
    <footer
      className="w-full"
      style={{
        background: 'linear-gradient(180deg, #c62127, #86181a)',
      }}
    >
      <div className="container py-10">
        <div className="flex flex-col md:flex-row gap-4 flex-wrap md:flex-nowrap justify-between items-center md:items-stretch mb-3">
          <div className="flex flex-col items-center md:items-start gap-2 w-fit h-full">
            <div className="mb-3">
              <Logo width={240} height={56} />
            </div>

            <div className="flex gap-2 text-white">
              {/* <IconPhoneCall className="w-5 h-5" /> */}
              <img src={phoneIcon} alt="phone" className="h-5 w-5" />
              <span className="text-sm">{phone}</span>
            </div>
            <div className="flex gap-2 text-white">
              <img src={mailIcon} alt="email" className="h-5 w-5" />
              <span className="text-sm">{email}</span>
            </div>
            <div className="flex gap-2 text-white">
              <img src={locationIcon} alt="location" className="h-5 w-5" />
              <span className="text-sm">{address}</span>
            </div>
            <div className="flex gap-2 text-white">
              <img src={websiteIcon} alt="website" className="h-5 w-5" />
              <span className="text-sm">{website}</span>
            </div>
          </div>

          <div className="flex w-full flex-col items-center sm:items-end justify-between">
            <div className="flex w-full lg:w-4/5 flex-col sm:flex-row gap-4 md:gap-10 justify-end mb-2">
              <div className="flex flex-col items-center w-full sm:items-start gap-2 sm:w-1/5">
                <Link
                  to={'/'}
                  className="uppercase text-base text-white no-underline font-extrabold"
                >
                  Trang chủ
                </Link>
              </div>
              <div className="flex flex-col items-center w-full sm:items-start gap-2 sm:w-1/5">
                <Link
                  to={'/about-us'}
                  className="uppercase text-base text-white no-underline font-extrabold"
                >
                  Về chúng tôi
                </Link>

                <Link
                  to={'/about-us/vision'}
                  className="text-sm text-white no-underline"
                >
                  Tầm nhìn
                </Link>
                <Link
                  to={'/about-us/mission'}
                  className="text-sm text-white no-underline"
                >
                  Sứ mệnh
                </Link>
                <Link
                  to={'/about-us/story'}
                  className="text-sm text-white no-underline"
                >
                  Câu chuyện đầu tư
                </Link>
              </div>
              <div className="flex flex-col items-center w-full sm:items-start gap-2 sm:w-1/5">
                <Link
                  to={'/services/list'}
                  className="uppercase text-base text-white no-underline font-extrabold"
                >
                  Sản phẩm
                </Link>
                <Link
                  to={'/services/list'}
                  className="text-sm text-white no-underline"
                >
                  Danh mục sản phẩm
                </Link>
                <Link
                  to={'/services/asset'}
                  className="text-sm text-white no-underline"
                >
                  Quản lý tài sản
                </Link>
                <Link
                  to={'/services/investment'}
                  className="text-sm text-white no-underline"
                >
                  Ủy thác đầu tư
                </Link>
              </div>
              <div className="flex flex-col items-center w-full sm:items-start gap-2 sm:w-1/5">
                <Link
                  to={'/blog'}
                  className="uppercase text-base text-white no-underline font-extrabold"
                >
                  Blog
                </Link>
                <Link
                  to={'/coming-soon'}
                  className="text-sm text-white no-underline"
                >
                  Kiến thức đầu tư
                </Link>
                <Link
                  to={'/coming-soon'}
                  className="text-sm text-white no-underline"
                >
                  Tin tức đầu tư
                </Link>
              </div>
              <div className="flex flex-col whitespace-nowrap items-center w-full sm:items-start gap-2 sm:w-fit">
                <Link
                  to={'/contact'}
                  className="uppercase text-base text-white no-underline font-extrabold"
                >
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
                <img
                  src={facebookIcon}
                  alt="facebook-icon"
                  className="w-8 h-8"
                />
              </Link>
              <Link
                to={instagram ? instagram : '/'}
                target="_blank"
                className={clsx(
                  'flex items-center justify-center w-9 h-9 rounded-full bg-white text-primary',
                  !instagram && 'pointer-events-none'
                )}
              >
                <img
                  src={instagramIcon}
                  alt="instagram-icon"
                  className="w-8 h-8"
                />
              </Link>
              <Link
                to={twitter ? twitter : '/'}
                target="_blank"
                className={clsx(
                  'flex items-center justify-center w-9 h-9 rounded-full bg-white text-primary',
                  !twitter && 'pointer-events-none'
                )}
              >
                <img src={twitterIcon} alt="twitter-icon" className="w-8 h-8" />
              </Link>
              <Link
                to={instagram ? instagram : '/'}
                target="_blank"
                className={clsx(
                  'flex items-center justify-center w-9 h-9 rounded-full bg-white text-primary',
                  !youtube && 'pointer-events-none'
                )}
              >
                <img src={youtubeIcon} alt="youtube-icon" className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>

        <p className="text-center text-white text-xs mb-0">
          © Copyright 2023, Rong Vang Capital.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
