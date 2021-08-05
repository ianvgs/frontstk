import { render, screen } from '@testing-library/react';
import App from './App';

test('Renderiza a imagem do logo', () => {
  render(<App />);
  const img = screen.getByAltText("img");  
});
