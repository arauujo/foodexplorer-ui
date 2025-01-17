import { useState } from "react";
import { Container } from "./styles";

export function Button({ title, icon: Icon, iconSize = 32, onClick, ...rest }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await onClick();
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Container
      type="button"
      onClick={handleClick}
      disabled={isLoading}
      {...rest}
    >
      {Icon && <Icon size={iconSize} />}
      {isLoading ? "Carregando..." : title}
    </Container>
  );
}
