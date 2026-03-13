import styled, { keyframes } from "styled-components";

const pulse = keyframes`
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
`;

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    gap: 1rem;
    max-width: 1050px;
    
    @media (max-width: 768px) {
        justify-content: flex-start;
        padding: 30px 20px;
        align-items: center;
    }
`;

export const SubContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 5rem;
    
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0;
        align-items: center;
        gap: 2rem;
    }
`;

export const ContainerDataIcons = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    gap: 1.5rem;
    
    @media (max-width: 768px) {
        align-items: center;
        width: 100%;
    }
`;

export const ContainerData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Data = styled.p`
    color: var(--text-secondary);
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: color 0.3s ease;
    
    &:hover {
        color: var(--lavanda-light);
    }
`;

export const ContainerIconsRedesSociales = styled.div`
    display: flex;
    width: 100%;
    gap: 1rem;
    padding: 10px 0;
    
    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const ContainerIcon = styled.a`
    text-decoration: none;
    display: inline-block;
    color: var(--text-secondary);
    transition: all 0.3s ease;
    padding: 8px;
    border-radius: 8px;
    background: var(--bg-card);
    border: 1px solid var(--glass-border);

    &:hover {
        color: var(--lavanda-light);
        transform: scale(1.1);
        box-shadow: var(--glow-lavanda);
        border-color: var(--lavanda-dark);
        animation: ${pulse} 0.5s ease;
    }
`;

export const FormContainer = styled.div`
    width: 60%;
    max-width: 400px;
    padding: 30px;
    background: var(--bg-card);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    backdrop-filter: var(--glass-blur);
    
    @media (max-width: 768px) {
        width: 90%;
        padding: 24px;
    }
`;

export const FormTitle = styled.h2`
    font-size: 24px;
    text-align: center;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    font-family: var(--font-display);
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Input = styled.input`
    padding: 14px 16px;
    font-size: 16px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    border: 2px solid var(--glass-border);
    color: var(--text-primary);
    font-family: var(--font-primary);
    transition: all 0.3s ease;
    outline: none;
    
    &::placeholder {
        color: var(--text-muted);
    }
    
    &:focus {
        border-color: var(--lavanda-dark);
        box-shadow: 0 0 15px rgba(190, 149, 196, 0.3);
    }
`;

export const TextArea = styled.textarea`
    padding: 14px 16px;
    font-size: 16px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    border: 2px solid var(--glass-border);
    color: var(--text-primary);
    font-family: var(--font-primary);
    transition: all 0.3s ease;
    outline: none;
    resize: vertical;
    min-height: 120px;
    
    &::placeholder {
        color: var(--text-muted);
    }
    
    &:focus {
        border-color: var(--lavanda-dark);
        box-shadow: 0 0 15px rgba(190, 149, 196, 0.3);
    }
`;

export const ErrorMessage = styled.div`
    font-size: 12px;
    color: #ff6b6b;
    margin-top: -10px;
`;

export const SubmitButton = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 28px;
    font-weight: 600;
    font-size: 16px;
    background: var(--gradient-lavanda);
    color: var(--bg-primary);
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: var(--glow-lavanda);

    &:hover {
        transform: translateY(-2px);
        box-shadow: var(--glow-lavanda-strong);
    }

    &:active {
        transform: scale(0.98);
    }

    @media (max-width: 768px) {
        width: 100%;
        font-size: 1rem;
    }
`;
