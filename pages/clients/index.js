import Link from "next/link";
export default function ClientsName() {
  const clients = [
    { id: "ys", name: "yash" },
    { id: "vv", name: "vashisth" },
  ];
  return (
    <div>
      <h1>This is a Client page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
