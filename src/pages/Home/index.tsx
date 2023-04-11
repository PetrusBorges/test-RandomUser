import PageHeaderUser from '../../assets/icons/pageHeaderUsers.svg';

import { PageHeader, SvgElipse } from '../../components';

const Home = () => {
  return (
    <>
      <SvgElipse />
      <PageHeader
        logoHeader={PageHeaderUser}
        title='Usuários'
        description='Veja todos os usuários cadastrados!'
      />
    </>
  );
};

export default Home;
