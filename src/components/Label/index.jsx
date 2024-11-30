import { Container } from './styles';

export function Label({ hidden, children, ...rest }) {
  return (
    <Container hidden={hidden} {...rest}>
      {children}
    </Container>
  );
} 