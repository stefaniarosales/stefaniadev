import React from 'react';
import { motion } from 'framer-motion';
import { 
    Container,
    ContainerSkills,
    ContainerSoftSkills,
    ContainerTechnicalSkills, 
    SubContainerTechnicalSkills,
    SubContainerSoftSkills, 
    TitleSoftSkills, 
    TitleTechnicalSkills,
    SoftSkillItem,
    TechnicalSkillItem,
    TechnicalSkillImage,
} from './skillsstyled';
import { ContainerLineTitle, Line, Title } from '../about/aboutstyled';
import LetterComponent from '../UI/LetterComponent';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: 0.1 },
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

const technicalSkills = [
    { src: './technologies/html.svg', title: 'HTML' },
    { src: './technologies/css.svg', title: 'CSS' },
    { src: './technologies/javascript.svg', title: 'JavaScript' },
    { src: './technologies/styled-components.svg', title: 'Styled Components' },
    { src: './technologies/tailwind.svg', title: 'Tailwind' },
    { src: './technologies/bootstrap.svg', title: 'Bootstrap' },
    { src: './technologies/react.svg', title: 'React' },
    { src: './technologies/git.svg', title: 'Git' },
    { src: './technologies/github.svg', title: 'GitHub' },
    { src: './technologies/FIGMA.svg', title: 'Figma' },
    { src: './technologies/PS.svg', title: 'Photoshop' },
    { src: './technologies/AI.svg', title: 'Illustrator' }
];

const softSkills = ['Adaptación', 'Resolución de problemas', 'Trabajo en equipo', 'Creatividad'];

function Skills() {
    return (
        <Container>
            <ContainerLineTitle>
                <LetterComponent >S</LetterComponent>
                <Title>
                    {"SKILLS".split("").map((letter, index) => (
                        <span key={index} style={{ "--index": index }}>{letter}</span>
                    ))}
                </Title>
                <Line />
            </ContainerLineTitle>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <ContainerSkills>
                    <ContainerTechnicalSkills>
                        <TitleTechnicalSkills variants={itemVariants}>Habilidades técnicas</TitleTechnicalSkills>
                        <SubContainerTechnicalSkills>
                            {technicalSkills.map((item, index) => (
                                <motion.div key={index} variants={itemVariants}>
                                    <TechnicalSkillItem whileHover={{ scale: 1.1, y: -5 }}>
                                        <TechnicalSkillImage src={item.src} alt={item.title} />
                                    </TechnicalSkillItem>
                                </motion.div>
                            ))}
                        </SubContainerTechnicalSkills>
                    </ContainerTechnicalSkills>
                    <ContainerSoftSkills>
                        <TitleSoftSkills variants={itemVariants}>Habilidades blandas</TitleSoftSkills>
                        <SubContainerSoftSkills>
                            {softSkills.map((skill, index) => (
                                <motion.div key={index} variants={itemVariants}>
                                    <SoftSkillItem whileHover={{ scale: 1.05, y: -3 }}>{skill.toUpperCase()}</SoftSkillItem>
                                </motion.div>
                            ))}
                        </SubContainerSoftSkills>
                    </ContainerSoftSkills>
                </ContainerSkills>
            </motion.div>
        </Container>
    );
}

export default Skills;
