import styled from 'styled-components'

export const NavbarStyled = styled.nav`
    position: fixed;
    left: 30px;
    width: 200px;
    height: 100vh;
    backdrop-filter: blur(8px) saturate(180%);
    -webkit-backdrop-filter: blur(8px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.35);
    z-index: 1; 
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6rem;

    @media (max-width: 768px) {
        position: static; 
        left: auto;
        width: 100%;
        padding: 1rem;
        height: auto; 
        justify-content: center; /* Centra los elementos en filas múltiples */
        gap: 1rem; /* Reduce el espacio entre los elementos */
    }
`

export const LogoStyled = styled.img`
    width: 30px;
`
export const ContainerLinksStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    padding: 15px;

    a {
        color: #b7b7b7;
    }
    a.active {
        color: #9F86C0;
        font-weight: bold;
    }

    @media (max-width: 768px) {
        flex-direction: row; 
    }
`