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
        await Mysql.query("INSERT INTO cliente set ?",[req.body]);
        res.json({
          message: "Cliente Creado",
        });
      } catch(error) {
        console.log("Error: " + error);
      }
      
    }

    public async delete(req: Request, res: Response): Promise<void> {
      try {
        await Mysql.query("DELETE FROM cliente WHERE num_identificacion=?",[req.params.num_id]);
        res.json({
          message: "Cliente Eliminado",
        });
      } catch(error) {
        console.log("Error: " + error);
      }
    }

    public async update(req: Request, res: Response): Promise<void> {
      try {
        await Mysql.query("UPDATE cliente set ? WHERE num_identificacion=?",[req.body, req.params.num_id]);
        res.json({
          message: "Cliente Actualizado",
        });
      } catch(error) {
        console.log("Error: " + error);
      }
    }
}

export const productsController = new ProductsController();