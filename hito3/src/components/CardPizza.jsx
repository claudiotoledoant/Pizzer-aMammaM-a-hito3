const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body text-center">
        <h5 className="card-title fw-bold text-capitalize">{name}</h5>
        <hr />
        <p className="card-text text-secondary mb-1">🍕 Ingredientes:</p>
        <ul className="list-unstyled text-capitalize">
          {ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>
        <hr />
        <p className="fs-5 fw-bold text-dark">
          Precio: ${price.toLocaleString('es-CL')}
        </p>
        <div className="d-flex justify-content-around mt-3">
          <button className="btn btn-outline-dark btn-sm">Ver Más 👀</button>
          <button className="btn btn-dark btn-sm">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;