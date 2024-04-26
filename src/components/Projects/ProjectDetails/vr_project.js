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

const Video = styled.iframe`
    width: 100%;
    height: 30em;
    object-fit: cover;
    border-radius: 12px;
    margin-top: 30px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
`;

const List = styled.li`
    margin-left : 2rem;
    display: list-item;
`








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

                    <Video src ="https://www.youtube.com/embed/sWBVHRUNRHk?si=3PFHEWPJJTjBiwGu"></Video>
                
                    <Title>{project?.title}</Title>
                    <Date>{project.date}</Date>
                    <Desc>Approximately 40% of the elderly population experiences memory loss. While it may be benign in some cases, individuals with severe memory impairment conditions such as Alzheimer's and dementia encounter significant challenges in their daily activities.</Desc>

                    <Desc>Preliminary studies indicate that interaction with objects or memories from the past can facilitate memory recall more effectively than traditional methods. However, customizing these objects can be costly, and obtaining access to an individual's environment, such as their home or personal photos, can be challenging."</Desc>

                    <Desc>This project aims to explore the effect of object interaction with individuals suffering from memory loss but in virtual environment. Initial user studies with 100 people indicate that people are able to recall around 50% of objects present in the simulated environments</Desc>
                    
                    Interactions Tested in the VR environment:
                    <ul> 
                        <List>Record Player</List>
                        <List>Traditional Lamp</List>
                        <List>Interactive Photo Gallary</List>
                        <List>Birthday Party Decoration</List>
                    </ul>
                    <Tags>
                        {project?.tags.map((tag) => (
                            <Tag>{tag}</Tag>
                        ))}
                    </Tags>
                    <Desc></Desc>
        
                </Wrapper>
            </Container>

        </Modal>
    )
}

export default index