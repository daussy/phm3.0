import './App.scss';


import Nav from './nav/Nav';
import Content from './content';
import Footer from './footer';

function App() {
  return (
    <div className="container">
      <Nav></Nav>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
