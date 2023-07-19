import { Link } from "react-router-dom"

import {
    ContainerLanding,
    SectionInformation, Title, SectionMain,
    SectionContent, Button, SectionImage,
    GalleryContainer,
    ImageWrapper,
    Image,
    ImageOverlay,
    ImageText
} from "./Landing.styled"

export function Landing() {
    return (
        <ContainerLanding>
            <SectionInformation>
                <Title>
                    <h1>
                        Books
                    </h1>
                </Title>

                <SectionMain>
                    <SectionContent>
                        <div>
                            <h4>
                                New Book List
                            </h4>
                            <p>Explore the new covers and authors</p>
                        </div>
                        <Button>
                            <Link to={'/home'} className="link">
                                Ingresar
                            </Link>
                        </Button>
                    </SectionContent>
                    <SectionImage>
                        <GalleryContainer>
                            <ImageWrapper>
                                <Image src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg" alt="imagen-landing-page-portada-libro" />
                                <ImageOverlay>
                                    <ImageText>Descripción del libro 1</ImageText>
                                </ImageOverlay>
                            </ImageWrapper>
                            <ImageWrapper>
                                <Image src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg" alt="imagen-landing-page-portada-libro" />
                                <ImageOverlay>
                                    <ImageText>Descripción del libro 2</ImageText>
                                </ImageOverlay>
                            </ImageWrapper>
                            <ImageWrapper>
                                <Image src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1641398308i/60038757.jpg" alt="imagen-landing-page-portada-libro" />
                                <ImageOverlay>
                                    <ImageText>Descripción del libro 3</ImageText>
                                </ImageOverlay>
                            </ImageWrapper>
                        </GalleryContainer>
                    </SectionImage>

                </SectionMain>

            </SectionInformation>
        </ContainerLanding>
    )
}