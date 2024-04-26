import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import model from "../../../images/model.png"

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

const List = styled.li`
    margin-left : 2rem;
    display: list-item;
`
const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 12px 0px;
    gap: 12px;
`;

const Button = styled.a`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary};
    ${({ dull, theme }) => dull && `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: ${({ theme }) => theme.primary + 99};
    }
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
                    <ButtonGroup>
                        <Button href="https://cinesageinsights.azurewebsites.net/" target='new'>View Live Application</Button>
                    </ButtonGroup>

                    <Desc>This project aims to uncover a novel pathway for filmmakers make data-driven decisions using a predictive visualization tool. This tool takes into account variables such as plot premise, budget, star cast, release time-frame, and targeted geographies to predict and visualize a movie’s success and revenue. This has the potential to redefine movie production planning by combining data analysis and visualizations.</Desc>

                    <h3 style={{ textAlign: 'center' }}><b>Data Processing and Analysis</b> </h3>
                    <Desc>We started with the "The Movies Dataset" avaible on Kaggle. Initial analysis indicated that 70% of the revenue data is missing or incomplete. We augmented the dataset by scrapping the web and updating contrywise revenue for each movie. To convert textual data into a usable format for our models, we utilize a fine-tuned BERT model from HuggingFace,
                    known for its superior performance in text-related tasks. Numerical representations of the text are obtained by embedding movie plot summaries through BERT, and these embeddings serve as input features for our predictive models.</Desc>

                    <h3 style={{ textAlign: 'center' }}><b>Neural Network</b> </h3>
                    <Desc>The predictive revenue visualization aims to project revenue distribution across different countries. A neural network
architecture takes as input:</Desc>
<ul> 
                        <List>the BERT-generated plot embeddings</List>
                        <List>multi-hot vector for movie’s genres</List>
                        <List>one-hot vector for the movie’s original language</List>
                        <List>movie’s budget</List>
                        <List>multi-hot vector denoting the top cast members</List>
                    </ul>
                    <Image src= {model} alt="project-image" />

                    <Desc>These inputs are first individually embedded using linear layers to reduce dimension, then stacked and embedded again into a hidden layer. Another linear layer maps the hidden layer to the predicted revenue, Our model had an accuracy of </Desc>
        
                </Wrapper>
            </Container>

        </Modal>
    )
}

export default index