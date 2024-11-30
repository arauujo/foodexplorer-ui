import { Logo } from "../Logo";
import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <div className="logo-container">
        <Logo />
        <h2>food explorer</h2>
      </div>
      <span>© 2024 - Todos os direitos reservados.</span>
    </Container>
  );
}
