import { ICategoriesRepository } from "../src/repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  //inversão de dependência
  constructor(private categoriesRepository: ICategoriesRepository) {}
  
  execute({ name, description }: IRequest): void {
   
    const categoryAlreadExists = this.categoriesRepository.findByName(name);
    if (categoryAlreadExists) {
      throw new Error("Categotia já existe !");
    }
    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
