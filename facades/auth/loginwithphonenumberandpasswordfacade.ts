import {Fto} from "../Fto";
import {LoginResult} from "../model/LoginResult";
import {Setting} from "../../services/model/setting";
import {Authservice, Dto, SettingService, TokenService} from "../../services";

export class LoginWithPhoneNumberAndPasswordFacade {
    static async login(phone: string, password: string): Promise<Fto<LoginResult>> {
        const verify: Dto<string> = await Authservice.loginWithPhoneNumberAndPassword(phone, password);
        if (verify.isSuccess()) {
            const token: string = await TokenService.getToken(phone);
            const setting: Setting = SettingService.getSetting();
            return Fto.success({
                token,
                setting
            });
        }

        return Fto.from(verify);
    }
}