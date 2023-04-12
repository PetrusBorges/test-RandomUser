import React, { useState } from 'react';

import { Button } from '../../components/index';

import { UserCardProps } from '../../types/userCard';

import { formatBirthday } from '../../utils/formatBirthday ';

import {
  Container,
  Content,
  UserCardContainer,
  UserCardContainerInfo,
  UserInfoContainer,
} from './styles';

const UserCard: React.FC<UserCardProps> = ({
  userCard,
}) => {
  const [click, setClick] = useState(userCard.map(() => false));

  const handleCardClick = (index: number) => {
    setClick((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <Container>
      <Content>
        {userCard.map((userCard, index) => (
          <UserCardContainer
            key={userCard.login.uuid}
          >
            <img src={userCard.picture.large} alt="UserPhoto" />
            <p>{userCard.name.first}{userCard.name.last}</p>
            <small>@{userCard.login.username}</small>

            <Button
              type='button'
              onClick={() => handleCardClick(index)}
            >
              Ver detalhes
            </Button>

            {click[index] && (
              <UserCardContainerInfo>
                <UserInfoContainer>
                  <small>Email:</small>
                  <p>{userCard.email}</p>
                </UserInfoContainer>
                <UserInfoContainer>
                  <small>Aniversário:</small>
                  <p>{formatBirthday(userCard.dob.date)}</p>
                </UserInfoContainer>
                <UserInfoContainer>
                  <small>Endereço:</small>
                  <p>{userCard.location.street.number} {userCard.location.street.name}</p>
                </UserInfoContainer>
                <UserInfoContainer>
                  <small>Telefone:</small>
                  <p>{userCard.phone}</p>
                </UserInfoContainer>
                <UserInfoContainer>
                  <small>Senha:</small>
                  <p>{userCard.login.password}</p>
                </UserInfoContainer>
              </UserCardContainerInfo>
            )}
          </UserCardContainer>
        ))}
      </Content>
    </Container>
  );
};

export default UserCard;
