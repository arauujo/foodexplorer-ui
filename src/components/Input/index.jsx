import { Container } from "./styles";

export function Input({ icon: Icon, className, ...rest }) {
  return (
    <Container className={`${className} ${Icon ? "has-icon" : ""}`}>
      <div className="input-wrapper">
        {Icon && <Icon size={20} />}
        <input {...rest} />
      </div>
    </Container>
  );
}
