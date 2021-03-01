import logo from './logo.svg';
import './App.css';
import './components/NavBar/NavBar';
import LeftSection from './components/leftSection/leftSection';
import MiddleSection from './components/MiddleSection/MiddleSection';
import RightSection from './components/RightSection/RightSection';

function App() {
  return (
    <div className="container">
      <LeftSection />
      <MiddleSection />
      <RightSection />
    </div>
  );
}

export default App;
