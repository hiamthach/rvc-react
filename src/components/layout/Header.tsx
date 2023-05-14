import { IconSearch } from '@tabler/icons-react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import routes from '@/config/constants/routes';

import Logo from '@/components/shared/Logo';

const Header = () => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <header className="w-full bg-primary fixed top-0 right-0 left-0 z-50">
      <div className="container py-3">
        <div className="flex justify-between items-center">
          <Logo width={200} height={48} />

          <div className="flex items-center gap-5">
            {routes.map((route: any) => (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  if (route.children.length === 0) {
                    navigate(route.path);
                  }
                }}
                key={route.path}
                className="relative cursor-pointer"
              >
                <span className="uppercase text-white text-base font-medium">{route.name}</span>
                {(route.path === '/' && pathname === '/') || (route.path !== '/' && pathname.includes(route.path)) ? <div className="w-full h-[2px] bg-white"></div> : null}
                {route.children && (
                  <div className="absolute top-full left-0 flex gap-2 w-max translate-x-[-40%]">
                    {route.children.map((child: any) => (
                      <Link to={child.path} key={child.path} className="no-underline">
                        <span className="uppercase text-white text-sm font-medium">{child.name}</span>
                        {(child.path === '/' && pathname === '/') || (child.path !== '/' && pathname.includes(child.path)) ? <div className="w-full h-[2px] bg-white"></div> : null}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <IconSearch className="text-white text-xl leading-[1] cursor-pointer hover:font-bold" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
