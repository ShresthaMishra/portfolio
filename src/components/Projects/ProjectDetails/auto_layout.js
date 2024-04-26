import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import Constraints from '../../../images/constraints.png'

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

                    <Image src = {`${project?.image}`}></Image>
                
                    <Title>{project?.title}</Title>
                    <Date>{project.date}</Date>
                    <Tags>
                        {project?.tags.map((tag) => (
                            <Tag>{tag}</Tag>
                        ))}
                    </Tags>
                    <ButtonGroup>
                        <Button href="https://github.com/ShresthaMishra/JAutoLayout" target='new'>View Code</Button>
                    </ButtonGroup>
                    <Desc>Traditional layout managers in Swing necessitate users to explicitly code the size and position of components on the screen. Implementing complex layouts using these managers can become cumbersome, and debugging or code management can also become challenging.</Desc>

                    <Desc>JAutoLayout is a layout manager for Java Swing that calculates the size and position of components within containers based on linear equality and inequality constraints defined by the user. This constraint-based approach enables JAutoLayout to dynamically update components whenever there are changes, both externally and internally, to the container. External changes may include resizing the main window, while internal changes could involve resizing components within the main frame.</Desc>
                    
                    <Desc> JAutoLayout uses Apple’s Visual Format Language (VFL) as a means of defining the layout and constraints among components. The solver is a re-implementation of the Kiwi Constraint Solver, which itself is based on the Cassowary Constraint Solver.</Desc>

                    <Image_prototype src = {Constraints}></Image_prototype>

                    <Desc>The auto-layout functionality has been implemented in the JAutoLayout class. JAutoLayout implements the inbuilt LayoutManager interface and displays the component according to the constraints given by the user.
                    The layoutContainer() method inside the JAutoLayout class calls the solver.solve(constraint, parent.getHeight(), parent.getWidth()) method which returns a Hashmap with keys as the variable names given by the user and values as the coordinates and dimensions of that component. Once we get the constraints of each component, we then set the bounds of that component and add it to the parent component.</Desc>
                    
                    <Desc></Desc>
        
                </Wrapper>
            </Container>

        </Modal>
    )
}

export default index