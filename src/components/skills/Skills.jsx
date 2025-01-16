import React from 'react';
import { 
    Container,
    ContainerSkills,
    ContainerSoftSkills,
    ContainerTechnicalSkills, 
    SubContainerTechnicalSkills,
    SubContainerSoftSkills, 
    TitleSoftSkills, 
    TitleTechnicalSkills,
    ContainerIllustrationTitle,
    Illustration,
    SoftSkillItem,
    TitleIllustration,
    TechnicalSkillItem,
    TechnicalSkillImage,
} from './skillsstyled';
import { ContainerLineTitle, Line, Title } from '../about/aboutstyled';
import LetterComponent from '../UI/LetterComponent';

function Skills() {
    return (
        <Container>
            <ContainerLineTitle>
                <LetterComponent>S</LetterComponent>
                <Title>SKILLS</Title>
                <Line />
            </ContainerLineTitle>
            <ContainerSkills>
            <ContainerTechnicalSkills>
    <TitleTechnicalSkills>Habilidades técnicas</TitleTechnicalSkills>
    <SubContainerTechnicalSkills>
        {[
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
        ].map((item, index) => (
            <TechnicalSkillItem key={index}>
                <TechnicalSkillImage src={item.src} alt={item.title} />
            </TechnicalSkillItem>
        ))}
    </SubContainerTechnicalSkills>
</ContainerTechnicalSkills>

                <ContainerSoftSkills>
                    <TitleSoftSkills>Habilidades blandas</TitleSoftSkills>
                    <SubContainerSoftSkills>
                    {['Adaptación', 'Resolución de problemas', 'Trabajo en equipo', 'Creatividad'].map((skill, index) => (
            <SoftSkillItem key={index}>{skill.toUpperCase()}</SoftSkillItem>
        ))}
                    </SubContainerSoftSkills>
                </ContainerSoftSkills>
            </ContainerSkills>
        </Container>
    );
}

export default Skills;
