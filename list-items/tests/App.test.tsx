import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App';

describe('<App />', () => {
  // test('Should work', () => {
  //   const { getByText } = render(<App />);

  //   expect(
  //     getByText('Lista de elementos')
  //   ).toBeDefined();
  // });

  test('Should add items and remove them', async () => {
    const user = userEvent.setup();

    render(<App />);

    // Buscar el input
    const input = await screen.findByRole('textbox');
    expect(input).toBeDefined();

    // Buscar el form
    const form = screen.getByRole('form');
    expect(form).toBeDefined();

    const button = form.querySelector('button');
    expect(button).toBeDefined();

    // Escribe en el input
    const textRandom = crypto.randomUUID();
    await user.type(input, textRandom);
    await user.click(button!);

    // asegurar que el elemento se ha agregado
    const list = screen.getByRole('list');
    expect(list).toBeDefined();
    expect(list.childNodes.length).toBe(1);

    // eliminar un elemento
    const item = screen.getByText(textRandom).parentNode;
    expect(item).toBeDefined();
    const removeButton = item?.querySelector('button');
    expect(removeButton).toBeDefined();

    await user.click(removeButton!);

    const noResults = screen.getByText('Aún no hay elementos');
    expect(noResults).toBeDefined();
  });
});
