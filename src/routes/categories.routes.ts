import { Router } from "express";

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post("/categories", (request, response) => {

const {name, descripition} = request.body;

categories.push({
    name,
    descripition
});

return response.status(201).send();

});

export {categoriesRoutes}