import {Dto} from "./dto";

export class Authservice {
    static async loginWithPhoneNumberAndPassword(phone: string, password: string): Promise<Dto<string>> {
        return Dto.success(phone);
    }
}
