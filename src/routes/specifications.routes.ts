import {  Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecifikcarionService";

const specificationsRouter = Router();

const specificarionsRepository = new SpecificationRepository();

specificationsRouter.post("/", (request, response) => {
    const {name, description} = request.body;

    const createSpecificationService = new CreateSpecificationService(specificarionsRepository);
    createSpecificationService.execute({name, description});
    return response.status(201).send();
});

export { specificationsRouter };