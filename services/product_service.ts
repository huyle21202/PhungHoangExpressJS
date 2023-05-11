import {Product} from "./model/product";
import {Dto} from "./dto";
import {ProductRepo} from "../repositories";
import {ProductEntity} from "../repositories/model";

export class ProductService {
    static async createNewProduct(code: string, name: string, otherName: string, groupId: number, brandId: number, price: number, image: string) : Promise<Dto<Product | null>>{
        const newProduct : ProductEntity | null = await ProductRepo.createNewProduct(code, name, otherName, groupId, brandId, price, image);
        return Dto.success(newProduct);
    }
}