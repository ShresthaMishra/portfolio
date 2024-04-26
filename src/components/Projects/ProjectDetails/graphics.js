import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import Refl from  '../../../images/reflectance_object.png'
import ReflRes from  '../../../images/reflectance2.png'
import midpoint from  '../../../images/midpoint.png'
import midpoint1 from  '../../../images/midpoint1.png'
import midpoint2 from  '../../../images/midpoint2.png'
import midpoint4 from  '../../../images/midpoint4.png'
import Catmull from '../../../images/catmull.png';
import Catmull1 from '../../../images/catmull1.png';
import Catmull2 from '../../../images/catmull2.png';
import Catmull4 from '../../../images/catmull4.png';
import motion from '../../../images/motion.png';
import motion1 from '../../../images/motion1.png';


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

const Column = styled.div`
width: 100%;
display: inline-block; /* Display columns side by side */
padding: 1rem;
padding-top: 0px;
`
const ImageSide = styled.img`
    width: 100%;
    height: 17rem;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    padding-top: 0px;
`;

const ImageContainer = styled.div`
    width :100%;
    display : flex;
    padding: 1rem;
    padding-top: 0px;
    
`
const Description = styled.p`
text-align: center;
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

                    <Image src ={`${project?.image}`}></Image>
                
                    <Title>{project?.title}</Title>
                    <Date>{project.date}</Date>
                    <Tags>
                        {project?.tags.map((tag) => (
                            <Tag>{tag}</Tag>
                        ))}
                    </Tags>
                    <Desc>Rendering Objects on screen requires incorporating various physical aspects to make the object look realistic. This involves displaying shadow based on the source of light, Incorporating features like gloss, reflectance, mirror effect on objects based on their surface texture. Various subdivision techniques can also be used to smoothen the object. </Desc>
                    
                    <Desc> The first set of images are results of from the Ray Tracing Algorithm that incorporates features like gloss, mirror etc.</Desc>

                    <ImageContainer>
                    <Column>
                        <ImageSide src={Refl} alt="Image 1"></ImageSide>
                        <Description class="description">Primitive Objects with shadow</Description>
                    </Column>

                    <Column>
                        <ImageSide src={ReflRes} alt="Image 2"></ImageSide>
                        <Description class="description">Primitive Objects with Gloss and Mirror effect.</Description>
                    </Column>
                    </ImageContainer>

                    <Desc>Objects can also be made smooth to make them more look smooth and more realistic. There are several subdivision algorithms that can help smooth objects like loop subdivision, butterfly subdivision, midpoint subdivision, catmull clark subdivision etc. Catmull Clark is the most widely used subdivision algorithm used on meshes. below are the results from my implementation of Midpoint and Catmull-Clark subdivision</Desc>

                    <h3 style={{ textAlign: 'center' }}><b>Midpoint Subdivision</b> </h3>
                    <ImageContainer>
                    <Column>
                        <ImageSide src={midpoint} alt="Image 1"></ImageSide>
                        <Description class="description">Original Object</Description>
                    </Column>

                    <Column>
                        <ImageSide src={midpoint1} alt="Image 2"></ImageSide>
                        <Description class="description">Object after 1st Midpoint Subdivision</Description>
                    </Column>
                    </ImageContainer>

                    <ImageContainer>
                    <Column>
                        <ImageSide src={midpoint2} alt="Image 1"></ImageSide>
                        <Description class="description">Object after 2nd Midpoint Subdivision</Description>
                    </Column>

                    <Column>
                        <ImageSide src={midpoint4} alt="Image 2"></ImageSide>
                        <Description class="description">Object after 4th Midpoint Subdivision</Description>
                    </Column>
                    </ImageContainer>

                    <h3 style={{ textAlign: 'center' }}><b>Catmull-Clark Subdivision</b> </h3>

                    <ImageContainer>
                    <Column>
                        <ImageSide src={Catmull} alt="Image 1"></ImageSide>
                        <Description class="description">Original Object</Description>
                    </Column>

                    <Column>
                        <ImageSide src={Catmull1} alt="Image 2"></ImageSide>
                        <Description class="description">Object after 1st Catmull-Clark Subdivision</Description>
                    </Column>
                    </ImageContainer>

                    <ImageContainer>
                    <Column>
                        <ImageSide src={Catmull2} alt="Image 1"></ImageSide>
                        <Description class="description">Object after 2nd Catmull-Clark Subdivision</Description>
                    </Column>

                    <Column>
                        <ImageSide src={Catmull4} alt="Image 2"></ImageSide>
                        <Description class="description">Object after 4th Catmull-Clark Subdivision</Description>
                    </Column>
                    </ImageContainer>

                    <Desc>Objects can also be made to look like they are in motion by using the motion blur algorithm. In this algorithm, Objects are assigned timestamps indicating their positions at specific moments. When rays are cast into the scene, they carry time information to determine object positions. Interpolation blends object appearances across timestamps, creating motion blur. Contributions from intersecting rays at different timestamps are accumulated, resulting in a final image with realistic motion blur. Integrating timestamps enhances the accuracy of motion simulation in rendered scenes.</Desc>
                    
                    <ImageContainer>
                    <Column>
                        <ImageSide src={motion} alt="Image 1"></ImageSide>
                        <Description class="description">Jittered Object</Description>
                    </Column>

                    <Column>
                        <ImageSide src={motion1} alt="Image 2"></ImageSide>
                        <Description class="description">Effects of Motion Blur on the Sphere</Description>
                    </Column>
                    </ImageContainer>
                    
        
                </Wrapper>
            </Container>

        </Modal>
    )
}

export default index