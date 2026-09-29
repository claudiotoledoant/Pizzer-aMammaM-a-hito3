import { useState } from 'react';
import { pizzaCart } from './pizzas.js';

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <div className="container my-5" style={{ maxWidth: '650px' }}>
      <div className="cart-card p-4 p-md-5">
        <h3 className="fw-bold mb-4 text-italian-green text-center">
          🇮🇹 Detalles del pedido 🇮🇹
        </h3>

        {cart.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-muted fs-5">El carrito está vacío 🍕</p>
          </div>
        ) : (
          <ul className="list-group list-group-flush mb-4">
            {cart.map((pizza) => (
              <li
                key={pizza.id}
                className="list-group-item d-flex justify-content-between align-items-center bg-transparent px-0 py-3 border-bottom"
              >
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={pizza.img}
                    alt={pizza.name}
                    className="pizza-img-thumb"
                  />
                  <div>
                    <h6 className="mb-0 fw-bold text-capitalize fs-5">
                      {pizza.name}
                    </h6>
                    <small className="text-muted">
                      ${pizza.price.toLocaleString('es-CL')} c/u
                    </small>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <span className="fw-bold me-2 text-dark fs-6">
                    ${(pizza.price * pizza.count).toLocaleString('es-CL')}
                  </span>

                  <button
                    className="btn btn-outline-danger btn-sm rounded-circle px-2 fw-bold"
                    style={{ width: '32px', height: '32px' }}
                    onClick={() => decreaseQuantity(pizza.id)}
                  >
                    -
                  </button>
                  <span className="fw-bold fs-6 px-1">{pizza.count}</span>
                  <button
                    className="btn btn-outline-success btn-sm rounded-circle px-2 fw-bold"
                    style={{ width: '32px', height: '32px' }}
                    onClick={() => increaseQuantity(pizza.id)}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="d-flex justify-content-between align-items-center pt-2">
          <h3 className="fw-bold mb-0">Total:</h3>
          <h3 className="fw-bold mb-0 text-italian-red">
            ${total.toLocaleString('es-CL')}
          </h3>
        </div>

        <button
          className="btn bg-italian-red text-white w-100 fw-bold fs-5 mt-4 py-2 rounded-3 shadow-sm"
          disabled={cart.length === 0}
        >
          Pagar Pedido 🍕
        </button>
      </div>
    </div>
  );
};

export default Cart;