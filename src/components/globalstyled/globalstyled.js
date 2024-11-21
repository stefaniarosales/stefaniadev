import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`

html{
    overflow: hidden;
}

body {
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: 'helvetica', sans-serif;
    color: white;
    background-color: #292929;
    }
    main {
        display:flex;
        box-sizing: content-box;
    }
    a {
    text-decoration: none;
    }
    li {
    list-style: none;
    }
`

