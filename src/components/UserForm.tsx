import { useState } from "react";
import type { NewUser } from "../services/userService";

interface UserFormProps {
  onSubmit: (data: NewUser) => void;
}

export const UserForm = ({ onSubmit }: UserFormProps) => {
  const [form, setForm] = useState<NewUser>({ name: "", username: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.username || !/\S+@\S+\.\S+/.test(form.email)) return;
    onSubmit(form);
    setForm({ name: "", username: "", email: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card flex flex-col gap-3 mb-6"
    >
      <h2 className="text-[--color-egdev-red] font-bold text-lg">
        Añadir nuevo usuario
      </h2>

      <input
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={handleChange}
        className="bg-[--color-egdev-gray] border border-[--color-egdev-dark] rounded-lg px-3 py-2 text-white"
      />
      <input
        name="username"
        placeholder="Usuario"
        value={form.username}
        onChange={handleChange}
        className="bg-[--color-egdev-gray] border border-[--color-egdev-dark] rounded-lg px-3 py-2 text-white"
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="bg-[--color-egdev-gray] border border-[--color-egdev-dark] rounded-lg px-3 py-2 text-white"
      />
      <button type="submit" className="btn mt-2 self-start">
        Añadir
      </button>
    </form>
  );
};