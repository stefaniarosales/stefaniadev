import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    padding-left: 270px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 768px) {
        padding-top: 150px;
        padding-left: 0;
    }
`;
export const ContainerSkills = styled.div`
    width: 80%;
    display: flex;
    gap: 3rem;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        width: 100%;
    }
`;
export const ContainerTechnicalSkills = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        width: 100%;
    }
`;
export const TitleTechnicalSkills = styled.h3`
    font-size: 35px;
    margin: 0;
    background: linear-gradient(90deg, rgba(190, 149, 196, 1) 0%, rgba(159, 134, 192, 1) 41%, rgba(224, 177, 203, 1) 100%);
    background-clip: text;
    color: transparent;
    text-align: center;
    padding: 1rem;
`;
export const SubContainerTechnicalSkills = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 768px) {
        width: 100%;
    }
`;
export const ContainerSoftSkills = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    @media (max-width: 768px) {
        width: 100%;
    }
`;
export const TitleSoftSkills = styled.h3`
    font-size: 35px;
    margin: 0;
    background: linear-gradient(90deg, rgba(190, 149, 196, 1) 0%, rgba(159, 134, 192, 1) 41%, rgba(224, 177, 203, 1) 100%);
    background-clip: text;
    color: transparent;
    padding: 1rem;
    text-align: center;
`;
export const SubContainerSoftSkills = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 768px) {
        width: 100%;
    }
`;
export const ContainerIllustrationTitle = styled.div`
    width: 100px;
    height: 100px;
    padding: 1rem;
`;
export const Illustration = styled.img`
    width: 60px;
    height: 60px;
    padding: 1rem;
    background-color: rgb(59, 58, 58);
`;
export const TitleIllustration = styled.h4`
    font-size: 10px;
    font-weight: lighter;
    margin: 0;
    color: #959595;
    text-align: center;
`;
