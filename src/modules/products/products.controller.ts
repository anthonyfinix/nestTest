import { Body, Controller, Get, Post } from '@nestjs/common';
import { title } from 'process';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(
        private productService: ProductsService
    ) { }

    @Get()
    find() {
        return this.productService.find();
    }


    @Post()
    create(
        @Body('name') name: string,
        @Body('isActive') isActive: boolean,
    ) {
        return this.productService.create({ name,isActive })
    }
}
