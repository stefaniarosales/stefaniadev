import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    @media (max-width: 768px) {
        padding-top: 100px;
    }
`;

export const SubContainer = styled.div`
    padding-left: 270px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 768px) {
        padding: 0;
    }
`

export const ProjectsList = styled.div`
    width: 85%;
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
            justify-content: initial;
            align-items: center;
            width: 100%;
        }
`;

export const ProjectItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
        width: 90%;
        justify-content: center;
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
    @media (max-width: 768px) {
        width: 100%;
    }
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
    @media (max-width: 768px) {
        width: 100%;
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