import { ThemeProvider, createGlobalStyle } from 'styled-components';
import ReactDOM from 'react-dom/client';
import App from './App';

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inconsolata;
}
`;

const theme = {
  colors: {
    primary: '#0f0',
    secondary: '#00f',
  },
};

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>,
  );
} else {
  console.error('Root element not found');
}
