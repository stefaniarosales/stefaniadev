import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Container,
  HeroContent,
  HeroText,
  HeroImage,
  ProfileImage,
  ContainerName,
  SubTitle,
  Description,
  DownloadButton,
  SecondaryButton,
  ProgressBar,
  ContainerSpeechBubble, 
  ContainerIconsBtn, 
  ContainerIconsRedes,
  ScrollIndicator,
  ScrollArrow
} from './startstyled';
import LetterComponent from '../UI/LetterComponent';
import SpeechBubble from './SpeechBubble';
import { GitHub, Instagram, LinkedIn, Download, ArrowForward } from '@mui/icons-material';
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
  const navigate = useNavigate();

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

  const scrollToNextSection = () => {
    navigate('/About');
  };

  return (
    <Container>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <HeroContent>
          <HeroText>
            <ContainerSpeechBubble variants={itemVariants}>
              <SpeechBubble
                text="¡Hola!"
                bgColor="var(--lavanda-light)"
                textColor="#000"
                angle="25deg"
              />
            </ContainerSpeechBubble>
            
            <motion.div variants={itemVariants}>
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
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Description>
                Creo experiencias web intuitivas y visualmente atractivas. 
                Apasionada por el diseño UX/UI y siempre aprendiendo nuevas tecnologías.
              </Description>
            </motion.div>
            
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
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <SecondaryButton onClick={() => navigate('/Projects')}>
                  <ArrowForward style={{ marginRight: '8px' }} />
                  Ver Proyectos
                </SecondaryButton>
              </motion.div>
            </ContainerIconsBtn>
            
            <motion.div variants={itemVariants}>
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
            </motion.div>
          </HeroText>
          
          <HeroImage variants={itemVariants}>
            <ProfileImage 
              src="https://res.cloudinary.com/dbotvxyzq/image/upload/v1738673390/stefania_de99fj.webp" 
              alt="Stefania Rosales" 
            />
          </HeroImage>
        </HeroContent>
        
        <ScrollIndicator onClick={scrollToNextSection}>
          <span>Scroll</span>
          <ScrollArrow />
        </ScrollIndicator>
      </motion.div>
    </Container>
  );
}

export default Start;
