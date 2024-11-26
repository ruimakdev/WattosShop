import { createGlobalStyle } from "styled-components";
import "@carbon/styles/css/styles.css";
import "./carbon-grid.scss";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'IBM Plex Sans', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://img.freepik.com/free-photo/space-galaxy-background_53876-93121.jpg?t=st=1732554743~exp=1732558343~hmac=cb73d458ce31eb4324369434c36c12a49a5cd6f85e5b43730dca0523ec45346c&w=1060') no-repeat center center fixed;
    background-size: cover;  }
  * {
    box-sizing: border-box;
  }
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    
  }

  #root {
  /* Card Colors */
  --color-border: #e0e0e0;
  --color-background-light: #f1f1f1f5;
  --color-title-background: #3b215630;
  --color-text-primary: #2f3d46;
  --color-text-secondary: #47565e;
  --color-input-background: #9491e638;
  --color-button-primary: black;
  --color-button-primary-hover: #333333;
  --color-button-text: yellow;
  --color-highlight: #ffcc00;
  --color-focus: #ffcc00;
  --color-disabled: #d3d3d3;

  /* Drawer Colors */
  --color-drawer-background: #ffffff;
  --color-drawer-shadow: rgba(0, 0, 0, 0.3);
  --color-drawer-backdrop: rgba(0, 0, 0, 0.5);
  --color-drawer-link: #2f3d46;
  --color-drawer-link-hover: #ffcc00;

  /* Modal Colors */
  --color-modal-background: #f4f4f4;
  --color-modal-shadow: rgba(0, 0, 0, 0.1);
  --color-modal-heading: #333333;
  --color-modal-text: #2f3d46;
  --color-modal-button: #4a324a;
  --color-modal-button-hover: #30588c;
  --color-modal-button-text: #ffffff;

  /* Navbar Colors */
  --color-navbar-background: #303062;
  --color-navbar-shadow: rgba(0, 0, 0, 0.1);
  --color-navbar-logo-text: #ffffff;
  --color-navbar-icon-background: #ffffff;
  --color-navbar-icon-hover: #d0d0d0;
}

  
  .modal-open {
  overflow: inherit;
}
`;
