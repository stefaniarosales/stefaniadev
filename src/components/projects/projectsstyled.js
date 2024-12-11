import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    padding-left: 270px;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        padding: 0;
    }
`;

export const ProjectsList = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: center;
    margin-top: 2rem;
    @media (max-width: 768px) {
    padding: 1rem;
    width: unset;
    }
`;

export const ProjectItem = styled.div`
    width: 100%;
    max-width: 25%;
    height: 100%;
    overflow: hidden;
    @media (max-width: 768px) {
    max-width: 100%;
    }
`;

export const ProjectTitle = styled.h3`
    font-size: 18px;
    margin: 0;
    padding: 20px;
    text-align: center;
    color: #333;
    a{
        color: aliceblue;
    }
`;

export const ProjectFrame = styled.iframe`
    width: 100%;
    height: 400px;
    border: none;
`;
