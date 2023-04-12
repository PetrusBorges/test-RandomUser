import styled from 'styled-components';

export const Container = styled.button`
  width: 140px;
  height: 52px;
  border: none;
  padding: 0 16px;
  gap: 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s linear;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  color: ${({ theme }) => theme.textColor};
  border: 1px solid ${({ theme }) => theme.color.blueLight};
  background-color: transparent;
  border-radius: 4px;

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.blueDark};
  }

  &[disabled] {
    cursor: not-allowed !important;
    background: gray !important;
  }
`;
