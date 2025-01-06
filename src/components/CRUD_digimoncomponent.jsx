import React, { useState } from "react";
import { useFetch } from '../server/APIrest';
import { Dropdown } from 'primereact/dropdown';
import '../Style/Style_digimon.css'
import DigiBay from '../../src/assets/digibay.png';

export function CRUD_digimoncomponent() {
  const [selectedCity, setSelectedCity] = useState(null);
  const { data } = useFetch("https://digi-api.com/api/v1/digimon");

  // Mapea los datos para que sean compatibles con ListBox
  const digimonOptions = data?.map(digimon => ({
    name: digimon.name, // Campo mostrado en el ListBox
    level: digimon.level, // Campo seleccionado (puede ser todo el objeto)
    img: digimon.image
  })) || [];

  return (
    <>
    <div className="contenedor-principal">
      <div className="digimon-buscar">
        <div className="tamaño-multi">
          <div className="name-digi">
            <h4>Nombre:</h4>
          </div>
          <div className="multi-digimon">
          <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={digimonOptions} optionLabel="name" 
                placeholder="Seleccione un digimon" className="w-full md:w-14rem" checkmark={true} highlightOnSelect={false} />
          </div>
        </div>
      </div>
    </div>
    <div className="digimon-mostrar-imagen">
      <div className="digibay">
        <img src={DigiBay} width="300" height="300" />
        <div className="multi-digimon">
          {selectedCity && (
            <div>
              <img className="digimon"
                src={selectedCity.img}
                alt={selectedCity.name}
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
      </>
  );
}
