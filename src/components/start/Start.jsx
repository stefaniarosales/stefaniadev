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
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "backOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.95,
  },
};

const socialVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.8 + i * 0.1, duration: 0.4 },
  }),
  hover: {
    scale: 1.15,
    transition: { duration: 0.2 },
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

  const socialLinks = [
    { href: "https://github.com/stefaniarosales", icon: <GitHub style={{ fontSize: '30px' }}/> },
    { href: "https://www.instagram.com/stefisua/", icon: <Instagram style={{ fontSize: '30px' }}/> },
    { href: "https://www.linkedin.com/in/stefaniarosales/", icon: <LinkedIn style={{ fontSize: '30px' }}/> },
  ];

  return (
    <Container>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ContainerName variants={itemVariants}>
          <ContainerSpeechBubble variants={itemVariants}>
            <SpeechBubble
              text="¡Hola!"
              bgColor="var(--lavanda-light)"
              textColor="#000"
              angle="25deg"
            />
          </ContainerSpeechBubble>
          <SubTitle variants={itemVariants}>Yo soy</SubTitle>
          <ContainerLineTitle variants={itemVariants}>
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
        <ContainerIconsBtn variants={itemVariants}>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
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
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={socialVariants}
                custom={i}
                whileHover="hover"
              >
                <ContainerIcon>{link.icon}</ContainerIcon>
              </motion.a>
            ))}
          </ContainerIconsRedes>
        </ContainerIconsBtn>
      </motion.div>
    </Container>
  );
}

export default Start;
