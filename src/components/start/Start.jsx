import React, { useState} from 'react';
import { 
  Container,
  ContainerName,
  SubTitle,
  DownloadButton,
  ProgressBar,
  ContainerSpeechBubble, 
  ContainerIconsBtn, 
  ContainerIconsRedes
} from './startstyled';

import SpeechBubble from './SpeechBubble';
import { GitHub, Instagram, LinkedIn, Download } from '@mui/icons-material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
//reusable components
import { ContainerLineTitle, Line, Title } from '../about/aboutstyled';
import {ContainerIcon} from '../contact/contactstyled'
import AnimatedText from './AnimatedText';


function Start() {
  const [progress, setProgress] = useState(0); // Estado para el progreso
  const [downloaded, setDownloaded] = useState(false); // Estado para mostrar éxito  

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../cv/stefaniacv.pdf';
    link.download = 'stefania_cv.pdf';
    link.click();

    // Simulación de progreso
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        setDownloaded(true);
        setTimeout(() => {
          setProgress(0); // Reset del progreso
          setDownloaded(false); // Reset del botón
        }, 2000); // Duración del mensaje de éxito
      }
    }, 100); // Tiempo entre incrementos
  };
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
            {downloaded ? (
              <>
                <CheckCircleIcon style={{ marginRight: '8px' }} />
                Descargado
              </>
            ) : (
              <>
                <Download style={{ marginRight: '8px' }} />
                Descargar CV
              </>
            )}
            <ProgressBar progress={progress} />
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
