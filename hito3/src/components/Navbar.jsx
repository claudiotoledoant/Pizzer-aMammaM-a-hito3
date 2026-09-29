const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-3 text-warning" href="#">
          🍕 Pizzería Mamma Mia!
        </a>

        <div className="d-flex gap-2 me-auto">
          <button className="btn btn-outline-light btn-sm fw-semibold">🍕 Home</button>
          {token ? (
            <>
              <button className="btn btn-outline-light btn-sm fw-semibold">🔓 Profile</button>
              <button className="btn btn-outline-light btn-sm fw-semibold">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light btn-sm fw-semibold">🔐 Login</button>
              <button className="btn btn-outline-light btn-sm fw-semibold">🔐 Register</button>
            </>
          )}
        </div>

        <div>
          <button className="btn btn-outline-warning btn-sm text-warning fw-bold border-2">
            🛒 Total: ${total.toLocaleString('es-CL')}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;