import React from 'react';

import { Container } from './styles';

import Light from '../../assets/icons/light.svg';
import Dark from '../../assets/icons/dark.svg';

import { RenderIf } from '../../components/index';

interface ThemeButtonProps {
  selectedTheme: string;
  onClick: () => void;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({
  selectedTheme,
  onClick,
}) => {
  return (
    <Container
      onClick={onClick}
    >
      <RenderIf condition={selectedTheme === 'dark'}>
        <img src={Dark} alt="DarkLogo" />
      </RenderIf>

      <RenderIf condition={selectedTheme === 'light'}>
        <img src={Light} alt="LightLogo" />
      </RenderIf>
    </Container>
  );
};

export default ThemeButton;
