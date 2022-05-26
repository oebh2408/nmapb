import { Router } from "express";
import { sedesController } from "../controllers/sedesControllers";

class SedesRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', sedesController.list);
    }

}

const sedesRoutes = new SedesRoutes();
export default sedesRoutes.router;