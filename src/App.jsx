//import './App.css'

// layouts
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

// Scroll al ID (hash)
import ScrollToHashElement from './components/ScrollToHashElement';

// react-router
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Perfil from './pages/Perfil'
import Home from './pages/Home';

function App() {
  return (
    <>
      <ScrollToHashElement />

      <Routes>

        {/* Redirección del inicio "/" hacia la ruta deseada */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Layout principal con Header y Footer */}
        <Route element={<MainLayout />}>

          <Route path="/home" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          
        </Route>

        {/* Layout para login sin Header/Footer */}
        <Route element={<AuthLayout />}>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
        </Route>

      </Routes>
    </>
  );
}

export default App;