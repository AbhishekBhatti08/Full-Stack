import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Input from './components/Input';
import SidePanel from './components/SidePanel/SidePanel';



function App() {
  return (
    <div className="App">

      <SidePanel />
      <div>
        <br></br>
        <Input />
        <br></br>
        <br></br>
        <p>Hello</p>
        <Button variant="primary">Primary</Button>
      </div>
      
    </div>
  );
}

export default App;
