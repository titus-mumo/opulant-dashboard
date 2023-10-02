import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { CookiesProvider } from 'react-cookie';
import { AppContextWrapper } from './context/userContext';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextWrapper>
      <CookiesProvider>
        <Router>
          <ScrollToTop />
          <App />
        </Router>
      </CookiesProvider>
    </AppContextWrapper>
  </React.StrictMode>
);


