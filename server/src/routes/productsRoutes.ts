import { Router } from "express";
import { productsController } from "../controllers/productsControllers";

class ProductsRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', productsController.list);
        this.router.post('/', productsController.create);
        this.router.delete('/:num_id', productsController.delete);
        this.router.put('/:num_id', productsController.update)
    }

}

const productsRoutes = new ProductsRoutes();
export default productsRoutes.router;