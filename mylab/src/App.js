import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './counter';
import Parent from './Parent';
import NumberCounter from './NumberCounter';
function App() {
  return (
    <div className="App">
     <Counter/>
     <Parent/>
     <NumberCounter/>
    </div>
  );
}

export default App;
