import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Cart from './components/Cart.jsx';
// import Home from './components/Home.jsx';
// import LoginPage from './components/LoginPage.jsx';
// import RegisterPage from './components/RegisterPage.jsx';

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Navbar />

      {/* Para ver el Home con las 6 Cards descommenta <Home /> */}
      {/* <Home /> */}

      {/* Para evaluar el Carrito de compras: */}
      <Cart />

      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}

      <Footer />
    </div>
  );
};

export default App;