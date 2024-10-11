"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function UserDetails({ params }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Realizar la consulta a la API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${params.name}`
        );
        setUser(response.data); // Guardar los datos obtenidos en el estado
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [params.name]);

  if (!user) return <p>Loading...</p>; // Mostrar un mensaje mientras se obtienen los datos

  return (
    <>
      <h1>Usuario</h1>
      <p>ID: {user.id}</p>
      <p>Nombre: {user.name}</p>
      <p>Usuario: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>
        Dirección: {user.address?.street}, {user.address?.suite},{" "}
        {user.address?.city}, {user.address?.zipcode}
      </p>
      <p>Teléfono: {user.phone}</p>
      <p>Sitio Web: {user.website}</p>
      <p>Compañía: {user.company?.name}</p>
      <p>Frase de la compañía: {user.company?.catchPhrase}</p>
      <p>Especialidad de la compañía: {user.company?.bs}</p>
    </>
  );
}
