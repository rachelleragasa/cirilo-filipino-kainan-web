import { createGlobalStyle } from "styled-components"
import normalize from "./normalize"
import { semplicitaProLight } from "../styles"

const GlobalStyles = createGlobalStyle`
	${normalize}
	
	html, body {
		height: 100%
	}

	body {
		display: flex;
  		flex-direction: column;
		${semplicitaProLight}
		font-size: 18px;
	}

	main {
		flex: 1 0 auto;
	  }

	  footer {
		flex-shrink: 0;
	  }
`

export default GlobalStyles
