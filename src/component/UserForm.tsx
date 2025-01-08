import { useState } from "react";
import UserTable from "./UserTable"; // Corrected import path
type User = {
  id: number;
  name: string;
  lastname: string;
  email: string;
};
function UserForm() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "hedi", lastname: "jla", email: "hedi@gmmail.com" },
  ]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser: User = {
      id: users.length + 1,
      name: formData.get("name") as string,
      lastname: formData.get("lastname") as string,
      email: formData.get("email") as string,
    };
    setUsers([...users, newUser]);
  };

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="border w-fit h-fit flex flex-row">
      <UserTable users={users} />
      <div className="p-2 container w-fit h-fit mx-auto border-2">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap items-start">
            <label htmlFor="name">Name</label>
            <input
              className="border p-1 rounded-md"
              type="text"
              placeholder="name"
              name="name"
            />
            <label htmlFor="lastname">Lastname</label>
            <input
              className="border p-1 rounded-md"
              type="text"
              placeholder="lastname"
              name="lastname"
            />
            <label htmlFor="email">Email</label>
            <input
              className="border p-1 rounded-md"
              type="text"
              placeholder="email"
              name="email"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 rounded-md mt-2 p-1 w-full"
          >
            Save
          </button>
          <button
            type="button"
            className="bg-red-500 rounded-md w-full mt-2 p-1"
            onClick={() => handleDelete(users[users.length - 1]?.id)}
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}
export default UserForm;
