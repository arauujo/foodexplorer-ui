import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import polygonImg from "../../assets/polygon.svg";

export function SignUp() {
  return (
    <Container>
      <div className="logo-container">
        <img src={polygonImg} alt="Logo" />
        <h1>food explorer</h1>
      </div>

      <Form>
        <h2 className="desktop-only">Faça login</h2>
        <Input
          label="Seu nome"
          type="text"
          placeholder="Exemplo: Maria da Silva"
        />

        <Input
          label="Email"
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
        />

        <Input
          label="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
        />

        <Button title="Criar conta" />

        <ButtonText title="Já tenho uma conta" />
      </Form>
    </Container>
  );
}
