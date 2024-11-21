// Start.js
import React from 'react';
import { ContainerStyled, ContainerNameStyled, SubTitleStyled, TitleStyled, ImgStartStyled, BtnDeveloperStyled } from './startstyled';


function Start() {
  return (
    <ContainerStyled>
      <ContainerNameStyled>
        <SubTitleStyled>MI NOMBRE ES </SubTitleStyled>
        <TitleStyled>STEFANIA</TitleStyled>
        <BtnDeveloperStyled>DEVELOPER FRONTEND</BtnDeveloperStyled>
      </ContainerNameStyled>
      <ImgStartStyled src='/img/backgroundStart.jpg'/>
    </ContainerStyled>
  );
}

export default Start;
