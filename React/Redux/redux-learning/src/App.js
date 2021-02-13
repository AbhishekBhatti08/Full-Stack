import logo from './logo.svg';
import './App.css';
import reducer from './Reduce/reducer';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement} from './Actions/actions';

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch= useDispatch();

  return (
    <div className="App">
        <p>Counter: {counter}</p>
        <button onClick={()=>{dispatch(decrement())}}>-</button>
        <button onClick={()=>{dispatch(increment())}}>+</button>
        <br></br>
        <br></br>
        {isLogged ? <p>Logged In Successfully</p> : "Incorrect Credentials"}
    </div>
  );
}

export default App;
