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
    position: fixed;
    width: 80%;
    height: 25%;
    top: 450px;
    right: 500px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        top: 50%;
        right: 10%;
    }
`
export const TitleStyled = styled.h1`
    font-size: 5rem;
    font-weight: bold;
    margin: 0;
    color: #B7B7B7;
    letter-spacing: 3px;

    @media (max-width: 768px) {
        font-size: 3rem;
    }
`

export const SubTitleStyled = styled.h2`
    font-weight: lighter;
    font-size: 50px;
    margin: 0;
    color: #B7B7B7;
`

export const ContainerImg = styled.div`
    width: 50%;
    background-image: url(/img/stefania.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 768px) {
        width: 100%;
    }
`
