import styled from 'styled-components'

export const NavbarStyled = styled.nav`
    position: fixed;
    left: 30px;
    width: 110px;
    height: 100vh;
    backdrop-filter: blur(3px) saturate(113%);
    -webkit-backdrop-filter: blur(3px) saturate(113%);
    background-color: rgba(255, 255, 255, 0.33);
    z-index: 1; 
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6rem;
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
`