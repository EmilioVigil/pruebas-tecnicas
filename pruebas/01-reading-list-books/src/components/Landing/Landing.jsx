import { Link } from "react-router-dom"

import {
    ContainerLanding,
    SectionInformation, Title, SectionMain, SectionContent, Button
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
                            <Link to={'/home'}>
                                Ingresar
                            </Link>
                        </Button>
                    </SectionContent>
                    <div>
                        section imagenes
                    </div>

                </SectionMain>

            </SectionInformation>
        </ContainerLanding>
    )
}