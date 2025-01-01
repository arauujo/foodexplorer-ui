import { Container } from "./styles";

export function ButtonText({ title, icon: Icon, iconSize = 22, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {title}
      {Icon && <Icon size={iconSize} />}
    </Container>
  );
}
