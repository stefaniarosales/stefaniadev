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
    width: 80%;
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
    text-align: center;
`
export const SubContainerTechnicalSkills = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
`
export const ContainerSoftSkills = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
`
export const TitleSoftSkills = styled.h3`
    font-size: 35px;
    margin: 0;
    background: linear-gradient(90deg, rgba(190, 149, 196, 1) 0%, rgba(159, 134, 192, 1) 41%, rgba(224, 177, 203, 1) 100%);
    background-clip: text;
    color: transparent;
    padding: 1rem;
    text-align: center;
`
export const SubContainerSoftSkills = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y: auto;
`
export const ContainerIllustrationTitle = styled.div`
    width: 150px;
    height: 180px;
    padding: 1rem;

`
export const Illustration = styled.img`
    width: 120px;
    height: 110px;
    padding: 1rem;
    background-color:rgb(59, 58, 58);
`
export const TitleIllustration = styled.h4`
    font-size: 11px;
    font-weight: lighter;
    margin: 0;
    color: #959595;
    text-align: center;

`