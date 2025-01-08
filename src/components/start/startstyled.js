import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    padding-left: 270px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7rem;
    //tablet
    @media (max-width: 768px) {
        padding: 0;
        padding-left: 0;
    }
`
export const ContainerName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        width: 100%;
    }
`

export const SubTitle = styled.h2`
    font-weight: lighter;
    font-size: 4rem;
    margin: 0;
    /* color: #B7B7B7; */
    @media (max-width: 768px) {
        font-size: 3rem;
    }
`
export const Img = styled.img`
    width: 350px;
    height: 600px;
`
