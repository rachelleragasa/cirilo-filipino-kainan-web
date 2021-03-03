import { createGlobalStyle } from "styled-components"
import normalize from "./normalize"
import {
  semplicitaProSemiBold,
  semplicitaProBold,
  semplicitaProLight,
  semplicitaProMedium,
  above,
} from "../styles"

const GlobalStyles = createGlobalStyle`
	${normalize};
	
	html, body {
		height: 100%
	}

	body {
		display: flex;
  		flex-direction: column;
		${semplicitaProLight};
		font-size: 18px;
		line-height: 30px;
		background-color: #fff;
	}

	main {
		flex: 1 0 auto;
	}

	footer {
		flex-shrink: 0;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	h1, h2, h3, h4, h5, h6 {
		text-transform: uppercase;
		letter-spacing: 2px;
	}

	h1 {
		${semplicitaProBold};
		font-size: 35px;
		margin: 0 0 20px 0;

		${above.tabletLarge`
			font-size: 50px;
			margin: 0 0 40px 0;
		`}
	}

	h2 {
		${semplicitaProBold};
		font-size: 33px;
		margin: 0 0 20px 0;

		${above.tabletLarge`
			font-size: 34px;
			margin: 0 0 40px 0;
		`}
	}

	h3 {
		${semplicitaProSemiBold};
		font-size: 36px;
		margin: 0 0 15px 0;

		${above.tabletLarge`
			font-size: 40px;
		`}
	}

	h4 {
		${semplicitaProMedium};
		font-size: 25px;
		margin: 0 0 15px 0;

		${above.tabletLarge`
			font-size: 28px;
		`}
	}

	h5 {
		${semplicitaProMedium};
		font-size: 20px;
		margin: 0 0 15px 0;

		${above.tabletLarge`
			font-size: 24px;
		`}
	}

	h6 {
		${semplicitaProMedium};
		font-size: 18px;
		margin: 0 0 15px 0;

		${above.tabletLarge`
			font-size: 22px;
		`}
	}

	a {
		text-decoration: none;
	}
	
`

export default GlobalStyles
