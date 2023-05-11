import {BrandEntity, GroupEntity} from "./model";
import {DB} from "./db";

export class BrandRepo {

    static async update(id: number, name: string, status: number): Promise<BrandEntity | null> {
        const query = {
            text: `UPDATE brands SET name=$1, status=$2 WHERE id=$3 RETURNING *`,
            values: [name, status, id],
        };
        return DB.update(query);
    }

    static async create(name: string, status: number): Promise<BrandEntity | null> {
        const query = {
            text: `INSERT INTO brands (name, status) VALUES ($1, $2) RETURNING *`,
            values: [name, status],
        };
        return DB.insert(query);
    }
}