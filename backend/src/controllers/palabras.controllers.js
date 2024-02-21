import {pool} from "../db.js"

export const getPalabras = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT original, COUNT(*) AS frecuencia FROM palabras GROUP BY original ORDER BY frecuencia DESC');
        res.json(rows);
    }catch(error){
        console.error('Error al procesar la solicitud:', error);
        return res.status(500).json({
            
            message: 'Algo salio malssss.'
        })
    }
};


export const postPalabra = async (req, res) => {
    const { original } = req.body;
  
    // Invertir la palabra
    const en_espejo = original.split('').reverse().join('');
  
    try {
      const [rows] = await pool.query('INSERT INTO palabras (original, en_espejo) VALUES (?, ?)', [original, en_espejo]);
      res.send({
        en_espejo,
      });
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
      return res.status(500).json({
        message: 'Algo salió mal.',
      });
    }
  };
  

