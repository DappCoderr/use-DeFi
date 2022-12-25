import './App.css';
import Content from './component/content';
import Footer from './component/footer';
import Header from './component/header';

function App() {
  const title = "Bignners Track"
  const subtitle = "Level 1"
  return (
    <div className="App">
      <Header />
      <Content title={title} subtitle={subtitle} />
      <Footer />
    </div>
  );
}

export default App;
