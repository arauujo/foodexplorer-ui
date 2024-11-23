import { useNavigate } from "react-router-dom";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import polygonImg from "../../assets/polygon.svg";

export function SignIn() {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate("/register");
  };

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
          placeholder="Exemplo: exemplo@exemplo.com.br"
          autoComplete="email"
        />

        <Input
          label="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
          autoComplete="current-password"
        />

        <Button title="Entrar" />

        <ButtonText title="Criar uma conta" onClick={handleCreateAccount} />
      </Form>
    </Container>
  );
}
