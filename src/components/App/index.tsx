import { BrowserRouter } from 'react-router-dom';
import ReactRoutes from '../../routes';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/global';

import { ThemeButton } from '../../components/index';

import useChangeTheme from '../../hooks/useChangeTheme';

const App = () => {
  const {
    theme,
    currentTheme,
    handleToggleTheme,
  } = useChangeTheme();

  return (
    <BrowserRouter>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <ThemeButton
          selectedTheme={theme}
          onClick={handleToggleTheme}
        />
        <ReactRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
