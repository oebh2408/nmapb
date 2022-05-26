import {Request, Response} from 'express';
import { Mysql } from '../database';

class ProductsController {

    public async list(req: Request, res: Response) {
        try {
          const products = await Mysql.query("SELECT * FROM cuentabancaria WHERE fk_num_identificacion=?", [req.params.num_id]);
          res.json(products);
        } catch (error) {
          console.log(error);
          res.json({message: "Error"});
        }
    }

    public async getP(req: Request, res: Response): Promise<void> {
      try {
        const product = await Mysql.query("SELECT * FROM cuentabancaria WHERE id_cuenta=?", [req.params.id_cuenta]);
        res.json(product);
      } catch (error) {
        console.log(error);
        res.json({message: "Error"});
      }
    }

    public async create(req: Request, res: Response): Promise<void> {
      try {
        await Mysql.query("INSERT INTO cuentabancaria set ?",[req.body]);
        res.json({
          message: "Cuenta Creada",
        });
      } catch(error) {
        console.log(error);
        res.json({message: "Error"});
      }
      
    }

    public async delete(req: Request, res: Response): Promise<void> {
      try {
        await Mysql.query("DELETE FROM cuentabancaria WHERE id_cuenta=?",[req.params.id_cuenta]);
        res.json({
          message: "Cuenta Eliminada"
        });
      } catch(error) {
        console.log(error);
        res.json({message: "Error"});
      }
    }

    public async update(req: Request, res: Response): Promise<void> {
      try {
        await Mysql.query("UPDATE cuentabancaria set ? WHERE id_cuenta=?",[req.body, req.params.id_cuenta]);
        res.json({
          message: "Cuenta Actualizada"
        });
      } catch(error) {
        console.log(error);
        res.json({message: "Error"});
      }
    }
}

export const productsController = new ProductsController();