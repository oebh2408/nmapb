import {Request, Response} from 'express';
import { Mysql } from '../database';

class SedesController {

    public async list(req: Request, res: Response) {
        try {
          const sedes = await Mysql.query("SELECT * FROM sede");
          console.log(sedes);
          res.json(sedes[0]);
        } catch (error) {
          console.log("Error DB: " + error);
        }
    }
}

export const sedesController = new SedesController();