import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const Container = styled.section`
    width: 100%;
    padding: 2rem 1rem 0 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1050px;
    @media (max-width: 768px) {
        padding: 50px 0 0 0;
        justify-content: flex-start;
    }
`

export const ContainerImgData = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 3rem;
    padding: 2rem 0;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        width: unset;
    }
`

export const ContentData = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContainerLineTitle = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    @media (max-width: 768px) {
        justify-content: center;
        align-items: center;
    }
`;

export const Title = styled.h2`
    font-size: 5rem;
    font-weight: 700;
    letter-spacing: 3px;
    margin: 0;
    color: var(--text-secondary);
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;
    font-family: var(--font-display);
    
    span {
        display: inline-block;
        opacity: 0;
        transform: translateX(-50px);
        animation: ${slideIn} 0.5s forwards;
        animation-delay: calc(var(--index) * 0.1s);
    }
    
    @media (max-width: 768px) {
        font-size: 4rem;
        text-align: center;
    }
`;

export const Line = styled.div`
    width: 200px;
    background: var(--gradient-lavanda);
    padding: 2px;
    margin-left: 200px;
    opacity: 0;
    transform: translateX(-50px);
    animation: ${slideIn} 0.5s forwards;
    animation-delay: 1s;
`;

export const Img = styled.img`
    width: 150px;
    height: 280px;
    border-radius: 10px;
    object-fit: cover;
    box-shadow: var(--glow-lavanda);
    border: 2px solid var(--lavanda-dark);
`;

export const Name = styled.h3`
    font-size: 30px;
    margin: 0;
    background: var(--gradient-lavanda);
    background-clip: text; 
    color: transparent; 
    font-family: var(--font-display);
    @media (max-width: 768px) {
        font-size: 25px;
    }
`

export const Profession = styled.h3`
    font-size: 20px;
    font-weight: 300;
    margin: 0;
    font-style: italic;
    color: var(--text-muted);
    padding-bottom: 1rem;
    @media (max-width: 768px) {
        padding: 0 1rem 1rem ;
        text-align: center;
    }
`

export const ContainerNameLastName = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    @media (max-width: 768px) {
        padding: 1rem 1rem 0 1rem ;
        justify-content: center;
    }
`

export const NameLastName = styled.h3`
    font-size: 30px;
    margin: 0;
    background: var(--gradient-lavanda);
    background-clip: text; 
    color: transparent;
    font-family: var(--font-display);
    @media (max-width: 768px) {
        font-size: 25px;
    }
`

export const ContainerData = styled.div`
    max-width: 950px;
    display: flex;
    gap: 1rem;
    align-items: center;
    color: var(--text-muted);
    font-weight: 300;
    @media (max-width: 768px) {
        flex-wrap: wrap;
        gap: 0;
        padding: 0 1rem;
        text-align: center;
        justify-content: center;
    }
`

export const Data = styled.h4`
    font-size: 16px;
    margin: 0;
    font-style: italic;
    color: var(--text-muted);
`

export const Answer = styled.p`
    font-size: 16px;
    margin: 0;
    color: var(--text-muted);
`

export const ContainerSummary = styled.div`
    padding: 1rem 0;
    @media (max-width: 768px) {
        padding: 1rem;
        text-align: center;
    }
`

export const Summary = styled.h5`
    max-width: 950px;
    margin: 0;
    color: var(--text-muted);
    font-weight: 300;
    font-size: 16px;
    padding-top: 5px;
    line-height: 1.6;
    @media (max-width: 768px) {
    font-size: 18px;
    }
`
