// Componente de tabla
function Tabladesfirmar() {
  const [rows, setRows] = React.useState([
    { name: 'John Doe',     id: 1, date: '2024-07-12', isUnfirmed: false },
    { name: 'Jane Smith',   id: 2, date: '2024-02-25', isUnfirmed: false },
    { name: 'Mike Johnson', id: 3, date: '2024-11-15', isUnfirmed: false  },
  ]);
  const [message, setMessage] = React.useState('');
  
  // Marcar una fila como "desfirmada" con un tipo específico
  const unfirmRow = (name, type) => {
    setRows(rows.map(row => 
      row.name === name ? { ...row, isUnfirmed: true } : row
    ));

    // Generar un mensaje personalizado basado en el tipo
    let actionMessage = '';
    if (type === 'medico') {
      actionMessage = `El informe médico del paciente ${name}, ha sido desfirmado correctamente.`;
    } else if (type === 'enfermeria') {
      actionMessage = `El informe de enfermería del paciente ${name}, ha sido desfirmado correctamente.`;
    } else if (type === 'ambos') {
      actionMessage = `Ambos informes del paciente ${name}, han sido desfirmados correctamente.`;
    }

    setMessage(actionMessage);
    setTimeout(() => setMessage(''), 3000); // Limpia el mensaje después de 3 segundos
  };

  const getRandomDate = (startYear, endYear) => {
    const start = new Date(startYear, 0, 1).getTime();
    const end = new Date(endYear, 11, 31).getTime();
    const randomTimestamp = Math.floor(Math.random() * (end - start)) + start;
    return new Date(randomTimestamp).toISOString().split('T')[0];
  };

  const addRow = () => {
    const newRow = {
      id: rows.length + 1,
      name: 'New Person',
      date: getRandomDate(),
    };
    setRows([...rows, newRow]);
  };
  
    const removeRow = (id) => {
      setRows(rows.filter(row => row.id !== id));
    };

    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Desfirmar informe</h1>
        {message && <p style={{ color: 'green', fontWeight: 'bold' }}>{message}</p>} {/* Mensaje de confirmación */}
        <table>
          <thead>
            <tr>
              <th>Nombre Paciente</th>
              <th>Rut Paciente</th>
              <th>Fecha Procedimiento</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row.id} style={{ backgroundColor: row.isUnfirmed ? '#f8d7da' : 'white' }}>
                <td>{row.name}</td>
                <td>{row.id}</td>
                <td>{row.date}</td>
                <td>
                  <button onClick={() => unfirmRow(row.name, 'medico')} disabled={row.isUnfirmed}>Desfirmar informe medico</button>
                  <button onClick={() => unfirmRow(row.name, 'enfermeria')} disabled={row.isUnfirmed}>Desfirmar informe Enfermeria</button>
                  <button onClick={() => unfirmRow(row.name, 'ambos')} disabled={row.isUnfirmed}>Desfirmar Ambos Informes</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  ReactDOM.createRoot(document.getElementById('root')).render(<Tabladesfirmar />);
  