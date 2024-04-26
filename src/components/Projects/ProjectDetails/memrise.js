import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import memriseImg from "../../../images/memrise.png"
import gamefied from "../../../images/gamified.png"
import reading from "../../../images/reading_assessment.png"
import listening from "../../../images/listening_assessment.png"
import speaking from "../../../images/speaking_assessment.png"
import writing from "../../../images/written_assessment.png"

const Container = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: #000000a7;
display: flex;
align-items: top;
justify-content: center;
overflow-y: scroll;
transition: all 0.5s ease;
overflow-y: scroll;
overflow-x: hidden;
`;

const Wrapper = styled.div`
max-width: 800px;
width: 100%;
border-radius: 16px;
margin: 50px 12px;
height: min-content;
background-color: ${({ theme }) => theme.card};
color: ${({ theme }) => theme.text_primary};
padding: 20px;
display: flex;
flex-direction: column;
position: relative;
overflow-y: scroll;
overflow-x: hidden;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
      font-size: 24px;
      margin: 6px 6px 0px 6px;
  }
`;

const Date = styled.div`
    font-size: 16px;
    margin: 2px 6px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`



const Desc = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin: 6px 6px;
    }
`;

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
    margin-top: 30px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
`;
const Image_prototype = styled.img`
    width: 80%;
    object-fit: cover;
    border-radius: 12px;
    margin-top: 30px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    display: block; 
    margin-left: auto; 
    margin-right: auto; 
    padding-bottom: 1rem;
`;


const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px;
    @media only screen and (max-width: 600px) {
        margin: 4px 0px;
    }
`;

const Tag = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    margin: 4px;
    padding: 4px 8px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary + 20};
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;








const index = ({openModal, setOpenModal}) => {
    const project = openModal?.project;
    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <Container>
                <Wrapper>
                    <CloseRounded
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "20px",
                            cursor: "pointer",
                        }}
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />

                    <Image src= {`${project?.image}`} alt="project-image" />
                    <Title>{project?.title}</Title>
                    <Date>{project.date}</Date>
                    <Tags>
                        {project?.tags.map((tag) => (
                            <Tag>{tag}</Tag>
                        ))}
                    </Tags>
                    <Desc>Memrise is a language platform that uses spaced flashcards and short videos to improve learning rate among learners. For this project we decided to add Five additional features to the app that would improve the overall perfomance of the applicaiton. We incorporated Learning Sciences Principles to design features and that will take into account the Prior knowledge of a learner and customize learning outcomes accordingly. </Desc>
                    <h3><b>Features Incorporated</b></h3>
                    <ul>
                        <li>
                            <b>Speaking Assessment</b>: Learners are asked to repeat sentences and read texts presented to them.
                            <Image_prototype src = {speaking}></Image_prototype>
                        </li>
                        <li><b>Listening Assessment</b>: Learners are asked to listen to an audio clip and answer questions
                            <Image_prototype src = {listening}></Image_prototype>
                        </li>
                        <li><b>Reading Assessment</b>: Learners are asked to read a short paragraph and answer questions
                        <Image_prototype src = {reading}></Image_prototype>
                        </li>
                        <li><b>Writing Assessment</b>: Learners are asked to write words in native script
                        <Image_prototype src = {writing}></Image_prototype>
                        </li>
                        <li><b>Gamified Assessment</b>: Learners can skip levels by planing interactive games like escape rooms, puzzle solving etc.
                        <Image_prototype src = {gamefied}></Image_prototype>
                        </li>
                    </ul>
        
                </Wrapper>
            </Container>

        </Modal>
    )
}

export default index