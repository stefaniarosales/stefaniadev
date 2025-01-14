import styled from 'styled-components'

export const NavbarStyled = styled.nav`
    width: 250px;
    height: 100vh;
    backdrop-filter: blur(8px) saturate(180%);
    -webkit-backdrop-filter: blur(8px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.35);
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6rem;

    @media (max-width: 768px) {
        width: 100%;
        padding: 1rem;
        height: 100px; 
        justify-content: center;
        gap: 0.5rem;
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