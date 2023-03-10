import { Container, Card, Row, Text, Spacer } from "@nextui-org/react";
import { LoginButton } from "../../components/Buttons/Login";
import { LoginButtonDiscord } from '../../components/Buttons/LoginButtonDiscord'
import Link from 'next/link'

export default function Home() {
  return (
    <Container css={{ display:"flex", alignItems:'center', justifyContent:'center', marginTop:'$48' }} >
      <Card css={{ display: 'flex', maxWidth: 800, margin: 'auto' }} >
        <Card.Body>
          <Row justify="center" align="center">
            <Text h1 css={{ textAlign:'center'}} >
              Seja bem vindo ao <br/>
              <Text span css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
              }}>
                To Do List 
              </Text>
            </Text>
          </Row>
          <Card.Divider/>
          <Row align="center" justify="center">
            <Text size={'$2xl'} >Faça login para continuar</Text>
          </Row>
          <Spacer y={1.1} />
          <Row justify="center">
              <Link href='/Login' >
                <LoginButton text={'Login'}/>
              </Link>
          </Row>
          <Spacer y={0.7} />
          <Card.Divider />
          <Row justify="center"> 
            <Text size={'xl'} >Ou</Text>
          </Row>
          <Card.Divider />
          <Spacer y={0.7} />
          <Row justify="center">
            <LoginButtonDiscord/>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  )
}
