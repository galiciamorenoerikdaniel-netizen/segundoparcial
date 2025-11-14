import './App.css';
import Sidebar from './Assets/Components/Sidebar/sidebar';
import Topbar from './Assets/Components/Topbar/topbar';
import Card from './Assets/Components/Card/card';
import DocumentsTable from './Assets/Components/Table/tables';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-area">
        <Topbar />
        <main>
          <div className="welcome-text">
            <p>Log In</p>
            <p>Bienvenido a la app</p>
          </div>
          <div className="cards-container">
            {[...Array(4)].map((_, i) => (
              <Card key={i} title="Usuarios" value="42" />
            ))}
          </div>
          <DocumentsTable />
        </main>
      </div>
    </div>
  );
}

export default App;