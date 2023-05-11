import {GroupEntity} from "./model";
import {DB} from "./db";

export class GroupRepo {
    static async update(id: number, name: string, status: number): Promise<GroupEntity | null> {
        const query = {
            text: `UPDATE groups SET name=$1, status=$2 WHERE id=$3 RETURNING *`,
            values: [name, status, id],
        };
        return  DB.update(query);
    }

    static async create(name: string, status: number): Promise<GroupEntity | null> {
        const query = {
            text: `INSERT INTO groups (name, status) VALUES ($1, $2) RETURNING *`,
            values: [name, status],
        };
        return DB.insert(query);
    }
}