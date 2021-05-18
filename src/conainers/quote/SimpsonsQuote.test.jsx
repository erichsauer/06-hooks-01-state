import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import SimpsonsQuote from './SimpsonsQuote';

const server = setupServer(
  rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          quote:
            'Shoplifting is a victimless crime, like punching someone in the dark.',
          character: 'Nelson Muntz',
          image:
            'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185',
          characterDirection: 'Left',
        },
      ])
    );
  })
);

describe('SimpsonsQuote Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a fetched quote upon button click', async () => {
    render(<SimpsonsQuote />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    return waitFor(() => {
      screen.getByAltText('Nelson Muntz');
      screen.getByText(
        '"Shoplifting is a victimless crime, like punching someone in the dark." - Nelson Muntz'
      );
    });
  });
});
