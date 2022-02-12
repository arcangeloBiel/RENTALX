import { Router } from "express";
import { Category } from "../model/Categoty";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository  = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {

const {name, description} = request.body;

const categoryAlreadExists = categoriesRepository.findByName(name);
if(categoryAlreadExists) {
 return response.status(400).json({error: "Categoria já existente"});
}
categoriesRepository.create({name, description});

return response.status(201).send();

});

categoriesRoutes.get("/", (request, response) => {
  const all =  categoriesRepository.listAll();
  return response.json(all);
});


export {categoriesRoutes}