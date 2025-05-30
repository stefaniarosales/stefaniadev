import styled, { keyframes} from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding: 2rem 1rem 0 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1050px;
    @media (max-width: 768px) {
        padding: 50px 0 0 0;
        justify-content: flex-start;
    }
`
//imagén y datos personales
export const ContainerImgData = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 3rem;
    padding: 2rem 0;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        width: unset;
    }
`
//datos personales
export const ContentData = styled.div`
    display: flex;
    flex-direction: column;
`
//container línea y título about 
export const ContainerLineTitle = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    @media (max-width: 768px) {
        justify-content: center;
        align-items: center;
    }
`;
//título about con animación
export const Title = styled.h2`
    font-size: 5rem;
    font-weight: bold;
    letter-spacing: 3px;
    margin: 0;
    color: #B7B7B7;
    overflow: hidden; // Evita que las letras se muestren antes de la animación
    white-space: nowrap;
    display: inline-block; // Necesario para la animación de texto
    @media (max-width: 768px) {
        font-size: 4rem;
        text-align: center;
    }
    // Animación para las letras
    span {
        display: inline-block;
        opacity: 0;
        transform: translateX(-50px);
        animation: slideIn 0.5s forwards;
        animation-delay: calc(var(--index) * 0.1s);
    }
    @keyframes slideIn {
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
//línea decorativa con animación
export const Line = styled.div`
    width: 200px;
    background-color: #B7B7B7;
    padding: 2px;
    margin-left: 200px;
    opacity: 0;
    transform: translateX(-50px);
    animation: slideInLine 0.5s forwards;
    animation-delay: 1s;
    @keyframes slideInLine {
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
// Estilo de la imagen
export const Img = styled.img`
    width: 150px;
    height: 280px;
    border-radius: 10px;
    object-fit: cover;
`;
//nombre
export const Name = styled.h3`
    font-size: 30px;
    margin: 0;
    background: linear-gradient(90deg, rgba(190, 149, 196, 1) 0%, rgba(159, 134, 192, 1) 41%, rgba(224, 177, 203,   1) 100%);
    background-clip: text; 
    color: transparent; 
    @media (max-width: 768px) {
        font-size: 25px;
    }
`
//profesión
export const Profession = styled.h3`
    font-size: 20px;
    font-weight: lighter;
    margin: 0;
    font-style: italic;
    color: #959595;
    padding-bottom: 1rem;
    @media (max-width: 768px) {
        padding: 0 1rem 1rem ;
        text-align: center;
    }
`
//contenedor de nombre y apellido
export const ContainerNameLastName = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    @media (max-width: 768px) {
        padding: 1rem 1rem 0 1rem ;
        justify-content: center;
    }
`
//nombre y apellido
export const NameLastName = styled.h3`
    font-size: 30px;
    margin: 0;
    background: linear-gradient(90deg, rgba(190, 149, 196, 1) 0%, rgba(159, 134, 192, 1) 41%, rgba(224, 177, 203, 1) 100%);
    background-clip: text; 
    color: transparent;
    @media (max-width: 768px) {
        font-size: 25px;
    }
`
//contenedor de dirreción-mail y intereses.
export const ContainerData = styled.div`
    max-width: 950px;
    display: flex;
    gap: 1rem;
    align-items: center;
    color: #959595;
    font-weight: lighter;
    @media (max-width: 768px) {
        flex-wrap: wrap;
        gap: 0;
        padding: 0 1rem;
        text-align: center;
        justify-content: center;
    }
`
//dirección-mail y intereses.
export const Data = styled.h4`
    font-size: 16px;
    margin: 0;
    font-style: italic;
    color: #959595;
`
//imformación de dirección-mail y intereses.
export const Answer = styled.p`
    font-size: 16px;
    margin: 0;
    color: #959595;
`
//container de resumen 
export const ContainerSummary = styled.div`
    padding: 1rem 0;
    @media (max-width: 768px) {
        padding: 1rem;
        text-align: center;
    }
`
//resumenes
export const Summary = styled.h5`
    max-width: 950px;
    margin: 0;
    color: #959595;
    font-weight: lighter;
    font-size: 16px;
    padding-top: 5px;
    @media (max-width: 768px) {
    font-size: 18px;
    }
`