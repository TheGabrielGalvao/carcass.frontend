import { UserModel } from "../models/User.model";
import { BaseService } from "./BaseService";

const API_URL = "User";

export default new (class UserService extends BaseService<UserModel> {
  constructor() {
    super(API_URL, "uuid");
  }
})();
