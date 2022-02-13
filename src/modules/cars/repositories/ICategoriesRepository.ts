import { Category } from "../model/Categoty";

interface ICreateCategoryDTO {
  name: string,
  description: string
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  listAll(): Category[];
  create({name, description} : ICreateCategoryDTO): void
}

export {ICategoriesRepository, ICreateCategoryDTO};