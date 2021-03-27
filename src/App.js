import Header from './components/Header';
import ProductContainer from './Containers/ProductContainer';
import MessageContainer from './Containers/MessageContainer';
import CartContainer from './Containers/CartContainer';
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <main id="mainContainer">
          <div className="container">
            <ProductContainer/>

            <MessageContainer/>

            <CartContainer/>
          </div>
          <Footer/>
        </main>
      </div>
    </div>
  );
}

export default App;
