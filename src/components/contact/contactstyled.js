import styled from "styled-components";


export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 1rem 0 3rem;
    gap: 1rem;
    @media (max-width: 768px) {
        justify-content: flex-start;
        padding: 50px 0 0 0;
        align-items: center;
    }
`

export const SubContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
    padding: 2rem;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0;
        align-items: center;
        gap: 1rem;
    }
`
export const ContainerDataIcons = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    gap: 1rem;
    @media (max-width: 768px) {
        align-items: center;
    }
`
export const ContainerData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const Data = styled.p`
    color: #b7b7b7;
    font-size: 16px;
    font-weight: lighter;
    margin: 0;
`
export const ContainerIconsRedesSociales = styled.div`
    display: flex;
    width: 100%;
    gap: 0.5rem;
    padding: 10px;
    @media (max-width: 768px) {
        justify-content: center;
    }
`
export const ContainerIcon =styled.a`
    text-decoration: none;
    display: inline-block;
    color: #b7b7b7;
    transition:  0.3s ease, transform 0.2s ease;

    &:hover {
        color: #9F86C0;
        transform: scale(1.05);
    }
`


//formulario
export const FormContainer = styled.div`
    width: 60%;
    max-width: 450px;
    padding: 20px;
    border: 1px solid #b7b7b7;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
    font-size: 20px;
    text-align: center;
    color: #b7b7b7;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const Input = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #b7b7b7;
    border-radius: 4px;
    &:focus {
        border-color:rgb(113, 113, 113);
        outline: none;
    }
`;

export const TextArea = styled.textarea`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #b7b7b7;
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
    background: linear-gradient(90deg, rgba(190, 149, 196, 1) 0%, rgba(159, 134, 192, 1) 41%, rgba(224, 177, 203, 1) 100%);
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;