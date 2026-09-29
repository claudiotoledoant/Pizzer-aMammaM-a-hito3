import Header from './Header.jsx'; // Si usas el Header o banner de la pizzería
import CardPizza from './CardPizza.jsx';
import { pizzas } from './pizzas.js';

const Home = () => {
  return (
    <div>
      {/* Header banner de Pizzería */}
      <Header />

      <div className="container my-5">
        <div className="row g-4">
          {pizzas.map((pizza) => (
            <div className="col-12 col-md-4" key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;