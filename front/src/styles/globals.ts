import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  #root {
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  * {
		padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
		font-family: 'Roboto';
  }
`;
