import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
import LetterComponent from '../UI/LetterComponent';
import SpeechBubble from './SpeechBubble';
import { GitHub, Instagram, LinkedIn, Download } from '@mui/icons-material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ContainerLineTitle, Line, Title } from '../about/aboutstyled';
import { ContainerIcon } from '../contact/contactstyled';
import AnimatedText from './AnimatedText';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
};

function Start() {
  const [progress, setProgress] = useState(0);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv/stefaniadev-cv.pdf';
    link.download = 'stefaniadev-cv.pdf';
    link.click();

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        setDownloaded(true);
        setTimeout(() => {
          setProgress(0);
          setDownloaded(false);
        }, 2000);
      }
    }, 100);
  };

  return (
    <Container>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ContainerName>
          <ContainerSpeechBubble>
            <SpeechBubble
              text="¡Hola!"
              bgColor="var(--lavanda-light)"
              textColor="#000"
              angle="25deg"
            />
          </ContainerSpeechBubble>
          <SubTitle>Yo soy</SubTitle>
          <ContainerLineTitle>
            <LetterComponent top='-60px'></LetterComponent>
            <Title>
              {"STEFANIA".split("").map((letter, index) => (
                <span key={index} style={{ "--index": index }}>{letter}</span>
              ))}
            </Title>
            <Line />
          </ContainerLineTitle>
          <AnimatedText/>
        </ContainerName>
        <ContainerIconsBtn>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
          </motion.div>
          <ContainerIconsRedes>
            <motion.div whileHover={{ scale: 1.1 }}>
              <ContainerIcon href="https://github.com/stefaniarosales" target="_blank" rel="noopener noreferrer">
                <GitHub style={{ fontSize: '30px' }}/>
              </ContainerIcon>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <ContainerIcon href="https://www.instagram.com/stefisua/" target="_blank" rel="noopener noreferrer">
                <Instagram style={{ fontSize: '30px' }}/>
              </ContainerIcon>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <ContainerIcon href="https://www.linkedin.com/in/stefaniarosales/" target="_blank" rel="noopener noreferrer">
                <LinkedIn style={{ fontSize: '30px' }}/>
              </ContainerIcon>
            </motion.div>
          </ContainerIconsRedes>
        </ContainerIconsBtn>
      </motion.div>
    </Container>
  );
}

export default Start;
