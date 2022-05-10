import { Router } from "express";
import { clientsController } from "../controllers/clientsControllers";

class ClientsRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', clientsController.list);
        this.router.get('/:num_id', clientsController.listOne)
        this.router.post('/', clientsController.create);
        this.router.delete('/:num_id', clientsController.delete);
        this.router.put('/:num_id', clientsController.update)
    }

}

const clientsRoutes = new ClientsRoutes();
export default clientsRoutes.router;