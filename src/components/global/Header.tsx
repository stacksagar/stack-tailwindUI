import GithubIcon from 'src/svgs/GithubIcon';
import NotificationIcon from 'src/svgs/NotificationIcon';
import MenuIcon from 'src/svgs/MenuIcon';
import Link from 'next/link';
import { MainContext } from 'context/mainContext';
import { useContext } from 'react';
import { MainContextTypes } from 'src/types/createContextTypes';
import Image from 'next/image';
import { useRouter } from 'next/router';
import UIIcon from 'src/svgs/UIIcon';

interface HeaderProps {
  isDesignsPage?: boolean;
}

export default function Header({ isDesignsPage }: HeaderProps) {
  return (
    <header
      className={`bgSidebar w-full h-14 sm:px-4 px-3 z-40 sticky top-0 left-0 ${
        isDesignsPage && `2xl:bg-transparent`
      } `}
    >
      <div className="flexjbic h-full 2xl:rounded 2xl:px-5 2xl:max-w-screen-2xl 2xl:mx-auto">
        <HeaderLeft isDesignsPage={isDesignsPage} />

        <nav>
          <ul className="flex items-center">
            {isDesignsPage ? (
              <input
                style={{ background: '#00000033' }}
                className={`outline-none text-white p-1.5 px-3 rounded w-48 sm:block hidden`}
                type="search"
                placeholder="Search..."
              />
            ) : (
              <li className="text-blue-200 hover:underline text-lg font-semibold">
                <Link href="/designs"> Designs & UI </Link>
              </li>
            )}

            {/* <ListItem>
              <DarkToggleIcon
                className="text-white"
                darkmode={false}
                fill="#ffffff"
              /> 
            </ListItem> */}
            <ListItem className="hidden sm:flex">
              <NotificationIcon fill="#ffffff" />
            </ListItem>
            <ListItem className="hidden sm:flex">
              <GithubIcon fill="#ffffff" />
            </ListItem>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function HeaderLeft({ isDesignsPage }) {
  const router = useRouter();
  const { dispatch } = useContext<MainContextTypes>(MainContext);

  return (
    <div className="flex space-x-3">
      {isDesignsPage && (
        <ListItem
          className="lg:hidden block"
          onClick={() => dispatch({ type: 'open_sidebar' })}
        >
          <button>
            <MenuIcon className="text-white" />
          </button>
        </ListItem>
      )}

      <div
        onClick={() => router.push('/')}
        className="items-center cursor-pointer relative text-white text-lg flex italic pl-2"
      >
        <b className="prime text-gray-300">stack</b>_tai
        <b className="font-extrabold">l</b>wind
        <UIIcon className="absolute -bottom-0 -right-6 animate-bounce m-auto" />
      </div>
    </div>
  );
}

function ListItem({
  children,
  className,
  onClick,
  ...props
}: {
  children?: any;
  className?: string;
  onClick?: any;
}) {
  return (
    <li
      {...props}
      onClick={onClick}
      className={
        `cursor-pointer ml-3 w-12 h-12 rounded-full hover:bg-gray-800 flex items-center justify-center ` +
        className
      }
    >
      {children}
    </li>
  );
}
