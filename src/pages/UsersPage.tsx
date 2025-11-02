import { useUsers } from "../hooks/useUsers";
import { UserCard } from "../components/UserCard";
import { UserForm } from "../components/UserForm";

export const UsersPage = () => {
  const { data, isLoading, createUser, creating } = useUsers();

  if (isLoading)
    return (
      <p className="text-gray-400 text-center mt-8">Cargando usuarios...</p>
    );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-[--color-egdev-red] mb-1">
          Egdev Users
        </h1>
        <p className="text-gray-400 text-sm">
          Ejemplo con JSONPlaceholder + React Query + Tailwind v4
        </p>
      </header>

      <UserForm onSubmit={createUser} />
      {creating && (
        <p className="text-[--color-egdev-red] text-sm mb-4">
          Creando usuario...
        </p>
      )}

      <section className="grid gap-4">
        {data?.map((u) => (
          <UserCard key={u.id} user={u} />
        ))}
      </section>
    </div>
  );
};