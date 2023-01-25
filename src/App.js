import './App.css';
import Counter from './Components/Counter';
import PureComponentCounter from './Components/PureComponentCounter';


function App() {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>PURE COMPONENT & HOC COMPONENT EXAMPLE WITH COUNTER INCREASE</h1>
      <PureComponentCounter/>
      <Counter/>
    </div>
  );
}

export default App;
