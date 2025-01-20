import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

export const GlobalStyled = createGlobalStyle`


html,body {
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow: hidden;
    font-family: 'helvetica', sans-serif;
    color: white;
    background-color: #262626;

        @media (max-width: 768px) {
            overflow: auto; /* Activa el scroll */
            overflow-x: hidden;
        }
    }
    main {
        box-sizing: content-box;
        overflow-y: auto;
    }
    a {
    text-decoration: none;
    }
    li {
    list-style: none;
    }
    
`
export const ContainerGeneral = styled.div`
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
