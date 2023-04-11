import React from 'react';

import { Container } from './styles';

interface ButtonProps {
  children: React.ReactNode;
  type: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  onClick,
  disabled,
}) => {
  return (
    <Container
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

export default Button;
