import './App.css';
import HelloWorld from './HelloWorld';
import z, {x, y } from './export-default-test';
function App() {
  return (
      <div className="App">
          <div>App Component begins here</div>
          <hr />
          <HelloWorld />
          <hr />
          x: {x}
          <br />
          y: {y}
          <br/>
          Z: {z()}
          <hr />
          <div>App Component ends here</div>
    </div>
  );
}

export default App;
