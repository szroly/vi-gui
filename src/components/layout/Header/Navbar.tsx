'use client';
import { useEffect, useState } from 'react';
import { ReactNode } from 'react';
import CloseIcon from '@/components/icons/Close';
import MenuIcon from '@/components/icons/Menu';
import { FaCar } from 'react-icons/fa';
import { SiMockserviceworker } from 'react-icons/si';
import { RiToolsFill } from 'react-icons/ri';
import { MdMedicalServices } from 'react-icons/md';
import { TiDocumentText } from 'react-icons/ti';
import { IoLogOutOutline } from 'react-icons/io5';
import { MdBrokenImage } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from 'next/navigation';



const menus: Array<{
  name: string;
  href: string;
  icon?: ReactNode | null | undefined;
  iconPosition?: 'left' | 'right';
}> = [
  {
    name: 'VEHICLES',
    href: '/vehicles',
    icon: <FaCar />,
    iconPosition: 'left',
  },
  {
    name: 'INSURANCES',
    href: '/insurances',
    icon: <TiDocumentText />,
    iconPosition: 'left',
  },
  {
    name: 'EQUIPMENTS',
    href: '/equipments',
    icon: <SiMockserviceworker />,
    iconPosition: 'left',
  },
  {
    name: 'SERVICES',
    href: '/services',
    icon: <RiToolsFill />,
    iconPosition: 'left',
  },
  {
    name: 'FIRST AID',
    href: '/first-aid',
    icon: <MdMedicalServices />,
    iconPosition: 'left',
  },
  {
    name: 'FAULTS',
    href: '/faults',
    icon: <MdBrokenImage />,
    iconPosition: 'left',
  },
];

const Navbar: React.FC<{
  menus?: Array<{
    name: string;
    href: string;
    icon?: ReactNode | null | undefined;
    iconPosition?: 'left' | 'right';
  }>;
}> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

 

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);

  const { handleLogout, token } = useAuth();

  

  const handleLogoutClick = () => {
    if( token ){
      handleLogout(
        token,
        () => {
        console.log('Logout successful');
        router.push('/login');
        },
        (error) => {
        console.error('Logout failed', error);
        }
      );
    }
  }

  return (
    <div className="flex flex-col mb-6 bg-[var(--domiz-slate)]">
      <div className=" bg-neutrals-1000 content-center px-4 overflow-visible">
        <div className="mx-auto h-full max-w-[1400px]">
          <div className="flex text-sm font-bold justify-between h-full">
            <div className="flex gap-8 items-center text-base-white">
              <img
                src="/icons/logo/cover.png"
                alt="Logo"
                // className="h-20 w-auto"
                width={300}
                height={100}
              />
            </div>
            <div className="lg:hidden flex items-center text-base-white z-[60]">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <CloseIcon size={32} style={{ color: 'white' }} />
                ) : (
                  <MenuIcon size={32} style={{ color: 'white' }} />
                )}
              </button>
            </div>
            <div className="lg:flex hidden text-base gap-8 text-white items-center">
              {menus.map((menu, index) => (
                <div
                  key={index}
                  className="flex flex-col relative group h-full justify-center cursor-pointer "
                >
                  <p className="text-white hover:text-[var(--kiwi)] group-hover:text-primary-500 transition-colors duration-300 flex items-center justify-center">
                    <span className="flex items-center justify-center">
                      {menu.icon && <span className="mr-2">{menu.icon}</span>}
                    </span>
                    <a href={menu.href}> {menu.name} </a>
                  </p>
                </div>
              ))}
             
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger 
                    className="bg-white hover:bg-blue-950 rounded-xl p-2 text-[var(--domiz-slate)] hover:text-white group-hover:text-primary-500 transition-colors duration-300 flex items-center justify-center cursor-pointer"
                    onClick={handleLogoutClick} // Add onClick here
                    > 
                    <IoLogOutOutline  /> 
                    </TooltipTrigger>
                    <TooltipContent>
                    <p>
                      Log out
                    </p>
                    </TooltipContent>
                  </Tooltip>
                  </TooltipProvider>
              
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-50 ${
          isMenuOpen ? 'visible' : 'invisible'
        } bg-[var(--domiz-slate)]`}
      >
        <div
          className={`relative flex flex-col gap-8 h-full bg-base-white dark:bg-base-black ${
            isMenuOpen ? 'flex' : 'hidden'
          }`}
        >
          <div className="flex gap-8 mx-4 mt-10 dark:text-base justify-between items-center text-font-sm capitalize font-medium text-base-black"></div>
          <div className="flex flex-col gap-4 mx-auto z-50 items-start mt-20 text-2xl">
            {menus.map((menu, index) => (

              <a key={index} href={menu.href} className='flex justify-start items-start mt-3.5'>
                <span className="flex items-center justify-center text-white">
                  {menu.icon && <span className="mr-2">{menu.icon}</span>}
                </span>
                <button className="text-white">{menu.name}</button>
              </a>
            ))}
            <button 
              className='flex justify-center items-center text-white'
              onClick={ handleLogoutClick }
              >
              <IoLogOutOutline className='mr-2' />
              LOG OUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
