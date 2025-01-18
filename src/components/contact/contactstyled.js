import styled from "styled-components";


export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 1rem 0 3rem;
    gap: 1rem;
    max-width: 800px;
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
    max-width: 350px;
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
    background-color:rgba(183, 183, 183, 0.32);
    border-radius: 4px;
    border:  none;
`;

export const TextArea = styled.textarea`
    padding: 10px;
    font-size: 16px;
    background-color:rgba(183, 183, 183, 0.32);
    border-radius: 4px;
    border:  none;
`;

export const ErrorMessage = styled.div`
    font-size: 12px;
    color: red;
`;

export const SubmitButton = styled.button`
    width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  font-weight: bold;
  background: linear-gradient(90deg, rgba(190, 149, 196, 1) 0%, rgba(159, 134, 192, 1) 41%, rgba(224, 177, 203, 1) 100%);
  color:rgb(231, 229, 229);
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition:  0.3s ease, transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
  }

`;