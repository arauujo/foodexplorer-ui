import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "@services/api";
import { Logo, Label, Input, Button, ButtonText } from "@components";
import { Container, Form } from "./styles";

export function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const response = await api.post("/users", { name, email, password });
      alert(response.data.message);
      navigate("/");
    } catch (error) {
      if (error.response?.data) {
        return alert(error.response.data.message);
      }
      alert("Erro ao cadastrar o usuário!");
    }
  };

  const handleKeydown = evt => {
    if (evt.key === "Enter") {
      handleSignUp();
    }
  };

  const handleSignIn = () => {
    navigate("/");
  };

  return (
    <Container>
      <div className="logo-container">
        <Logo />
        <h1>food explorer</h1>
      </div>

      <Form onKeyDown={handleKeydown}>
        <h2 className="desktop-only">Crie sua conta</h2>

        <div className="input-container">
          <Label>Seu nome</Label>
          <Input
            type="text"
            placeholder="Exemplo: Maria da Silva"
            autoComplete="name"
            onChange={e => setName(e.target.value)}
          />
        </div>

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
            autoComplete="new-password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <Button title="Criar conta" onClick={handleSignUp} />

        <ButtonText title="Já tenho uma conta" onClick={handleSignIn} />
      </Form>
    </Container>
  );
}
