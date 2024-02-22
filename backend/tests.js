import { assert } from 'chai';
import fetch from 'node-fetch';

describe('Backend API Tests', () => {
    
    it('Testing Backend is up', async () => {
        const response = await fetch('http://localhost:8080/');
        const data = await response.json();

        assert.equal(response.status, 200);
    });

    it('PING PONG TEST', async () => {
        const response = await fetch('http://localhost:8080/ping');
        const data = await response.json();

        assert.equal(response.status, 200);
    });

    it('meter una palabra test', async () => {
        const palabra = {
            original: 'Test',
        };

        const postResponse = await fetch('http://localhost:8080/api/palabra', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(palabra)
        });

        assert.equal(postResponse.status, 200);
    });

    it("Get el json de frecuencia", async () => {
        const response = await fetch('http://localhost:8080/api/palabra');
        const data = await response.json();

        assert.equal(response.status, 200);
    });

    it('Guardar y recuperar palabra en forma espejo desde el POST', async () => {
        const palabraOriginal = 'Test';
        // Calculamos la palabra en espejo esperada según tu lógica de negocio
        // Por simplicidad, asumimos que es simplemente la palabra original invertida
        // Ajusta esto según cómo tu backend procesa la palabra en espejo
        const esperadoEnEspejo = "sss";

        const postResponse = await fetch('http://localhost:8080/api/palabra', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ original: palabraOriginal })
        });

        assert.equal(postResponse.status, 200, 'El POST de la palabra debe ser exitoso');

        const postData = await postResponse.json();
        // Verificamos que la palabra en espejo devuelta en la respuesta coincida con la esperada
        assert.equal(postData.en_espejo, esperadoEnEspejo, 'La palabra en espejo recibida debe coincidir con lo esperado');

        // Nota: No necesitas una solicitud GET separada si solo quieres verificar
        // la respuesta del POST según tu última descripción.
    });
    
    
});