import { Router } from "express";
import multer  from 'multer';
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();

const uplod = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request,response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/imports", uplod.single("file"), (request, response) => {
  const { file } = request;
  console.log("File ::", file);
   return response.send();
});


export {categoriesRoutes}