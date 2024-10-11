import axios from "axios";
import Link from "next/link";

async function getNoticias() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const user = await axios.get(url);
    return user.data;
}

export default async function User() {
    const user = await getNoticias();
    return (
        <>
            <h1>Usuarios</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((user, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td><Link href={`/user/${user.id}`}>{user.name}</Link></td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}