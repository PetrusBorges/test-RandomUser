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
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <ThemeButton
        selectedTheme={theme}
        onClick={handleToggleTheme}
      />
      <h1>opa</h1>
    </ThemeProvider>
  );
};

export default App;
