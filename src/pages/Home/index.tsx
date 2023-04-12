import PageHeaderUser from '../../assets/icons/pageHeaderUsers.svg';

import { PageHeader, SvgElipse, UserCard } from '../../components';

import useHome from '../../hooks/useHome';

const Home = () => {
  const {
    userCard,
  } = useHome();

  return (
    <>
      <SvgElipse />
      <PageHeader
        logoHeader={PageHeaderUser}
        title='Usuários'
        description='Veja todos os usuários cadastrados!'
      />

      <UserCard
        userCard={userCard}
      />
    </>
  );
};

export default Home;
