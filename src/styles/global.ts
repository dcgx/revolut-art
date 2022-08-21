import { createGlobalStyle } from 'styled-components'
import variables from './variables'

const GlobalStyle = createGlobalStyle`

    * {
    }
    html {
        
    }
    body {
        font-family: 'Poppins', sans-serif;
    }
    h1, h2, h3, h4, h5, h6, span {
        font-family: 'Poppins', sans-serif;
        color: #000;
    }
    h1 {
        font-size: 2rem;
        font-weight: 700 !important;
    }
    h6{
        font-size: 1.2rem;
        font-weight: 500;
    }
    time {
        font-size: 1rem;
        font-weight: 300;
    }

    .relative {
        position: relative !important;
    }
    ${variables}
`

export default GlobalStyle