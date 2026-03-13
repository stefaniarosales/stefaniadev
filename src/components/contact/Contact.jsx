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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const contactInfo = [
  { icon: <EmailIcon style={{ fontSize: '15px'}}/>, text: 'stefaniarosales@live.com' },
  { icon: <WhatsAppIcon style={{ fontSize: '15px'}}/>, text: '+54 11 2697 7959' },
  { icon: <LocationOn style={{ fontSize: '15px'}}/>, text: 'Argentina, Mendoza.' },
];

const socialLinks = [
  { href: "https://github.com/stefaniarosales", icon: <GitHub style={{ fontSize: '30px' }}/> },
  { href: "https://www.instagram.com/stefisua/", icon: <Instagram style={{ fontSize: '30px' }}/> },
  { href: "https://www.linkedin.com/in/stefaniarosales/", icon: <LinkedIn style={{ fontSize: '30px' }}/> },
];

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
              {contactInfo.map((item, index) => (
                <Data key={index}>
                  {item.icon}
                  {item.text}
                </Data>
              ))}
            </ContainerData>
            <ContainerIconsRedesSociales>
              {socialLinks.map((link, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <ContainerIcon
                    href={link.href}
                    target="_blank" 
                    rel="noopener noreferrer" 
                  >
                    {link.icon}
                  </ContainerIcon>
                </motion.div>
              ))}
            </ContainerIconsRedesSociales>
          </ContainerDataIcons>
          <Form/>
        </SubContainer>
      </motion.div>
    </Container>
  );
}

export default Contact;
