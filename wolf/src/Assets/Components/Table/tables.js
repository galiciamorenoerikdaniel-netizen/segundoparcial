export default function Table() {
  return (
    <section className="documents-section">
      <h3>Documentos Recientes</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre del Documento</th>
            <th>Proyecto</th>
            <th>Última Modificación</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {/* Ejemplo fila */}
          <tr>
            <td>Plan de Marketing</td>
            <td>Proyecto A</td>
            <td>01/06/2024</td>
            <td>Activo</td>
            <td><button>Ver</button></td>
          </tr>
          {/* Agrega más filas como necesites */}
        </tbody>
      </table>
    </section>
  );
}