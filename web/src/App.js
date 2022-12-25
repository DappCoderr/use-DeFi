import './styles/App.css';
import Content from './component/content';
import Footer from './component/footer';
import Header from './component/header';

function App() {

  return (
    <div className="App">
      <Header />
      <Content title={"hello"} subtitle={"hello"} />
      <Footer />
    </div>
  );
}

export default App;
