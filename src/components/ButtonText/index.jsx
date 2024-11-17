import { Container } from "./styles";

export function ButtonText({ title, icon: Icon, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {title}
      {Icon && <Icon size={22} />}
    </Container>
  );
}
