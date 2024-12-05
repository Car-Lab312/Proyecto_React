import React from 'react'
import { useFetch } from '../UserAPIrest/APIrest';


export const CRUD_digimoncomponent = () => {
  const {data} = useFetch("https://digimon-api.vercel.app/api/digimon");  

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Desfirmar informe</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre Paciente</th>
            <th>Rut Paciente</th>
            <th>Fecha Procedimiento</th>
          </tr>
        </thead>
        <tbody>
          {data.map(digimon =>(
            <tr>
              <td>{digimon.name}</td>
              <td><img src={digimon.img} /></td>
              <td>{digimon.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
