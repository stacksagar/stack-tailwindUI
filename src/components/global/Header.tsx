import GithubIcon from 'svgs/GithubIcon';
import NotificationIcon from 'svgs/NotificationIcon';
import DarkToggleIcon from 'svgs/DarkToggleIcon';
import MenuIcon from 'svgs/MenuIcon';
import Link from 'next/link';

interface HeaderProps {
  isDesignsPage?: boolean;
  toggleLeftBar?: () => void;
}

export default function Header({ isDesignsPage, toggleLeftBar }: HeaderProps) {
  return (
    <header
      style={{background:'#222222'}}
      className={`w-full h-14 sm:px-4 px-3 flex items-center z-40 ${
        isDesignsPage ? 'lg:justify-end justify-between' : 'justify-between'
      } sticky top-0 left-0`}
    >
      {isDesignsPage ? (
        <ListItem className="lg:hidden">
          <button onClick={toggleLeftBar}>
            <MenuIcon className="text-white" />
          </button>
        </ListItem>
      ) : (
        <Link href="/">LOGO</Link>
      )}

      <nav>
        <ul className="flex items-center">
          {isDesignsPage ? (
            <input
              className={`bg-gray-900 outline-none text-white p-1.5 px-3 rounded w-48 sm:block hidden`}
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
          <ListItem>
            <NotificationIcon fill="#ffffff" />
          </ListItem>
          <ListItem>
            <GithubIcon fill="#ffffff" />
          </ListItem>
        </ul>
      </nav>
    </header>
  );
}

function ListItem({
  children,
  className,
  ...props
}: {
  children: any;
  className?: string;
}) {
  return (
    <li
      {...props}
      className={
        `cursor-pointer ml-3 w-12 h-12 rounded-full hover:bg-gray-800 flex items-center justify-center ` +
        className
      }
    >
      {children}
    </li>
  );
}
