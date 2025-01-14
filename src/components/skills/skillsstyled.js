import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    padding: 1rem 1rem 0 3rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 768px) {
        padding: 50px 0 0 0;
        justify-content: flex-start;
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
        gap: 1rem;
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
    color: #B7B7B7;
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
    color: #B7B7B7;
    padding: 1rem;
    text-align: center;
`;
export const SubContainerSoftSkills = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    @media (max-width: 768px) {
        width: 100%;
    }
`;
export const ContainerIllustrationTitle = styled.div`
    width: ${(props) => props.size || '60px'}; 
    height: ${(props) => props.size || '60px'}; 
    padding: 1rem;
`;
export const Illustration = styled.img`
    width: ${(props) => props.sizes || '60px'}; 
    height: ${(props) => props.sizes || '60px'}; 
    padding: 0.5rem;
    background-color: rgb(59, 58, 58);
`;
export const TitleIllustration = styled.h4`
    font-size: 10px;
    font-weight: lighter;
    margin: 0;
    color: #959595;
    text-align: center;
`;
