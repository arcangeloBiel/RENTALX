import fs from "fs";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
const csv = require("csv-parser");
interface IImportantCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportantCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categoriesImp: IImportantCategory[] = [];
      const parseFile = csv();

      stream.pipe(parseFile);

      parseFile.on("data", async (data) => {
          categoriesImp.push(data);
        })
        .on("end", () => {
          resolve(categoriesImp);
        })
        .on("error", (err) => {
          reject(err);
        });

      //    fim
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    console.log(categories);
    categories.map(async (categoty) => {
      const { name, description } = categoty;

      const existCategory = this.categoriesRepository.findByName(name);

      if (existCategory) {
        this.categoriesRepository.create({
          name,
          description,
        });
      }
    });
  }
}

export { ImportCategoryUseCase };
