import {Product} from "../../services/model/product";
import {Fto} from "../Fto";
import {Dto, ProductService} from "../../services";

export class InsertProductFacade {
    static async insert(code: string, name: string, otherName: string, groupId: number, brandId: number, price: number, image: string): Promise<Fto<Product | null>> {
        const add : Dto<Product | null> = await ProductService.insertNewProduct(code, name, otherName, groupId, brandId, price, image);
    }
}