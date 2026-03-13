import styled from 'styled-components'

export const NavbarStyled = styled.nav`
    width: 200px;
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
        height: 140px; 
        justify-content: center;
        gap: 1rem;
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

    a {
        position: relative;
        color: #b7b7b7;
        text-decoration: none;
        font-size: 13px;

        &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -4px;
            width: 0;
            height: 1px;
            background-color: #9F86C0;
            transition: width 0.3s ease-in-out;
        }
    }

        a.active {
            color: #9F86C0;
            font-weight: bold;

        &::after {
            width: 100%;
            }
        }

        @media (max-width: 768px) {
            flex-direction: row;
            padding: 5px 0;
        }
`