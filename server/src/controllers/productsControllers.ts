import {Request, Response} from 'express';
import { Mysql } from '../database';

class ProductsController {

    public async list(req: Request, res: Response) {
        try {
          const products = await Mysql.query("SELECT * FROM cuentabancaria");
          console.log(products);
          res.json(products[0]);
        } catch (error) {
          console.log("Error DB: " + error);
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
      try {
        await Mysql.query("INSERT INTO cuentabancaria set ?",[req.body]);
        res.json({
          message: "Cuenta Creada",
        });
      } catch(error) {
        console.log("Error: " + error);
      }
      
    }

    public async delete(req: Request, res: Response): Promise<void> {
      try {
        await Mysql.query("DELETE FROM cuentabancaria WHERE id_cuenta=?",[req.params.num_id]);
        res.json({
          message: "Cuenta Eliminada ID" + req.params.id_cuenta,
        });
      } catch(error) {
        console.log("Error: " + error);
      }
    }

    public async update(req: Request, res: Response): Promise<void> {
      try {
        await Mysql.query("UPDATE cuentabancaria set ? WHERE id_cuenta=?",[req.body, req.params.num_id]);
        res.json({
          message: "Cuenta Actualizada ID "+ req.params.id_cuenta,
        });
      } catch(error) {
        console.log("Error: " + error);
      }
    }
}

export const productsController = new ProductsController();