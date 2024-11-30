import { FiMenu, FiSearch, FiLogOut } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";
import { useAuth } from "../../hooks/auth";
import { Button } from "../Button";
import { Label } from "../Label";
import { Input } from "../Input";
import polygonImg from "../../assets/polygon.svg";
import { Container, Menu, OrdersButton, OrderQuantity, Logout } from "./styles";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const isAdmin = false;

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  function handleLogoClick() {
    navigate("/test");
  }

  return (
    <Container>
      <Menu className="mobile-only">
        <FiMenu size={22} />
      </Menu>

      <div className="logo-container" onClick={handleLogoClick}>
        <img src={polygonImg} alt="Logo" />
        <h1>food explorer</h1>
        {isAdmin && <span>admin</span>}
      </div>

      <Label hidden={true} className="desktop-only">
        Busque por pratos ou ingredientes
      </Label>
      <Input
        className="desktop-only"
        placeholder="Busque por pratos ou ingredientes"
        icon={FiSearch}
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
        <FiLogOut size={32} />
      </Logout>
    </Container>
  );
}