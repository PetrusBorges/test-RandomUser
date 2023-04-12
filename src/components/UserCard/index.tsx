import React from 'react';

import { Button } from '../../components/index';

import { UserCardProps } from '../../types/userCard';

import { Container, Content, UserCardContainer } from './styles';

const UserCard: React.FC<UserCardProps> = ({
  userCard,
}) => {
  return (
    <Container>
      <Content>
        {userCard.map((userCard) => (
          <UserCardContainer
            key={userCard.login.uuid}
          >
            <img src={userCard.picture.large} alt="UserPhoto" />
            <p>{userCard.name.first}{userCard.name.last}</p>
            <small>@{userCard.login.username}</small>

            <Button
              type='button'
            >
              Ver detalhes
            </Button>
          </UserCardContainer>
        ))}
      </Content>
    </Container>
  );
};

export default UserCard;
