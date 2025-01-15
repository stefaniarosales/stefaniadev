
import React from 'react';
import { Container, ContainerName, SubTitle, DownloadButton, ContainerSpeechBubble, ContainerIconsBtn, ContainerIconsRedes } from './startstyled';
import AnimatedText from './AnimatedText';
import SpeechBubble from './SpeechBubble';
import { GitHub } from '@mui/icons-material';
import { Instagram } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';

import { ContainerLineTitle, Line, Title } from '../about/aboutstyled';
import {ContainerIcon} from '../contact/contactstyled'
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
            bgColor="rgba(224, 177, 203, 1)"
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
        <ContainerIconsBtn>
          <DownloadButton onClick={handleDownload}>
          <DownloadIcon style={{ marginRight: '8px' }} />Descargar CV
          </DownloadButton>
          <ContainerIconsRedes>
          <ContainerIcon
            href="https://github.com/stefaniarosales"
            target="_blank" 
            rel="noopener noreferrer" 
          >
            <GitHub style={{ fontSize: '30px' }}/>
          </ContainerIcon>
          <ContainerIcon
            href="https://www.instagram.com/stefisua/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram style={{ fontSize: '30px' }}/>
          </ContainerIcon>
          <ContainerIcon
            href="https://www.linkedin.com/in/stefaniarosales/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn style={{ fontSize: '30px' }}/>
          </ContainerIcon>
          </ContainerIconsRedes>
        </ContainerIconsBtn>
    </Container>
  );
}

export default Start;
