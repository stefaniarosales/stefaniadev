import styled from "styled-components";

export const ContainerStyled = styled.section`
    height: 100vh;
    display: flex;
    justify-content: end;
    padding-left: 300px;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        padding: 0;
    }
`
export const ContainerNameStyled = styled.div`
    backdrop-filter: blur(8px) saturate(180%);
    -webkit-backdrop-filter: blur(8px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.35);
    position: fixed;
    width: 600px;
    height: 250px;
    top: 450px;
    right: 500px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        top: 500px;
        right: 100px;
    }
`
export const TitleStyled = styled.h1`
    font-size: 80px;
    font-weight: bold;
    margin: 0;
    color: #B7B7B7;
    letter-spacing: 3px;
`

export const SubTitleStyled = styled.h2`
    font-weight: lighter;
    font-size: 50px;
    margin: 0;
    color: #B7B7B7;
`

export const ImgStartStyled = styled.img`
    width: 800px;
    height:100vh;
    object-fit: cover;

    @media (max-width: 768px) {
        width: auto;
        height: auto;
        padding-top: 300px;
    }
`
