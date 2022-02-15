import { Category } from "../../model/Categoty";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.listAll();
    return categories;
  }
}

export { ListCategoriesUseCase };
