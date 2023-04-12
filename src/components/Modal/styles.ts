import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const scaleIn = keyframes`
  from {
    transform:scale(0);
  }
  to {
    transform:scale(1);
  }
`;

const scaleOut = keyframes`
  from {
    transform:scale(1);
  }
  to {
    transform:scale(0);
  }
`;

interface AnimationProps {
  isVisible: boolean;
}

export const Overlay = styled.div<AnimationProps>`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  backdrop-filter: blur(4px);
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
  animation: ${fadeIn} 0.3s;
  padding: 0 16px;

  ${({ isVisible }) => isVisible && css`
    animation: ${fadeOut} 0.3s forwards;
  `}
`;

export const Container = styled.div<AnimationProps>`
  width: 100%;
  max-width: 450px;
  background-color: ${({ theme }) => theme.cardBackground};
  border: 1px solid ${({ theme }) => theme.cardBorderColor};
  padding: 20px;
  border-radius: 16px;
  animation: ${scaleIn} 0.3s;

  ${({ isVisible }) => isVisible && css`
    animation: ${scaleOut} 0.3s forwards;
  `}
`;
