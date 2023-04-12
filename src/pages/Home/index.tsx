import PageHeaderUser from '../../assets/icons/pageHeaderUsers.svg';

import { PageHeader, SvgElipse, UserCard } from '../../components';

import useHome from '../../hooks/useHome';

const Home = () => {
  const {
    isLoading,
    userCard,
    handleSelectChange,
  } = useHome();

  return (
    <>
      <SvgElipse />
      <PageHeader
        logoHeader={PageHeaderUser}
        title='Usuários'
        description='Veja todos os usuários cadastrados!'
        onChange={handleSelectChange}
      />

      <UserCard
        userCard={userCard}
        isLoading={isLoading}
      />
    </>
  );
};

export default Home;
