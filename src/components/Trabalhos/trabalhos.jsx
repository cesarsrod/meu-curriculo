import { Container, Title, Image, Descriçao, Cargo } from './estilos'

const Trabalhos = ({title, img, cargo, descri}) => (
    <Container>
    <Title>
        {title}
    </Title>
    <Image src={img}/>
    <Cargo>{cargo}</Cargo>
    <Descriçao>{descri}</Descriçao>
    </Container>
)

export default Trabalhos

