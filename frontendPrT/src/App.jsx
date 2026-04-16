import './App.css';
import HomePage from './Page/HomePage';
import { GlobalVideoProvider } from './Context/VideoContext';

const App = () => {
  return (
    <GlobalVideoProvider>
      <div className="h-screen text-white text-center p-2">
        <HomePage />
      </div>
    </GlobalVideoProvider>
  );
};


export default App;
