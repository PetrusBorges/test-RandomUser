import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  margin-bottom: 50px;
`;

export const Content = styled.div`
  gap: 20px;
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const UserCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 280px;
  background-color: ${({ theme }) => theme.cardBackground};
  border: 1px solid ${({ theme }) => theme.cardBorderColor};
  padding: 20px;
  border-radius: 18px;
  transition: all 0.3s linear;
  box-shadow: 0px 202px 343px rgba(35, 33, 38, 0.05), 0px 84.3908px 143.297px rgba(35, 33, 38, 0.0279067), 0px 45.1193px 76.6135px rgba(35, 33, 38, 0.0166157), 0px 25.2935px 42.9489px rgba(35, 33, 38, 0.00924013), 0px 13.4332px 22.8099px rgba(35, 33, 38, 0.00436612), 0px 5.58986px 9.49169px rgba(35, 33, 38, 0.00139357);


  &:hover {
    box-shadow: 0px 72px 104px rgba(52, 195, 227, 0.09), 0px 21.7059px 31.353px rgba(52, 195, 227, 0.058643), 0px 9.01552px 13.0224px rgba(52, 195, 227, 0.045), 0px 3.26074px 4.70995px rgba(52, 195, 227, 0.031357);
  }

  > img {
    width: 110px;
    border-radius: 50%;
    padding: 5px;
    border: 3px solid ${({ theme }) => theme.color.blueLight};
    margin-bottom: 8px;
  }

  > p {
    color: ${({ theme }) => theme.textColor};
  }

  > small {
    color: ${({ theme }) => theme.color.blueLight};
    margin-bottom: 18px;
  }
`;

export const UserCardContainerInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-top: 18px;
  gap: 8px;
  color: ${({ theme }) => theme.textColor};
`;

export const UserInfoContainer = styled.div`
  > small {
    color: ${({ theme }) => theme.color.blueLight};
  }

  > p {
    font-size: 14px;
  }
`;
