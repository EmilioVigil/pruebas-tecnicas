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
`;

const SectionInformation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #F8F3ED;
  padding: 20px;
  height: 45rem;
  width: 90rem;
  border-radius: 50px;

  @media (max-width: 1200px) {
    width: 80rem;
  }

  @media (max-width: 992px) {
    width: 70rem;
  }

  @media (max-width: 768px) {
    width: 60rem;
  }

  @media (max-width: 576px) {
    width: 90%;
  }
`;

const Title = styled.div`
  font-size: 20px;
  margin-left: 30px;
`;

const SectionMain = styled.section`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SectionContent = styled.div`
  height: 40rem;
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  div {
    h4 {
      font-size: 3rem;
    }

    p {
      color: #A1968F;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

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

  .link {
    text-decoration: none;
    color: black;
  }
`;

const SectionImage = styled.section`
  width: 60rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const GalleryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 30%;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 45%;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;

  ${ImageWrapper}:hover & {
    opacity: 1;
  }
`;

const ImageText = styled.p`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;

export {
  ContainerLanding,
  SectionInformation,
  Title,
  SectionMain,
  SectionContent,
  Button,
  SectionImage,
  GalleryContainer,
  ImageWrapper,
  Image,
  ImageOverlay,
  ImageText
}