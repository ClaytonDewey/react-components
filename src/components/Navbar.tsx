import { Button } from './Button';
import { Icon } from '../svg';

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
        {theme === 'dark' ? <Icon name='sun' /> : <Icon name='moon' />}
      </Button>
    </nav>
  );
};
export default Navbar;
