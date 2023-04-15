import styled from 'styled-components';

const Container = styled.div`
background-color: #CCCCCC; 
min-height: 100vh; 
display: flex; 
align-items: center; 
justify-content: center; 
flex-direction: column;
`;

const Title = styled.h1`
font-family: 'Bona Nova', sans-serif; 
font-weight: bold; 
font-size: 3rem; 
margin-bottom: 4rem; 
color: #151515;

@media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Input = styled.input`
padding: 1rem; 
font-size: 1.5rem; 
border-radius: 10px; 
border: none; 
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25); 
margin-bottom: 4rem;
background-color: white;
color: #333333;


@media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
padding: 1rem 2rem; 
margin-top: 1.5rem;
font-size: 1.5rem; 
border-radius: 10px; 
border: none; 
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25); 
background-color: #292929; 
color: #FFFFFF; 
cursor: pointer;

@media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const List = styled.ul`
display: flex;
flex-direction: row;
margin-top: 3rem;
`;

const ListItem = styled.li`
margin-right: 1rem;
font-size: 16px;
line-height: 1.5;
margin-bottom: 8px;


@media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const ButtonList = styled.button`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  background-color: #FFE7E7;
  color: #151515;
  cursor: pointer;

  
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;


export { Container, Title, Input, Button, List, ListItem, ButtonList};
