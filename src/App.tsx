import { Button } from './components/Button';
import Navbar from './components/Navbar';
import useLocalStorage from './lib/useLocalStorage';

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  function handleToggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className='light-dark-mode' data-theme={theme}>
      <Navbar handleToggle={handleToggleTheme} theme={theme} />
      <main className='container'>
        <h1>hello there</h1>
        <Button variant='primary'>Click Me</Button>
        <br />
        <br />
        <Button variant='secondary'>No...click me!</Button>
      </main>
    </div>
  );
};
export default App;
// https://react-aria.adobe.com/Button
