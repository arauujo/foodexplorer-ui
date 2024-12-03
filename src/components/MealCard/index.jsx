import {
  PiPencilSimple,
  PiHeartStraight,
  PiCaretRightBold,
  PiMinusBold,
  PiPlusBold,
} from "react-icons/pi";
import { Button } from "@components";
import { Container, TitleSection, Actions } from "./styles";

export function MealCard({
  name,
  description,
  price,
  imageUrl,
  isAdmin = false,
}) {
  const formatPrice = price => {
    return parseFloat(price).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <Container>
      <button className="favorite-button">
        {isAdmin ? <PiPencilSimple size={29} /> : <PiHeartStraight size={29} />}
      </button>

      <img src={imageUrl} alt={name} />

      <TitleSection>
        <h3>{name}</h3>

        <button
          className="details-button"
          aria-label={`Ir para detalhes de ${name}`}
        >
          <PiCaretRightBold />
        </button>
      </TitleSection>

      <p className="desktop-only">{description}</p>

      <span className="price">{formatPrice(price)}</span>

      {!isAdmin && (
        <Actions>
          <button className="adjust-buttons minus">
            <PiMinusBold size={24} />
          </button>

          <span className="quantity">01</span>

          <button className="adjust-buttons plus">
            <PiPlusBold size={24} />
          </button>

          <Button title="incluir" className="add-button" />
        </Actions>
      )}
    </Container>
  );
}
