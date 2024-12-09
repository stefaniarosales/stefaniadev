import styled from 'styled-components'

export const NavbarStyled = styled.nav`
    position: fixed;
    left: 30px;
    width: 210px;
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
        flex-direction: row; 
        justify-content: space-around; 
    }
`

export const LogoStyled = styled.img`
    width: 40px;
`
export const ContainerLinksStyled = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
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