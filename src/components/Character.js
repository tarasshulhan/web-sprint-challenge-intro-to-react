// Write your Character component here
import React from 'react';
import styled, {keyframes} from 'styled-components';

const kf = keyframes`
  50% {
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const StyledCharacter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10%;
  margin-right 10%;
  font-size: 2.1rem;
  background-color: rgba(192, 192, 192, 0.2);
  padding-left: 3%;
  padding-right: 3%;

  transform: scale(2); //-> start of animation
  opacity: 0; //-> start of animation
  animation: ${kf} 0.4s ease-in-out forwards;
  
`
const StyledName = styled.p`

`
const StyledAge = styled.p`
  color: white;
`

const Character = props => {
    const { name, birth_year } = props;
  
    return (
      <StyledCharacter>
        <StyledName>{name}</StyledName>
        <StyledAge>{birth_year}</StyledAge>
      </StyledCharacter>
    );
  };
  
  export default Character;