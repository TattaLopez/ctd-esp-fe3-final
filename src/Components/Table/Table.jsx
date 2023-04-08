import React from "react";
import "./Table.css";

const Table = ({ data, title, textNotFound, trParams, tdParams }) => {
  return (
    <div>
      <h1 className="text-center">{title}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      {data && (
        <table>
          <thead>
            <tr>
              {React.Children.toArray(
                trParams.map((title) => <th>{title}</th>)
              )}
            </tr>
          </thead>
          <tbody>
            <tr>
              {React.Children.toArray(
                tdParams.map((param) => <td>{data[param]}</td>)
              )}
            </tr>
          </tbody>
        </table>
      )}
      {!data && <h1 className="text-center">{textNotFound}</h1>}
    </div>
  );
};

export default Table;
