import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`


html,body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    height: 100vh;
    font-family: 'helvetica', sans-serif;
    color: white;
    background-color: #262626;

    @media (max-width: 768px){
        overflow: auto;
    }
    }
    main {
        box-sizing: content-box;
    }
    a {
    text-decoration: none;
    }
    li {
    list-style: none;
    }
`

