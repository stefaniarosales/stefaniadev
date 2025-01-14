
import React from 'react';
import { Container, ContainerName, SubTitle, DownloadButton, ContainerSpeechBubble } from './startstyled';
import AnimatedText from './AnimatedText';
import SpeechBubble from './SpeechBubble';

import { ContainerLineTitle, Line, Title } from '../about/aboutstyled';
import DownloadIcon from '@mui/icons-material/Download';


function Start() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../cv/stefaniacv.pdf';
    link.download = 'stefania_cv.pdf';
    link.click();
  }
  return (
    <Container>
        <ContainerName>
          <ContainerSpeechBubble>
          <SpeechBubble
            text="¡Hola!"
            bgColor="#FFD700"
            textColor="#000"
            angle="25deg" // Cambia este valor para rotar
          />
          </ContainerSpeechBubble>
          
          <SubTitle>Yo soy</SubTitle>
          <ContainerLineTitle>
            <Title>STEFANIA</Title>
            <Line/>
          </ContainerLineTitle>
          <AnimatedText/>
        </ContainerName>
        <DownloadButton onClick={handleDownload}>
        <DownloadIcon style={{ marginRight: '8px' }} />Descargar CV
        </DownloadButton>
    </Container>
  );
}

export default Start;
