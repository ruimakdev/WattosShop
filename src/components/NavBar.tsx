import styled from "styled-components";
import { Menu as MenuIcon } from "@carbon/icons-react";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: var(--color-navbar-background);
  box-shadow: 0 4px 8px var(--color-navbar-shadow);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1000;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const LogoText = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: var(--color-navbar-logo-text);
`;

const MenuIconStyled = styled(MenuIcon)`
  background-color: var(--color-navbar-icon-background);
  cursor: pointer;

  &:hover {
    background-color: var(--color-navbar-icon-hover);
  }
`;

interface NavbarProps {
  toggleDrawer: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDrawer }) => (
  <NavbarContainer>
    <LogoContainer>
      <LogoImage
        src="https://static.wikia.nocookie.net/muc/images/4/46/Watto_ugli.png"
        alt="Watto's Junkshop logo"
      />
      <LogoText>Watto's Junkshop</LogoText>
    </LogoContainer>
    <MenuIconStyled
      aria-label="Open navigation menu"
      onClick={toggleDrawer}
    />
  </NavbarContainer>
);

export default Navbar;
