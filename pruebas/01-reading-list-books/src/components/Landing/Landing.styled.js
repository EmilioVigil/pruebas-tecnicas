import styled, { keyframes } from 'styled-components';

// Animación para el hover
const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const ContainerLanding = styled.section`
    height: 100vh;
    background-color: #F2E4CF;
`

const SectionInformation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #F8F3ED;
  padding: 20px;
  height: 45rem;
  width: 90rem;
  border-radius: 5px;
  `
const Title = styled.div`
    font-size: 20px;

`

const SectionMain = styled.section`
    display:flex;
    flex-direction: row;
`

const SectionContent = styled.div`
    height: 40rem;
    width : 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    div{
        h4{
            font-size: 3rem;
        }

        p{
            color : #A1968F
        }

    }


`
const Button = styled.button`
  display: inline-block;
  padding: 12px 24px;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  border-radius: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #F2E4CF;
    animation: ${hoverAnimation} 1s infinite;
  }
`


export {
    ContainerLanding,
    SectionInformation,
    Title,
    SectionMain,
    SectionContent,
    Button
}