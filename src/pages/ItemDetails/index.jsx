import { useState } from "react";
import { Header, SideMenu, ButtonText, Button, Footer } from "@components";
import {
  PiCaretLeft,
  PiMinusBold,
  PiPlusBold,
  PiReceipt,
} from "react-icons/pi";
import { Container, Actions } from "./styles";
import { saladaRavanello } from "@assets/mealsTemp";

export function ItemDetails({ isAdmin = false }) {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const handleOpenMenu = () => setIsSideMenuOpen(true);
  const handleCloseMenu = () => setIsSideMenuOpen(false);

  const meals = [
    {
      id: 1,
      name: "Salada Ravanello",
      description:
        "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
      price: "49.97",
      imageUrl: saladaRavanello,
    },
  ];

  const formatPrice = price => {
    return parseFloat(price).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <Container>
      <Header onOpenMenu={handleOpenMenu} />
      <SideMenu isOpen={isSideMenuOpen} onClose={handleCloseMenu} />
      <main>
        <ButtonText
          className="back-button"
          icon={PiCaretLeft}
          iconSize={32}
          title="voltar"
        />

        <img src={saladaRavanello} />

        <div className="details">
          <h3>Salada Ravanello</h3>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O
            pão naan dá um toque especial.
          </p>
          <div className="ingredients-container">
            <span>alface</span>
            <span>cebola</span>
            <span>pão naan</span>
            <span>pepino</span>
            <span>rabanete</span>
            <span>tomate</span>
          </div>
        </div>

        <Actions>
          {isAdmin ? (
            <Button title="Editar prato" className="edit-button" />
          ) : (
            <>
              <button className="adjust-buttons minus">
                <PiMinusBold size={24} />
              </button>

              <span className="quantity">01</span>

              <button className="adjust-buttons plus">
                <PiPlusBold size={24} />
              </button>

              <Button
                icon={PiReceipt}
                iconSize="22"
                title={`pedir ∙ ${formatPrice(meals[0].price)}`}
                className="add-button"
              />
            </>
          )}
        </Actions>
      </main>
      <Footer />
    </Container>
  );
}
