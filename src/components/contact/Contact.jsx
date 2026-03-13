import React from 'react';
import { motion } from 'framer-motion';
import Form from './Form';
import { ContainerLineTitle, Title, Line } from '../about/aboutstyled';
import LetterComponent from '../UI/LetterComponent';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { LocationOn } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';
import { Instagram } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';

import {
  Container,
  SubContainer,
  ContainerIconsRedesSociales,
  ContainerData,
  Data,
  ContainerDataIcons,
  ContainerIcon,
} from './contactstyled';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 }
  },
};

function Contact() {
  return (
    <Container>
      <ContainerLineTitle>
        <LetterComponent top='-60px'>C</LetterComponent>
        <Title>
          {"CONTACT".split("").map((letter, index) => (
            <span key={index} style={{ "--index": index }}>{letter}</span>
          ))}
        </Title>
        <Line />
      </ContainerLineTitle>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SubContainer>
          <ContainerDataIcons>
            <ContainerData>
              <motion.div variants={itemVariants}>
                <Data>
                  <EmailIcon style={{ fontSize: '15px'}}/>
                  stefaniarosales@live.com
                </Data>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Data>
                  <WhatsAppIcon style={{ fontSize: '15px'}}/>
                  +54 11 2697 7959
                </Data>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Data>
                  <LocationOn style={{ fontSize: '15px'}}/>
                  Argentina, Mendoza.
                </Data>
              </motion.div>
            </ContainerData>
            <ContainerIconsRedesSociales>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.1 }}>
                <ContainerIcon href="https://github.com/stefaniarosales" target="_blank" rel="noopener noreferrer">
                  <GitHub style={{ fontSize: '30px' }}/>
                </ContainerIcon>
              </motion.div>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.1 }}>
                <ContainerIcon href="https://www.instagram.com/stefisua/" target="_blank" rel="noopener noreferrer">
                  <Instagram style={{ fontSize: '30px' }}/>
                </ContainerIcon>
              </motion.div>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.1 }}>
                <ContainerIcon href="https://www.linkedin.com/in/stefaniarosales/" target="_blank" rel="noopener noreferrer">
                  <LinkedIn style={{ fontSize: '30px' }}/>
                </ContainerIcon>
              </motion.div>
            </ContainerIconsRedesSociales>
          </ContainerDataIcons>
          <Form/>
        </SubContainer>
      </motion.div>
    </Container>
  );
}

export default Contact;
