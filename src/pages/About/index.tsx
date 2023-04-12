import PageHeaderAbout from '../../assets/icons/pageHeaderAbout.svg';

import { PageHeader, AboutInfo } from '../../components';

const About = () => {
  return (
    <>
      <PageHeader
        logoHeader={PageHeaderAbout}
        title='Informações'
        description='Veja um pouco mais sobre a página!'
      />

      <AboutInfo />
    </>
  );
};

export default About;
