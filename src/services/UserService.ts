import { User } from "../models/User.model";
import { BaseService } from "./BaseService";

const API_URL = "users";

export default class UsuarioService extends BaseService<User> {
  constructor() {
    super(API_URL, "uuid");
  }
}
