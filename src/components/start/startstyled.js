import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
`;

const float = keyframes`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
`;

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
`;

const fadeInUp = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    gap: 2rem;
    min-height: calc(100vh - 100px);
    position: relative;
    
    @media (max-width: 768px) {
        padding: 30px 20px;
        gap: 1.5rem;
    }
`;

export const HeroContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    width: 100%;
    max-width: 1000px;
    
    @media (max-width: 900px) {
        flex-direction: column;
        gap: 2rem;
    }
`;

export const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    animation: ${fadeInUp} 0.6s ease-out;
    
    @media (max-width: 768px) {
        align-items: center;
        text-align: center;
    }
`;

export const HeroImage = styled.div`
    position: relative;
    animation: ${fadeInUp} 0.8s ease-out;
    
    &::before {
        content: '';
        position: absolute;
        top: -10px;
        left: -10px;
        right: 10px;
        bottom: 10px;
        border: 2px solid var(--lavanda-dark);
        border-radius: 20px;
        opacity: 0.5;
    }
`;

export const ProfileImage = styled.img`
    width: 280px;
    height: 350px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: var(--glow-lavanda);
    position: relative;
    z-index: 1;
    
    @media (max-width: 768px) {
        width: 220px;
        height: 280px;
    }
`;

export const ContainerName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    animation: ${float} 3s ease-in-out infinite;
    
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const SubTitle = styled.h2`
    font-weight: 300;
    font-size: 1.7rem;
    margin: 0;
    color: var(--text-secondary);
    
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const Description = styled.p`
    color: var(--text-muted);
    font-size: 1rem;
    line-height: 1.6;
    margin: 1rem 0;
    max-width: 450px;
    
    @media (max-width: 768px) {
        font-size: 0.95rem;
    }
`;

export const Img = styled.img`
    width: 350px;
    height: 600px;
`;

export const DownloadButton = styled.button`
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 24px;
    font-weight: 600;
    background: var(--gradient-lavanda);
    color: var(--bg-primary);
    border: none;
    border-radius: 12px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: var(--glow-lavanda);
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
        background-size: 200% 100%;
        animation: ${shimmer} 2s infinite;
    }
    
    &:hover {
        transform: scale(1.05);
        box-shadow: var(--glow-lavanda-strong);
    }
    
    &:active {
        transform: scale(0.95);
    }
    
    @media (max-width: 768px) {
        width: 180px;
        font-size: 0.9rem;
    }
`;

export const SecondaryButton = styled.button`
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 24px;
    font-weight: 600;
    background: transparent;
    color: var(--lavanda-light);
    border: 2px solid var(--lavanda-dark);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        background: var(--gradient-lavanda);
        color: var(--bg-primary);
        box-shadow: var(--glow-lavanda);
        transform: scale(1.05);
    }
    
    &:active {
        transform: scale(0.95);
    }
    
    @media (max-width: 768px) {
        width: 180px;
        font-size: 0.9rem;
    }
`;

export const ProgressBar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.35);
    width: ${({ progress }) => `${progress}%`};
    transition: width 0.2s ease;
`;

export const ContainerIconsRedes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
`;

export const ContainerIconsBtn = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
    margin-top: 1rem;
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
    }
`;

export const ContainerSpeechBubble = styled.div`
    padding: 10px;
    text-align: center;
    animation: ${float} 2.5s ease-in-out infinite;
    animation-delay: 0.5s;
`;

export const ScrollIndicator = styled.div`
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    animation: ${bounce} 2s infinite;
    
    span {
        color: var(--text-muted);
        font-size: 0.75rem;
        letter-spacing: 2px;
        text-transform: uppercase;
    }
    
    @media (max-width: 768px) {
        bottom: 15px;
    }
`;

export const ScrollArrow = styled.div`
    width: 24px;
    height: 24px;
    border-right: 2px solid var(--lavanda-light);
    border-bottom: 2px solid var(--lavanda-light);
    transform: rotate(45deg);
    opacity: 0.7;
`;
