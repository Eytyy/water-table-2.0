import { createGlobalStyle } from "styled-components";

import { fonts } from "./vars";
import TitleFont from "../fonts/ZeitungMonoPro-Bold.woff2";
import BodyFont from "../fonts/ZeitungMonoPro-Regular.woff2";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: ${fonts.title};
    src: url(${TitleFont}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: ${fonts.body};
    src: url(${BodyFont}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
	}
	
  *, *:before, *:after {
    box-sizing: inherit;
	}
	
  body {
		font-family:${fonts.body};
		color: #FFF;
		background: #000;
    padding: 0;
    margin: 0;
	}
	

  h1, h2, h3, h4 {
    font-family:${fonts.title};
    font-weight: normal;
    margin: 0;
    padding: 0;
	}
	
	h1 {
		font-size: 16px;
		margin-bottom: 20px;
	}
`;

export default GlobalStyles;
