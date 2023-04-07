import React from 'react';
import { useContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";
import { links } from "./utils/links";
import ButtonTheme from "./ButtonTheme/ButtonTheme";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, dispatchTheme } = useContextGlobal();
  const { home, contact, favs } = links;

  const handleTheme = () => {
    console.log(theme);
    dispatchTheme({ type: theme.color === "light" ? "SET_DARK" : "SET_LIGHT" });
  };

  return (
    <nav>
      <h2>DH Odonto</h2>
      <div>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <Link to={home.path}>{home.name}</Link>
        <Link to={contact.path}>{contact.name}</Link>
        <Link to={favs.path}>{favs.name}</Link>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <ButtonTheme onClick={handleTheme} />
      </div>
    </nav>
  )
}

export default Navbar