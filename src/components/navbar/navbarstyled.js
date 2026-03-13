import styled, { keyframes } from 'styled-components';

const glow = keyframes`
    0%, 100% {
        filter: drop-shadow(0 0 5px rgba(190, 149, 196, 0.5));
    }
    50% {
        filter: drop-shadow(0 0 15px rgba(190, 149, 196, 0.8));
    }
`;

export const NavbarStyled = styled.nav`
    width: 200px;
    min-height: 100vh;
    background: 
        radial-gradient(ellipse at 20% 20%, rgba(159, 134, 192, 0.15) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 80%, rgba(224, 177, 203, 0.1) 0%, transparent 50%),
        linear-gradient(180deg, #0d0d12 0%, #16161e 100%);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    border-right: 1px solid var(--glass-border);
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6rem;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        min-height: 70px;
        flex-direction: row;
        justify-content: space-between;
        padding: 0.75rem 2rem;
        gap: 0;
    }
`

export const LogoStyled = styled.img`
    width: 35px;
    transition: all 0.3s ease;
    animation: ${glow} 3s ease-in-out infinite;
    
    &:hover {
        transform: scale(1.1);
    }
    
    @media (max-width: 768px) {
        width: 30px;
    }
`
export const ContainerLinksStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.2rem;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: row;
        gap: 1rem;
    }

    a {
        position: relative;
        color: var(--text-secondary);
        text-decoration: none;
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 1px;
        text-transform: uppercase;
        padding: 8px 0;
        transition: all 0.3s ease;

        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2px;
            background: var(--gradient-lavanda);
            transition: all 0.3s ease;
            transform: translateX(-50%);
            border-radius: 2px;
        }

        &:hover {
            color: var(--lavanda-light);
            
            &::before {
                width: 100%;
                box-shadow: var(--glow-lavanda);
            }
        }
    }

    a.active {
        color: var(--lavanda-light);
        font-weight: 600;

        &::before {
            width: 100%;
            box-shadow: var(--glow-lavanda);
        }
    }
`
