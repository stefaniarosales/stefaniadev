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
export const MoreInfoButton = styled.div`
    margin-top: 10px;
    text-align: center;
    a {
        padding: 10px 20px;
        background-color: #9F86C0;
        color: white;
        text-decoration: none;
        border-radius: 5px;
        font-weight: bold;
    }
    a:hover {
        background-color: #7A6CA7;
    }
`;

export const ModalBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${(props) => props.theme.colors.background || "white"};
    border-radius: 8px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    text-align: center;
    max-width: 500px;
    width: 100%;
`;
