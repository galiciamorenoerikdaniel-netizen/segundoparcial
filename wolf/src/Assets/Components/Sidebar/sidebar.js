import { useState } from "react";
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaReact, FaBars } from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [spinning, setSpinning] = useState(false);

  const toggleSidebar = () => {
    setSpinning(true);
    setIsOpen(!isOpen);
    setTimeout(() => setSpinning(false), 500);
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="logo-container">
        <FaReact className={`logo-icon ${spinning ? 'spin' : ''}`} />
        <span className="logo-text">Lobil</span>
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>
      <nav className="sidebar-nav">
        <a href="#inicio"><FaHome /> {isOpen && 'Inicio'}</a>
        <a href="#perfil"><FaUser /> {isOpen && 'Perfil'}</a>
        <a href="#config"><FaCog /> {isOpen && 'Configuración'}</a>
        <a href="#logout"><FaSignOutAlt /> {isOpen && 'Cerrar sesión'}</a>
      </nav>
    </aside>
  );
}
