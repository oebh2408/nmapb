import {Request, Response} from 'express';
import Pool from 'mysql2/typings/mysql/lib/Pool';
import { Mysql } from '../database';

class ClientsController {

    public async list(req: Request, res: Response) {
        try {
          const clients = await Mysql.query("SELECT * FROM cliente");
          console.log(clients);
          res.json(clients[0]);
        } catch (error) {
          console.log(error);
          res.json({message: "Error"});
        }
    }

    public async listOne(req: Request, res: Response): Promise<any> {
      try {
        const clients = await Mysql.query("SELECT * FROM cliente WHERE num_identificacion=?", [req.params.num_id]);
        console.log(clients);
        if (clients.length > 0) {
          return res.json(clients[0]);
        }
        res.status(404).json({text: 'El cliente no existe'});
      } catch (error) {
        console.log(error);
        res.json({message: "Error"});
      }
    }

    public async create(req: Request, res: Response): Promise<void> {
      try {
        await Mysql.query("INSERT INTO cliente set ?",[req.body]);
        res.json({
          message: "Cliente Creado",
        });
      } catch(error) {
        console.log(error);
        res.json({message: "Error"});
      }
      
    }

    public async delete(req: Request, res: Response): Promise<void> {
      try {
        await Mysql.query("DELETE FROM cliente WHERE num_identificacion=?",[req.params.num_id]);
        res.json({
          message: "Cliente Eliminado",
        });
      } catch(error) {
        console.log(error);
        res.json({message: "Error"});
      }
    }

    public async update(req: Request, res: Response): Promise<void> {
      try {
        await Mysql.query("UPDATE cliente set ? WHERE num_identificacion=?",[req.body, req.params.num_id]);
        res.json({
          message: "Cliente Actualizado",
        });
      } catch(error) {
        console.log(error);
        res.json({message: "Error"});
      }
    }

    
}

export const clientsController = new ClientsController();