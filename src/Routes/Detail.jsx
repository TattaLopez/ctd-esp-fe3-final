import React, { useEffect, useState } from "react";
import Table from "../Components/Table/Table";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  const tableTitles = ["Id", "Nombre", "Email", "Telefono", "Sitio Web"];

  const tableTd = ["id", "name", "email", "phone", "website"];

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        }
        throw new Error('El dentista consultado no se ha encontrado');
      })
      .then((data) => {
        setDentist(data);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <Table
      data={dentist}
      title="Detalle id dentista"
      textNotFound="Dentista no encontrado"
      trParams={tableTitles}
      tdParams={tableTd}
    />
  );
};

export default Detail;
