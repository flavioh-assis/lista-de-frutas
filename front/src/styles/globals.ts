import { createGlobalStyle } from 'styled-components';
// import colors from 'resources/colors';
// import fonts from 'resources/fonts';

export default createGlobalStyle`
  body {
    background-image: url('https://www.lambda3.com.br/wp-content/uploads/2017/02/bg-site.png');
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

/* color: ${colors.text}; */

/* font-family: Roboto; */
/* @font-face {
      font-family: "SF Reg";
      src: url(
        'https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff'
      );
    } */

/* @font-face {
      font-family: "SF Bold";
      src: url(
        'https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-bold-webfont.woff'
      );
    } */

