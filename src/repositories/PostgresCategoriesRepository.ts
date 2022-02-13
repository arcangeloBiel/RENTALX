import { Category } from "../model/Categoty";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository{
    
    findByName(name: string): Category {
        console.log(name);
        return null;
    }
    listAll(): Category[] {
        return null;
    }
    create({name, description}: ICreateCategoryDTO): void {
        console.log(name, description);
    }
}

export { PostgresCategoriesRepository };