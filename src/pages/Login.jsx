import '../css/Login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulación: usuario/contraseña correctos son "admin"
    if (email === 'admin' && password === 'admin') {
      navigate('/home'); // Redirige al origen
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <section className="login-section d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* <div className="col-lg-5 d-none d-lg-block">
            <img
              src="/src/assets/img/login/login.jpg"
              alt="Login illustration"
              className="img-fluid rounded shadow"
            />
          </div> */}
          <div className="col-lg-5 col-md-8 col-sm-10">
            <div className="login-card shadow p-4 rounded">
              <h2 className="mb-4 text-center">Iniciar Sesión</h2>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Usuario</label>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    placeholder="admin"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="admin"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-success">Entrar</button>
                </div>
              </form>
              <div className="text-center mt-3">
                <a href="/Register">Registrate aquí</a>
              </div>
              <div className="text-center mt-3">
                <a href="#">¿Olvidaste tu contraseña?</a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
