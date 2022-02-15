import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";


interface IRequest {
   name: string;
   description: string;
}

class CreateSpecificationUseCase {
   constructor(private specificationRepository: ISpecificationsRepository) {}
  
   execute({ name, description }: IRequest): void {
    
     const categoryAlreadExists = this.specificationRepository.findByName(name);
     if (categoryAlreadExists) {
       throw new Error("Categotia já existe !");
     }
     this.specificationRepository.create({ name, description });
   }
}

export { CreateSpecificationUseCase };