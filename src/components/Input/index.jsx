import { Container } from "./styles";

export function Input({ label, icon: Icon, ...rest }) {
  return (
    <Container>
      <label>{label}</label>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  );
}
