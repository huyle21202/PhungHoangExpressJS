import {UserEntity} from "./model";
import {DB} from "./db";

export class UserRepo {

    static async createUser(phone: string, password: string) : Promise<any>{
        const query = {
            text: `INSERT INTO users (name, phone, password, token, status) VALUES ($1, $2,$3, $4, $5)`,
            values: [phone, phone, password,'', 1],
        };
        return DB.insert(query);
    }

    static async getByPhoneAndPassword(phone: string, password: string): Promise<UserEntity | null> {
        const data: any | null = await DB.first(`SELECT * FROM users WHERE phone=$1 AND password=$2`, [phone, password]);
        return !!data ? {...data} : null;
    }

    static async setToken(id: number, token: string): Promise<void> {
        const query = {
            text: `UPDATE users SET token=$1 WHERE id=$2`,
            values: [token, id],
        };
        await DB.update(query);
    }
}