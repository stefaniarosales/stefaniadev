import React from 'react'

import {
  ContainerStyled,
  ContainerAboutStyled,
  ContainerParrafosStyled,
  ContainerTitlesStyled,
  TitleStyled,
  ParrafoStyled,
  BtnContáctameStyled
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
          <ContainerTitlesStyled>
            <TitleStyled>Si te interesa mi trabajo, no dudes en echar un vistazo a mis proyectos personales y ponerte en contacto conmigo.</TitleStyled>
            <BtnContáctameStyled>¡Contáctame!</BtnContáctameStyled>
            <TitleStyled>¡Estoy emocionada por colaborar contigo!</TitleStyled>
            </ContainerTitlesStyled>
        </ContainerAboutStyled>
      </ContainerStyled>
    </>
  )
}

export default About
