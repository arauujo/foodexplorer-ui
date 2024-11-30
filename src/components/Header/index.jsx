import { PiList, PiReceipt, PiMagnifyingGlass, PiSignOut } from "react-icons/pi";
import { useAuth } from "../../hooks/auth";
import { Logo } from "../Logo";
import { Button } from "../Button";
import { Label } from "../Label";
import { Input } from "../Input";
import { Container, Menu, OrdersButton, OrderQuantity, Logout } from "./styles";
import { useNavigate } from "react-router-dom";

export function Header({ onOpenMenu }) {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const isAdmin = false;

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  function handleLogoClick() {
    navigate("/");
  }

  return (
    <Container>
      <Menu className="mobile-only" onClick={onOpenMenu}>
        <PiList size={29} />
      </Menu>

      <div className="logo-container" onClick={handleLogoClick}>
        <Logo />
        <h1>food explorer</h1>
        {isAdmin && <span>admin</span>}
      </div>

      <Label hidden={true} className="desktop-only">
        Busque por pratos ou ingredientes
      </Label>
      <Input
        className="desktop-only"
        placeholder="Busque por pratos ou ingredientes"
        icon={PiMagnifyingGlass}
      />

      {!isAdmin && (
        <OrdersButton className="mobile-only">
          <PiReceipt size={32} />
          <OrderQuantity>0</OrderQuantity>
        </OrdersButton>
      )}

      <Button
        className="desktop-only"
        icon={PiReceipt}
        title={isAdmin ? "Novo prato" : "Pedidos (0)"}
      />

      <Logout className="desktop-only" onClick={handleSignOut}>
        <PiSignOut size={32} />
      </Logout>
    </Container>
  );
}
