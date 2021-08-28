import Head from 'next/head'
import Trabalhos from '../components/Trabalhos/trabalhos'
import Contatos from '../components/Trabalhos/contatos'
import { Container, Title, Cards, Subtitle , Contact} from '../styles/home'

export default function Home() {
  return (
    <>
    <head>
      <title>Meu CV</title>
    </head>
    <Container>
      <Title>Cesar da Silva</Title>
      <hr />
      <Subtitle>Bem vindo ao meu currículo, tenho 25 anos e sou estudante de Análise e Desenvolvimento de Sistemas.</Subtitle>
      <Cards>
      <Trabalhos
        title="In-Haus Logística"
        img="/inhaus.jpg"
        cargo="Assistente Administrativo"
        descri="Planejamento e controle de estoque"
        />
        <Trabalhos
        title="Grupo Petropolis"
        img="/gp.jpg"
        cargo="Operador Logístico II"
        descri="Atuei como almoxarife, cuidando da entrada e conferência de materiais, realização de inventário, entrega e baixa de materiais. Também tenho experiência com SAP nos módulos de WMS e MRP."
        />
        <Trabalhos
        title="Bravo Logística"
        img="/bravo.jpg"
        cargo="Assistente Administritativo"
        descri="Atuei como Assistente Administrativo PCE (Planejamento e Controle de Estoque), realizando a montagem das ordens de abastecimento de linhas de formulação e envase com base em cronograma. Também adquiri experiência em gestão de pessoas por gerir um time de operadores de empilhadeira."
        />
        <Trabalhos
        title="UNIUBE"
        img="/uniube.jpg"
        cargo="Auxiliar Administrativo"
        descri="Trabalhei no multiatendimento da Universidade, cuidando da logística do setor referente a documentação e arquivos, protocolos e requerimentos para diversas áreas. Também atuei no atendimento dos alunos, presencialmente e via telefone."
        />
      </Cards>    
      <Contatos/>
    </Container>
    </>
  )
}
