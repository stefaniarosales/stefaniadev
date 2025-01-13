import styled from "styled-components";


export const Container = styled.section`
    width: 100%;
    height: 100vh;
    padding-left: 270px;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 768px) {
        padding-top: 160px;
        padding-left: 0;
        justify-content: flex-start;
    }
`

export const SubContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 10rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`
export const ContainerLogoData = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 1rem;
`
export const ContainerDataIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    /* background-color: rgb(59, 58, 58); */
`
export const SubContainerDataIcon = styled.div`
    display: flex;
    width: 100%;
    gap: 1rem;
    padding: 10px;
    @media (max-width: 768px) {
        justify-content: center;
    }
`
export const Data =styled.p`
    font-size: 10px;
    margin: 5px;
    padding-top: 10px;
`
export const Icon = styled.div`
    background-color: rgb(59,58,58);
`
export const ContainerLogo = styled.div`
    width: 100%;
    text-align: center;
`
export const Logo = styled.img`
    width: 100px;
`


//formulario
export const FormContainer = styled.div`
    max-width: 500px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
    text-align: center;
    color: #333;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const Input = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;

export const TextArea = styled.textarea`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;

export const ErrorMessage = styled.div`
    font-size: 14px;
    color: red;
`;

export const SubmitButton = styled.button`
    padding: 10px;
    font-size: 16px;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;