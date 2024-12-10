import styled from "styled-components";

export const ContainerStyled = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: end;
    
    //tablet
    @media (max-width: 768px) {
        padding: 0;
        justify-content: center;
    }
`
export const ContainerNameStyled = styled.div`
    backdrop-filter: blur(8px) saturate(180%);
    -webkit-backdrop-filter: blur(8px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.35);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const TitleStyled = styled.h1`
    font-size: 7rem;
    font-weight: bold;
    margin: 0;
    /* color: #B7B7B7; */

    letter-spacing: 3px;

    @media (max-width: 768px) {
        font-size: 5rem;
    }
`

export const SubTitleStyled = styled.h2`
    font-weight: lighter;
    font-size: 4rem;
    margin: 0;
    /* color: #B7B7B7; */
    @media (max-width: 768px) {
        font-size: 3rem;
    }
`

export const ContainerImg = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background-image: url(/img/stefania.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 768px) {
        width: 100%;
    }
`
