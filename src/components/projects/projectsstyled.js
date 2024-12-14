import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    padding-top: 1rem;
    margin-left: 270px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 768px) {
        padding: 0;
    }
`;

export const ProjectsList = styled.div`
    width: 80%;
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
        background: #f1f1f1;
    }
        @media (max-width: 768px) {
            padding: 1rem;
            width: unset;
        }
`;

export const ProjectItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    outline: 1px solid red;
    overflow: hidden;
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
    width: 100%;
    height: 400px;
    border: none;
`;

//detalles btn
export const MoreInfoButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 10px;
    background-color: rgb(240, 240, 240);
    padding: 10px;
    border-radius: 5px;
`;
