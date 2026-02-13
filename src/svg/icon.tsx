import { IconMoon, IconSun } from '.'

const Icon = ({ name }: { name: string}) => {
  switch (name) {
    case 'moon':
      return <IconMoon />;
    case 'sun':
      return <IconSun />;
    default:
      return null;
  }
}

export default Icon;