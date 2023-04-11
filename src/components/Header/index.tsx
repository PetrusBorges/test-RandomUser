import Logo from '../../assets/icons/randomUser.svg';
import MobileIconOpen from '../../assets/icons/mobileIconOpen.svg';
import MobileIconClose from '../../assets/icons/mobileIconClose.svg';

import { Link } from 'react-router-dom';

import { RenderIf } from '../../components/index';

import useHeader from '../../hooks/useHeader';

import {
  Container,
  Content,
  Navigate,
  NavigateMobile,
  DropdownMenuMobile
} from './styles';

const Header = () => {
  const {
    isOpen,
    handleToggleMobileOpen,
  } = useHeader();

  return (
    <Container>
      <Content>
        <Link to='/'>
          <img src={Logo} alt="Logo" />
          RandomUser.
        </Link>

        <Navigate>
          <Link to='/about'>
            Sobre a pagina
          </Link>
        </Navigate>

        <NavigateMobile
          type='button'
          onClick={handleToggleMobileOpen}
        >
          <RenderIf condition={!isOpen}>
            <img src={MobileIconOpen} alt="MobileIconOpen" />
          </RenderIf>

          <RenderIf condition={isOpen}>
            <img src={MobileIconClose} alt="MobileIconClose" />
          </RenderIf>
        </NavigateMobile>

        <RenderIf condition={isOpen}>
          <DropdownMenuMobile
            isVisible={isOpen}
          >
            <Link to='/about'>
              Sobre a pagina
            </Link>
          </DropdownMenuMobile>
        </RenderIf>
      </Content>
    </Container>
  );
};

export default Header;
