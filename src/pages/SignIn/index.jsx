import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Container, Form } from "./styles";
import { Logo } from "../../components/Logo";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  const handleSignIn = () => {
    signIn({ email, password });
  };

  const handleKeydown = evt => {
    if (evt.key === "Enter") {
      handleSignIn();
    }
  };

  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <Container>
      <div className="logo-container">
        <Logo />
        <h1>food explorer</h1>
      </div>

      <Form onKeyDown={handleKeydown}>
        <h2 className="desktop-only">Faça login</h2>

        <div className="input-container">
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            autoComplete="email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="input-container">
          <Label>Senha</Label>
          <Input
            type="password"
            placeholder="No mínimo 6 caracteres"
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <Button title="Entrar" onClick={handleSignIn} />

        <ButtonText title="Criar uma conta" onClick={handleSignUp} />
      </Form>
    </Container>
  );
}
