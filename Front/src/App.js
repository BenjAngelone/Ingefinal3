import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MiComponente = () => {
  const [valorInput, setValorInput] = useState('');
  const [palabraEnEspejo, setPalabraEnEspejo] = useState('');
  const [frecuencias, setFrecuencias] = useState([]);

  const handleInputChange = (event) => {
    setValorInput(event.target.value);
  };

  const enviarTextoAlBackend = () => {
    const urlBackend = 'https://ingefinal3-back-57jpbmfmwa-uc.a.run.app/api/palabra';
    
    fetch(urlBackend, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ original: valorInput }),
    })
    .then(response => response.json())
    .then(data => {
      // Establecer la palabra en espejo recibida del POST
      setPalabraEnEspejo(data.en_espejo);
  
      // Realizar la solicitud GET después de recibir la respuesta del POST
      axios.get(urlBackend, { params: { original: valorInput } })
        .then(response => {
          console.log('Respuesta del servidor:', response.data);
          // Establecer las frecuencias del GET
          setFrecuencias(response.data);
        })
        .catch(error => {
          console.error('Error al obtener las frecuencias:', error);
          // Aquí puedes manejar el error de acuerdo a tus necesidades
        });
    })
    .catch(error => {
      console.error('Error al enviar el texto al backend:', error);
      // Aquí puedes manejar el error de acuerdo a tus necesidades
    });
  };
  
  
  return (
    <div style={{ textAlign: 'center' }}>
      <input id="myinput"
        type="text"
        value={valorInput}
        onChange={handleInputChange}
        placeholder="Write somethig."
      />
      <button id="myboton" onClick={enviarTextoAlBackend}>Enviar al Backend</button>

      {palabraEnEspejo && (
        <p id="mytext">Palabra en espejo: {palabraEnEspejo}</p>
      )}

      <table style={{ margin: '20px auto', borderCollapse: 'collapse', width: '50%' }}>
        <thead>
          <tr>
            <th>Palabra</th>
            <th id="myfrecuencia">Frecuencia</th>
          </tr>
          </thead>
            <tbody>
              {frecuencias && frecuencias.map((item, index) => (
                <tr key={index}>
                  <td>{item.original}</td>
                  <td>{item.frecuencia}</td>
                </tr>
              ))}
            </tbody>
      </table>
    </div>
  );
};

export default MiComponente;
