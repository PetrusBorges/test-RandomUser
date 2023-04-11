import styled from 'styled-components';

export const Container = styled.button`
  line-height: 0;
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: 46px;
  height: 46px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.blueLight};
  transition: all 0.3s linear;

  &:hover {
    scale: 1.15;
  }
`;
