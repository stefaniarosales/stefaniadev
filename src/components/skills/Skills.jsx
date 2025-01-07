import React from 'react'

import { ContainerLineTitle, Line, Title } from '../about/aboutstyled'
import { Container, ContainerSkills,ContainerSoftSkills, ContainerTechnicalSkills, TitleSoftSkills, TitleTechnicalSkills } from './skillsstyled'

function Skills() {

return (
    <>
        <Container>
            <ContainerLineTitle>
                <Title>SKILLS</Title>
                <Line/>
            </ContainerLineTitle>
            <ContainerSkills>
                <ContainerTechnicalSkills>
                    <TitleTechnicalSkills>Habilidades técnicas</TitleTechnicalSkills>
                </ContainerTechnicalSkills>
                <ContainerSoftSkills>
                    <TitleSoftSkills>Habilidades blandas</TitleSoftSkills>
                </ContainerSoftSkills>
            </ContainerSkills>
        </Container>
    </>
)
}

export default Skills
