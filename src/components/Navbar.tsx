import { Button } from './Button';
// import { IoIosSunny, IoIosMoon } from 'react-icons/io';
// import { FaRegSun, FaRegMoon } from 'react-icons/fa';
import { BiSun, BiMoon } from 'react-icons/bi';

interface NavbarProps {
  handleToggle: () => void;
  theme: string;
}

const Navbar = ({ handleToggle, theme }: NavbarProps) => {
  return (
    <nav>
      <h1>cd</h1>
      {/* <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/'>About</a>
        </li>
        <li>
          <a href='/'>Portfolio</a>
        </li>
        <li>
          <a href='/'>Contact</a>
        </li>
      </ul> */}
      <Button onClick={handleToggle}>
        {theme === 'light' ? <BiSun /> : <BiMoon />}
      </Button>
    </nav>
  );
};
export default Navbar;
