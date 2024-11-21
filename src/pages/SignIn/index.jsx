import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import polygonImg from "../../assets/polygon.svg";

export function SignIn() {
  return (
    <Container>
      <div className="logo-container">
        <img src={polygonImg} alt="Logo" />
        <h1>food explorer</h1>
      </div>

      <Form>
        <h2 className="desktop-only">Faça login</h2>
        <Input
          label="Email"
          type="email"
          placeholder="Exemplo: exemplo@email.com.br"
        />

        <Input
          label="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
        />

        <Button title="Entrar" />

        <ButtonText title="Criar uma conta" />
      </Form>
    </Container>
  );
}
