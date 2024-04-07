import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class CategoryService {
  constructor(
      // @Inject("CATEGORY-MICROSERVICE") private clientCategoryMicroservice: ClientProxy
  ) {}

  create(data: CreateCategoryDto) {
    // const category = this.clientCategoryMicroservice.send({ cmd: 'createCategory' }, data );
    // return category;
    return data;
  }

  findAll() {
      // const category = this.clientCategoryMicroservice.send({ cmd: 'findAllCategory' }, {});
      // return category;   
  }

  findOne(id: number) {
      // const category = this.clientCategoryMicroservice.send({ cmd: 'findOneCategory' }, id);
      // return category;
  }

  update(id: number, data: UpdateCategoryDto) {
      // const category = this.clientCategoryMicroservice.send({ cmd: 'updateCategory' }, {
      //     id, 
      //     ...data
      // }); 
      // return category;
  }

  remove(id: number) {
      // const category = this.clientCategoryMicroservice.send({ cmd: 'removeCategory' }, id); 
      // return category;    
  }
}
