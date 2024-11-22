// Start.js
import React from 'react';
import { ContainerStyled, ContainerNameStyled, SubTitleStyled, TitleStyled, ImgStartStyled } from './startstyled';
import AnimatedText from './AnimatedText';


function Start() {
  return (
    <ContainerStyled>
      <ContainerNameStyled>
        <SubTitleStyled>Hola! soy</SubTitleStyled>
        <TitleStyled>STEFANIA</TitleStyled>
        <AnimatedText/>
      </ContainerNameStyled>
      <ImgStartStyled src='/img/stefania.jpg'/>
    </ContainerStyled>
  );
}

export default Start;
