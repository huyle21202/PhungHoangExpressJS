import {DB} from "./db";
import {ProductEntity} from "./model";
import {Logger} from "../common";

export class ProductRepo {

    static async createNewProduct(code: string, name: string, otherName: string, groupId: number, brandId: number, price: number, image: string): Promise<ProductEntity | null> {
        const query = {
            text: `INSERT INTO products (code, name, "otherName", image, "groupId", "brandId", price, quantity, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
            values: [code, name, otherName, image, groupId, brandId, price, 0, 1],
        };
        Logger.log(() => [`ProductRepo createNewProduct`, query]);
        return DB.insert(query);
    }

    static async getProducts(status: number, offset: number): Promise<ProductEntity[]> {
        const query = {
            text: status < 1 ? `SELECT * FROM products ORDER BY "groupId", "brandId", id LIMIT $1 OFFSET $2` : `SELECT * FROM products WHERE status=$1 ORDER BY "groupId", "brandId", id LIMIT $2 OFFSET $3`,
            values: status < 1 ? [DB.PAGING, offset * DB.PAGING] : [status, DB.PAGING, offset * DB.PAGING],
        };
        return DB.find(query)
    }

}