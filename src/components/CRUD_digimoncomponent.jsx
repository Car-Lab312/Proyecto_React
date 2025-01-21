import React, { useState, useEffect } from "react";
import ReactTooltip from 'react-tooltip';
import { useFetch } from '../server/APIrest';
import { Dropdown } from 'primereact/dropdown';
import DigiBay from '../../src/assets/digibay.png';
import '../Style/Style_digimon.css'

export function CRUD_digimoncomponent() {

  const [selectedDigimon, setSelectedDigimon] = useState(null);
  const [selectdigimonDetails, setselectdigimonDetails] = useState(null);
  const { data } = useFetch("https://digi-api.com/api/v1/digimon");

  // Mapea los datos para que sean compatibles con ListBox
  const digimonOptions = data?.map(digimon => ({
    info: digimon.href, // Campo mostrado en el ListBox
    id: digimon.id, // Campo mostrado en el ListBox
    name: digimon.name, // Campo mostrado en el ListBox
    img: digimon.image
  })) || [];

  useEffect(() => {
    if(selectedDigimon?.info){
      fetch(selectedDigimon.info)
      .then((res) => res.json())  
      .then((data) => setselectdigimonDetails(data))  
    }
  }, [selectedDigimon])

  console.log(selectdigimonDetails);
  
  return (
    <>
    <div className="contenido">
      <div className="digimon-mostrar-imagen">
        <div className="digibay">
          <img src={DigiBay} width="400" height="400" />
          <div className="multi-digimon">
            {selectedDigimon && (
              <div>
                <img className="digimon"
                  src={selectedDigimon.img}
                  alt={selectedDigimon.name}
                  style={{ width: "107px", height: "107px", objectFit: "cover" }}
                />
              </div>
            )}
          </div>
        </div>
        <div className="digifields">
          {selectdigimonDetails?.fields?.length > 0 &&(
          selectdigimonDetails.fields.map((digiimage) => (
            <div style={{textAlign: "center"}}>
              <img src={digiimage.image} data-tip={digiimage.name}  alt={digiimage.name} style={{padding: "2px", width: "60px", height: "60px"}}/>
            </div>
            ))
          )}
        </div>
        <div className="info">
          {selectdigimonDetails &&(
            <div>
              <p>{selectdigimonDetails.descriptions[1].description}</p>
            </div>
          )}
        </div>
      </div>
      <div className="contenedor-principal">
        <div className="digimon-buscar">
          <div className="tamaño-multi">
            <div className="name-digi">
              <h4>Nombre:</h4>
            </div>
            <div className="multi-digimon">
            <Dropdown value={selectedDigimon} onChange={(e) => setSelectedDigimon(e.value)} options={digimonOptions} optionLabel="name" 
                  placeholder="Seleccione un digimon" className="w-full md:w-14rem" checkmark={true} highlightOnSelect={false} />
            </div>
          </div>
          <div className="tamaño-multi">
            <div className="name-digi">
              <h4>Nombre:</h4>
            </div>
              {selectdigimonDetails?.priorEvolutions?.length > 0 &&(
              selectdigimonDetails.priorEvolutions.map((digievolucion) => (
            <div className="multi-digimon">
                <Dropdown value={selectdigimonDetails} onChange={(e) => setselectdigimonDetails(e.value)} options={digievolucion} optionLabel="name" 
                placeholder="Seleccione un digimon" className="w-full md:w-14rem" checkmark={true} highlightOnSelect={false} />
            </div>
              ))
            )}
          </div>
        </div>
    </div>
    </div>
      </>
  );
}
