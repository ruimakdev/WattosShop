import React from "react";
import styled from "styled-components";
import { SideNav, SideNavItems, SideNavLink } from "@carbon/react";

const DrawerContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: var(--color-drawer-background);
  box-shadow: 2px 0 5px var(--color-drawer-shadow);
  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-100%)"};
  z-index: 1001;
`;

const Backdrop = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-drawer-backdrop);
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 1000;
`;

const StyledSideNav = styled(SideNav)`
  width: 100%;
  .cds--side-nav__link {
    color: var(--color-drawer-link);
  }

  .cds--side-nav__link:hover {
    color: var(--color-drawer-link-hover);
  }
`;

interface DrawerProps {
  isOpen: boolean;
  closeDrawer: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, closeDrawer }) => (
  <>
    <Backdrop
      isOpen={isOpen}
      onClick={closeDrawer}
      aria-hidden={!isOpen}
      aria-label={isOpen ? "Close navigation menu" : undefined}
    />
    <DrawerContainer
      isOpen={isOpen}
      aria-hidden={!isOpen}
      aria-label="Navigation drawer"
    >
      <StyledSideNav aria-label="Main navigation menu" isFixedNav expanded>
        <SideNavItems>
          {/* Please let me know if you would like me to implement these with real routes */}
          <SideNavLink href="#" aria-label="Navigate to Starships">
            Starships
          </SideNavLink>
          <SideNavLink href="#" aria-label="Navigate to People">
            People
          </SideNavLink>
          <SideNavLink href="#" aria-label="Navigate to Planets">
            Planets
          </SideNavLink>
          <SideNavLink href="#" aria-label="Navigate to Species">
            Species
          </SideNavLink>
          <SideNavLink href="#" aria-label="Navigate to Vehicles">
            Vehicles
          </SideNavLink>
        </SideNavItems>
      </StyledSideNav>
    </DrawerContainer>
  </>
);

export default Drawer;
