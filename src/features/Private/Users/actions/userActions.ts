import { User } from "../../../../models/User.model";
import UserService from "../../../../services/UserService";

const userService = new UserService();

export const getAllUsers = async () => {
  return await userService.getAll();
};

export const getByUuid = async (uuid: string) => {
  return await userService.getById(uuid);
};

export const createUser = async (data: User) => {
  return await userService.create(data);
};

export const updateUser = async (user: User) => {
  return await userService.update(user.uuid, user);
};

export const deleteUser = async (uuid: string) => {
  return await userService.remove(uuid);
};
