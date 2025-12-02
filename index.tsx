import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import App from './App';

const theme = createTheme({
  colors: {
    brand: [
      '#fef3e3', // brand-light
      '#f7d9b8',
      '#f0bf8d',
      '#e9a562',
      '#f7941d', // brand-secondary
      '#d67e19',
      '#b56815',
      '#945211',
      '#6a1b1a', // brand-primary
      '#3a0e0d', // brand-dark
    ],
  },
  primaryColor: 'brand',
  fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  headings: {
    fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>
);
