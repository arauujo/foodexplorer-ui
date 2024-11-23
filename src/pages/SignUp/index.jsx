import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import polygonImg from "../../assets/polygon.svg";

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
        <img src={polygonImg} alt="Logo" />
        <h1>food explorer</h1>
      </div>

      <Form onKeyDown={handleKeydown}>
        <h2 className="desktop-only">Crie sua conta</h2>
        <Input
          label="Seu nome"
          type="text"
          placeholder="Exemplo: Maria da Silva"
          autoComplete="name"
          onChange={e => setName(e.target.value)}
        />

        <Input
          label="Email"
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          autoComplete="email"
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          label="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
          autoComplete="new-password"
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Criar conta" onClick={handleSignUp} />

        <ButtonText title="Já tenho uma conta" onClick={handleSignIn} />
      </Form>
    </Container>
  );
}
