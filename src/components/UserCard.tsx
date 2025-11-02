import type { User } from "../services/userService";

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => (
  <article className="card flex flex-col gap-2 hover:border-[--color-egdev-red] transition-colors">
    <h3 className="text-lg font-bold text-[--color-egdev-red]">
      {user.name}{" "}
      <span className="text-sm text-gray-400">@{user.username}</span>
    </h3>
    <p className="text-sm text-gray-300">{user.email}</p>
  </article>
);