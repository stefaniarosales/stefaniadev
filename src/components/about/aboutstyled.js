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
//imagén y datos personales
export const ContainerImgData = styled.div`
    width: 70%;
    display: flex;
    gap: 5rem;
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
export const  ContainerLineTitle = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    @media (max-width: 768px) {
        justify-content: center;
        align-items: center;
    }
`
//título about
export const Title = styled.h2`
    font-size: 70px;
    font-weight: bold;
    letter-spacing: 3px;
    margin: 0;
    color: #B7B7B7;
    @media (max-width: 768px) {
        padding: 1rem;
        font-size: 50px;
        text-align: center;
    }
`
//línea decorativa 
export const Line = styled.div`
    width: 200px;
    background-color:#B7B7B7;
    padding: 2px;
    margin-left: 200px;
`

//imagén
export const Img = styled.img`
    width: 250px;
    height: 400px;
    object-fit: cover;
    object-position: center;
    -webkit-box-shadow: -10px 10px 0px 4px rgba(190,149,196,1);
    -moz-box-shadow: -10px 10px 0px 4px rgba(190,149,196,1);
    box-shadow: -10px 10px 0px 4px rgba(190,149,196,1);
    @media (max-width: 768px) {
        width: 350px;
        height: 500px;
    }
`
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
    font-size: 25px;
    margin: 0;
    font-style: italic;
    color: #959595;
    padding-bottom: 1rem;
    @media (max-width: 768px) {
        padding: 0 1rem 1rem ;
    }
`
//contenedor de nombre y apellido
export const ContainerNameLastName = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    @media (max-width: 768px) {
        padding: 1rem 1rem 0 1rem ;
    }
`
//nombre y apellido
export const NameLastName = styled.h3`
    font-size: 35px;
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
    @media (max-width: 768px) {
        flex-wrap: wrap;
        gap: 0;
        padding: 0 1rem ;
    }
`
//dirección-mail y intereses.
export const Data = styled.h4`
    font-size: 25px;
    margin: 0;
    font-style: italic;
    color: #959595;
`

//imformación de dirección-mail y intereses.
export const Answer = styled.p`
    font-size: 20px;
    margin: 0;
    color: #959595;
`

//container de resumen 
export const ContainerSummary = styled.div`
    padding: 1rem 0;
    @media (max-width: 768px) {
        padding: 1rem;
    }
`
//resumenes
export const Summary = styled.h5`
    max-width: 950px;
    margin: 0;
    color: #959595;
    font-weight: lighter;
    font-size: 20px;
    padding-top: 5px;
    @media (max-width: 768px) {
    font-size: 18px;
    }
`