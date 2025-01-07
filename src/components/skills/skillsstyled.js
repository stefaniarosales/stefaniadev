import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    padding-left: 270px;
    padding-top: 1rem;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 768px) {
        padding-top: 100px;
    }
`
export const ContainerSkills = styled.div`
    width: 70%;
    display: flex;
    gap: 3rem;
`
export const ContainerTechnicalSkills = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`
export const TitleTechnicalSkills = styled.h3`
    font-size: 35px;
    margin: 0;
    background: linear-gradient(90deg, rgba(190, 149, 196, 1) 0%, rgba(159, 134, 192, 1) 41%, rgba(224, 177, 203, 1) 100%);
    background-clip: text;
    color: transparent;
`
export const ContainerSoftSkills = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`
export const TitleSoftSkills = styled.h3`
    font-size: 35px;
    margin: 0;
    background: linear-gradient(90deg, rgba(190, 149, 196, 1) 0%, rgba(159, 134, 192, 1) 41%, rgba(224, 177, 203, 1) 100%);
    background-clip: text;
    color: transparent;
`