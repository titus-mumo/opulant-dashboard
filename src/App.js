import { transitions } from 'react-alert';
import './App.css';
import { Header, Footer } from './components';
import { AllRoutes } from './routes/AllRoutes';

function App() {

  return (
    <div className="App bg-gray-50 dark:bg-gray-200">
      <Header />
      <main>
        <AllRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
