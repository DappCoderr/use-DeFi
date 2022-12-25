import './App.css';
import Content from './component/content';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="container-h">
          <h1>usedefi</h1>
        </div>
      </div>
      <Content />
      <div className="footer">
        <div className="container-f">
          <h1>build with ❤️ for you</h1>
          <h1>keep learning and keep building</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
