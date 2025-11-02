import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { userService, type User, type NewUser } from "../services/userService";

export function useUsers() {
  const qc = useQueryClient();

  const users = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: userService.getAll,
  });

  const create = useMutation({
    mutationFn: (payload: NewUser) => userService.create(payload),
    onSuccess: (newUser) => {
      // Actualizar la cache optimísticamente añadiendo el nuevo usuario
      qc.setQueryData<User[]>(["users"], (oldUsers) => {
        if (!oldUsers) return [newUser];
        return [newUser, ...oldUsers];
      });
    },
  });

  return { ...users, createUser: create.mutate, creating: create.status === 'pending' };
}