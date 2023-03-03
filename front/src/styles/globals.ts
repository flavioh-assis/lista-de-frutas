import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    ::-webkit-scrollbar {
      width: 10px; 
    }

    ::-webkit-scrollbar-thumb {
      background-color: #aaa;
      border-radius: 20px;
      border: 2px solid white;
    }
  }

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
