import React from 'react'

import {
  Container,
  ContainerImgData,
  ContentData,
  ContainerNameLastName,
  ContainerData,
  ContainerLineTitle,
  ContainerSummary,
  Title,
  Img,
  Name,
  Profession,
  NameLastName,
  Data,
  Answer,
  Line,
  Summary
} from './aboutstyled'

function About() {
  return (
    <>
      <Container>
        <ContainerLineTitle>
          <Title>ABOUT ME</Title>
          <Line/>
        </ContainerLineTitle>
        
        <ContainerImgData>
          <Img src='/img/stefania.jpg'/>
          <ContentData>
            <ContainerNameLastName>
              <Name>NOMBRE:</Name><NameLastName>STEFANIA ROSALES</NameLastName>
            </ContainerNameLastName>
            <Profession>developer frontend</Profession>
            <ContainerData>
              <Data>Dirección:</Data><Answer>Argentina, Buenos Aires.</Answer>
            </ContainerData>
            <ContainerData>
              <Data>Mail:</Data><Answer>stefaniarosales@live.com</Answer>
            </ContainerData>
            <ContainerData>
              <Data>Intereses:</Data><Answer>Diseño UX/UI, lectura, aprendizaje constante de nuevas tecnologías(actualmente explorando Node.js).</Answer>
            </ContainerData>
            <ContainerSummary>
              <Summary>Soy una Desarrolladora frontend con una sólida base en HTML, CSS, JavaScript y React, apasionada
              por crear interfaces de usuario intuitivas y visualmente atractivas.</Summary>
              <Summary>Busco mi primera oportunidad profesional para aplicar mis conocimientos y contribuir en
              proyectos innovadores. </Summary>
              <Summary>Me destaco por mi proactividad, habilidades de comunicación y
              capacidad para trabajar en equipo, con un enfoque constante en el aprendizaje y el
              crecimiento en entornos dinámicos y colaborativos.</Summary>
            </ContainerSummary>
            
          </ContentData>
        </ContainerImgData>
        
      </Container>
    </>
  )
}

export default About
