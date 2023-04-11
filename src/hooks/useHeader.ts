import { useState, useCallback } from 'react';

const useHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMobileOpen = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return {
    isOpen,
    handleToggleMobileOpen,
  };
};

export default useHeader;
