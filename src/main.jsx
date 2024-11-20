import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './Pages/Home';
import GlobalStyle from './helpers/GlobalStyle';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
      <HomePage /> 
  </StrictMode>,
)
