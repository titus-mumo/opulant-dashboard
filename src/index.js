import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { ChakraBaseProvider} from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ChakraBaseProvider>
        <Router>
          <App />
      </Router>
      </ChakraBaseProvider>
    </ChakraProvider>
  </React.StrictMode>
);


