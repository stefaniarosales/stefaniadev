import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

//styles
import { GlobalStyled } from './components/globalstyled/globalstyled.js'

createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyled/>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </>,
);
