import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    padding: 1rem;
    margin-left: 270px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 768px) {
        margin-left: 0;
    }
`;

export const ProjectsList = styled.div`
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    overflow-y: auto;

     /* Estilos para Chrome, Edge, Safari */
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #010101;
    }
        @media (max-width: 768px) {
            flex-wrap: nowrap;
            flex-direction: column;
            width: 100%;
            overflow-y: none;
        }
`;

export const ProjectItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
    max-width: 100%;
    }
`;

export const ProjectTitle = styled.h3`
    font-size: 20px;
    margin: 0;
    padding: 10px;
    text-align: center;
    color: #333;
    a{
        color: #B7B7B7;
        padding-left: 10px;
        font-weight: bold;
    }
    a:hover{
        color: #9F86C0;
    }
    svg {
        font-size: medium;
        padding-right: 5px;
    }
`;

export const ProjectFrame = styled.iframe`
    width: 80%;
    height: 400px;
    border: none;
`;

//detalles btn
export const MoreInfoButton = styled.button`
    width: 80%;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    color: black;
    background-color: rgb(240, 240, 240);
    border: 1px solid rgba(0, 0, 0, 0.2); // Add a subtle border

    &:hover {
        background-color: rgb(230, 230, 230); // Lighten background on hover
        cursor: pointer; // Indicate interactivity
    }
`;


//tecnologias
export const TechnologiesList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`;

export const TechnologyIcon = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 5px;
`;