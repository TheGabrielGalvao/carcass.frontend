import { useQuery, useMutation, useQueryClient } from "react-query";
import { User } from "../../../../models/User.model";
import UserService from "../../../../services/UserService";

const userService = new UserService();

export function useGetAllUsers() {
  return useQuery("users", async () => await userService.getAll());
}

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation((user: User) => userService.create(user), {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });
}

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation((user: User) => userService.update(user.uuid, user), {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation((uuid: string) => userService.remove(uuid), {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });
}
