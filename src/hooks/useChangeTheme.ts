import { useState, useCallback, useEffect, useMemo } from 'react';

import { Theme } from '../assets/styles';

const useChangeTheme = () => {
  type ThemeKeys = 'dark' | 'light';

  const storedTheme = localStorage.getItem('theme');
  const initialTheme: ThemeKeys = storedTheme ? JSON.parse(storedTheme) : 'light';

  const [theme, setTheme] = useState<ThemeKeys>(initialTheme);

  const currentTheme = useMemo(() => {
    return Theme[theme] || Theme.dark;
  }, [theme]);

  const handleToggleTheme = useCallback(() => {
    setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark');
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return {
    theme,
    currentTheme,
    handleToggleTheme,
  };
};

export default useChangeTheme;
