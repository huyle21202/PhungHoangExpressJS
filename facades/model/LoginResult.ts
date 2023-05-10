import {Setting} from "../../services/model/setting";

export type LoginResult = {
    token: string | null;

    setting:Setting | null;
}