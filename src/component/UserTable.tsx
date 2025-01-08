export type User = {
  id: number;
  name: string;
  lastname: string;
  email: string;
};
type Props = {
  users: User[];
};
export default function UserTable({ users }: Props) {
  return (
    <table className="text-black">
      <th className="p-4 font-thin">
        <tr>
          <th className="border text-gray-800 p-4 ">Id</th>
          <th className="border text-gray-800 p-4 ">Name</th>
          <th className="border text-gray-800 p-4 ">Lastname</th>
          <th className="border text-gray-800 p-4">Email</th>
        </tr>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border">
              <td className="border text-gray-800 p-2">{user.id}</td>
              <td className="border text-gray-800 p-2">{user.name}</td>
              <td className="border text-gray-800 p-2">{user.lastname}</td>
              <td className="border text-gray-800 p-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </th>
    </table>
  );
}
