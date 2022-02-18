import fs from 'fs';
import csvParse from 'csv-parser'

class ImportCategoryUseCase {
  
    execute(file: Express.Multer.File): void {
        const stream = fs.createReadStream(file.path);
        const parsefile = csvParse();
        stream.pipe(parsefile);
        parsefile.on("data", async (line) => {
          console.log("line", line);
        });
    }
}

export { ImportCategoryUseCase };
