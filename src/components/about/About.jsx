import React from 'react'

import {
  ContainerStyled,
  ContainerAboutStyled,
  ContainerParrafosStyled,
  ContainerHabilidadesStyled,
  ParrafoStyled,
  TitleStyled
} from './aboutstyled'

function About() {
  return (
    <>
      <ContainerStyled>
        <ContainerAboutStyled>
          <ContainerParrafosStyled>
            <ParrafoStyled>Soy una desarrolladora frontend junior con una gran pasión por la programación y el diseño web.</ParrafoStyled>
            <ParrafoStyled> Actualmente estoy explorando el mundo del desarrollo web y estoy emocionada por aplicar mis conocimientos para crear interfaces de  usuario intuitivas y visualmente atractivas.</ParrafoStyled>
            <ParrafoStyled> Mi objetivo es convertirme en una desarrolladora frontend completa, capaz  de construir experiencias digitales excepcionales.</ParrafoStyled>
          </ContainerParrafosStyled>
          <ContainerHabilidadesStyled>
            <TitleStyled>HABILIDADES</TitleStyled>
            
          </ContainerHabilidadesStyled>
          
        </ContainerAboutStyled>
      </ContainerStyled>
    </>
  )
}

export default About
