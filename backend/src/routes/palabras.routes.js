import { Router } from "express";
import { 
    getPalabras, 
    postPalabra, 
} from "../controllers/palabras.controllers.js";


const router = Router();

router.get('/palabra', getPalabras);

router.post('/palabra', postPalabra);

export default router;