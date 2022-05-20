import { Router } from "express";
import { productsController } from "../controllers/productsControllers";

class ProductsRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/:num_id', productsController.list);
        this.router.get('/esp/:id_cuenta', productsController.getP);
        this.router.post('/', productsController.create);
        this.router.delete('/:id_cuenta', productsController.delete);
        this.router.put('/:id_cuenta', productsController.update)
    }

}

const productsRoutes = new ProductsRoutes();
export default productsRoutes.router;