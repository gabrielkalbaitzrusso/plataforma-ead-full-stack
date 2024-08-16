import React from "react";

const Header = (props) => {
  const { nome, idade } = props;

  // Retorna o JSX que define a UI do componente
  return (
    <nav className="navbar navbar-expand-lg bg-header">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="logo-transparent.png" height="80" alt="Logo Todas Elas" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-white justify-content-end"
          id="navbarSupportedContent"
        >
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn me-3 btn-rounded" type="submit">
              <i className="fa fa-search text-white"></i>
            </button>
          </form>
          <button
            className="btn btn-outline-sucess dropdown btn-rounded"
            Style="border: solid 2px #dedede;"
          >
            <i className="fa fa-user text-white"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

// Exporta o componente para que ele possa ser usado em outros arquivos
export default Header;
