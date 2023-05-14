import { useEffect, useState } from 'react';

import { IconSearch } from '@tabler/icons-react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import routes from '@/config/constants/routes';

import Logo from '@/components/shared/Logo';

import { useDisclosure } from '@mantine/hooks';
import { Burger, Drawer } from '@mantine/core';
import clsx from 'clsx';

const Header = () => {
  const [showServices, setShowServices] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [drawerOpened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (pathname.includes('services')) {
      setShowServices(true);
    } else {
      setShowServices(false);
    }
  }, [pathname]);

  return (
    <header className="w-full bg-primary fixed top-0 right-0 left-0 z-50">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <Logo width={240} height={56} />

          <div className="hidden lg:flex items-center gap-6">
            {routes.map((route: { name: string; path: string; children: { name: string; path: string }[] }) => (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  console.log(route.name);
                  if (route.children.length === 0) {
                    navigate(route.path);
                  }
                  if (route.path === '/services') {
                    setShowServices(true);
                  }
                }}
                key={route.path}
                className="relative cursor-pointer"
              >
                <span className="uppercase text-white text-base font-medium">{route.name}</span>
                {(route.path === '/' && pathname === '/') || (route.path !== '/' && pathname.includes(route.path)) ? (
                  <div className="w-full h-[2px] bg-white"></div>
                ) : null}
                {route.children && showServices && (
                  <div className="absolute top-full left-0 flex gap-2 w-max translate-x-[-40%]">
                    {route.children.map((child: { path: string; name: string }) => (
                      <Link to={child.path} key={child.path} className="no-underline">
                        <span className="uppercase text-white text-sm font-medium">{child.name}</span>
                        {(child.path === '/' && pathname === '/') ||
                        (child.path !== '/' && pathname.includes(child.path)) ? (
                          <div className="w-full h-[2px] bg-white"></div>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <IconSearch className="text-white text-xl leading-[1] cursor-pointer hover:font-bold" />
          </div>

          <div className="lg:hidden">
            <Burger opened={drawerOpened} onClick={open} size={'md'} color="white" />
          </div>

          <Drawer opened={drawerOpened} onClose={close} size="xs" padding="xl" position="right">
            <div className="flex flex-col gap-6">
              {routes.map((route: { name: string; path: string; children: { name: string; path: string }[] }) => (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    if (route.children.length === 0) {
                      navigate(route.path);
                    }
                    if (route.path === '/services') {
                      setShowServices(true);
                    }
                  }}
                  key={route.path}
                  className="relative cursor-pointer"
                >
                  <span className="uppercase text-base font-medium">{route.name}</span>
                  {(route.path === '/' && pathname === '/') || (route.path !== '/' && pathname.includes(route.path)) ? (
                    <div className="w-24 h-[2px] bg-primary"></div>
                  ) : null}
                  {route.children && showServices && (
                    <div className="flex flex-col gap-2 pt-3">
                      {route.children.map((child: { path: string; name: string }) => (
                        <Link to={child.path} key={child.path} className="no-underline text-black px-2">
                          <span
                            className={clsx(
                              'uppercase text-sm font-medium',
                              (child.path === '/' && pathname === '/') ||
                                (child.path !== '/' && pathname.includes(child.path) && 'text-primary')
                            )}
                          >
                            {child.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header;
