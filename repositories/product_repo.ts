import {DB} from "./db";
import {ProductEntity} from "./model";
import {Logger} from "../common";

export class ProductRepo {

    static createNewProduct(code: string, name: string, otherName: string, groupId: number, brandId: number, price: number, image: string): Promise<ProductEntity | null> {
        const query = {
            text: `INSERT INTO products (code, name, otherName, groupId, brandId, price, image) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
            values: [code, name, otherName, groupId, brandId, price, image],
        };
        Logger.log(() => [`ProductRepo createNewProduct`, query]);
        return DB.insert(query);
    }
}