import React from "react";
import { useContextGlobal } from "../utils/global.context";
import "./Navbar.css";
import { Link, NavLink} from "react-router-dom";
import { links } from "../utils/links";
import ButtonTheme from "../ButtonTheme/ButtonTheme";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, dispatchTheme } = useContextGlobal();
  const { home, contact, favs } = links;

  const handleTheme = () => {
    console.log(theme);
    dispatchTheme({ type: theme.color === "light" ? "SET_DARK" : "SET_LIGHT" });
  };

  return (
    <nav className={`${theme.color} ${theme.color !== "light" ? 'nav-dark' : ''}`}>
      <h2>DH Odonto</h2>
      <div className="">
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <NavLink to={home.path} activeClassName="active">{home.name}</NavLink>
        <NavLink to={contact.path} activeClassName="active">{contact.name}</NavLink>
        <NavLink to={favs.path} activeClassName="active">{favs.name}</NavLink>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <ButtonTheme onClick={handleTheme} />
      </div>
    </nav>
  );
};

export default Navbar;
