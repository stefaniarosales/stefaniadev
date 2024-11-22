import styled from "styled-components";

export const Container = styled.section`
    height: 100vh;
    padding-left: 300px;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const ContainerImgData = styled.div`
    width: 100%;
    display: flex;
    gap: 5rem;
    padding: 2rem 0;
`

export const ContentData = styled.div`
    display: flex;
    flex-direction: column;
`
export const Title = styled.h2`
    font-size: 70px;
    font-weight: bold;
    letter-spacing: 3px;
    margin: 0;
    color: #B7B7B7;
`

export const Img = styled.img`
    width: 250px;
    height: 300px;
    object-fit: cover;
    object-position: center;
    -webkit-box-shadow: -10px 10px 0px 4px rgba(190,149,196,1);
    -moz-box-shadow: -10px 10px 0px 4px rgba(190,149,196,1);
    box-shadow: -10px 10px 0px 4px rgba(190,149,196,1);
`
export const Name = styled.h3`
    font-size: 30px;
    margin: 0;
    background: linear-gradient(90deg, rgba(190, 149, 196, 1) 0%, rgba(159, 134, 192, 1) 41%, rgba(224, 177, 203,   1) 100%);
    background-clip: text; 
    color: transparent; 
`
export const Profession = styled.h3`
    font-size: 25px;
    margin: 0;
    font-style: italic;
    color: #959595;
    padding-bottom: 1rem;
`
export const NameLastName = styled.h3`
    font-size: 35px;
    margin: 0;
    background: linear-gradient(90deg, rgba(190, 149, 196, 1) 0%, rgba(159, 134, 192, 1) 41%, rgba(224, 177, 203, 1) 100%);
    background-clip: text; 
    color: transparent;
`
export const ContainerNameLastName = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`
export const ContainerData = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`
export const Data = styled.h4`
    font-size: 25px;
    margin: 0;
    font-style: italic;
    color: #959595;
`

export const Answer = styled.p`
 font-size: 20px;
 margin: 0;
 color: #959595;
`
export const  ContainerLineTitle = styled.div`
display: flex;
flex-direction: column;
padding: 2rem 0;
`
export const Line = styled.div`
    width: 200px;
    background-color:#B7B7B7;
    padding: 2px;
    margin-left: 270px;
`

export const ContainerSummary = styled.div`
    padding: 1rem 0;
`
export const Summary = styled.h5`
    margin: 0;
    color: #959595;
    font-weight: lighter;
    font-size: 20px;
    padding-top: 5px;
`