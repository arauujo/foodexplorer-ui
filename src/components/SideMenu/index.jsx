import { PiMagnifyingGlass, PiX } from "react-icons/pi";
import { useAuth } from "../../hooks/auth";
import { Label } from "../Label";
import { Input } from "../Input";
import { ButtonText } from "../ButtonText";
import { Container, Header, Button, Title } from "./styles";

export function SideMenu({ isOpen, onClose }) {
  const { signOut } = useAuth();
  const isAdmin = false;

  return (
    <Container data-menu-is-open={isOpen} className={"side-menu"}>
      <Header className="side-menu-header">
        <Button onClick={onClose}>
          <PiX size={29} />
        </Button>
        <Title>Menu</Title>
      </Header>
      <div className="side-menu-content">
        <Label hidden={true}>Busque por pratos ou ingredientes</Label>
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={PiMagnifyingGlass}
        />

        {isAdmin && <ButtonText title="Novo Prato" />}

        <ButtonText title="Sair" onClick={signOut} />
      </div>
    </Container>
  );
}
