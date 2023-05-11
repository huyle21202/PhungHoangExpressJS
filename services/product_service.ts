import {Product} from "./model/product";
import {Dto} from "./dto";

export class ProductService {
    static async insertNewProduct(code: string, name: string, otherName: string, groupId: number, brandId: number, price: number, image: string) : Product<Dto<Product | null>>{
        
    }
}