import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/HeaderComponent.js";

function App() {
  const [data, setData] = useState({
    message: "",
    nome: "",
    cursosTitle: [],
    descricao: [],
    andamento: [],
    tempo: []
  });

  useEffect(() => {
    fetch("http://localhost:3002/home")
      .then((res) => res.json())
      .then((data) =>
        setData({
          nome: data.nome,
          cursosTitle: data.cursosTitle || [],
          descricao: data.descricao || [],
          andamento: data.andamento || [],
          tempo: data.tempo || []
        })
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebar"
            className="col-md-2 col-lg-1 d-md-block bg-light sidebar position-relative"
            style={{ background: "#dedede" }}
          >
            <div className="position-sticky text-center">
              <ul className="nav flex-column ms-4 position-fixed">
                <li className="nav-item py-2">
                  <a className="nav-link active" href="#/">
                    <i className="text-rosa fa fa-house mb-2"></i>
                  </a>
                </li>
                <li className="nav-item py-2">
                  <a className="nav-link" href="#/">
                    <i className="text-rosa fa fa-folder"></i>
                  </a>
                </li>
                <li className="nav-item py-2">
                  <a className="nav-link" href="#/">
                    <i className="text-rosa fa fa-shop"></i>
                  </a>
                </li>
                <li className="nav-item py-2">
                  <a className="nav-link" href="#/">
                    <i className="text-rosa fa fa-circle-info"></i>
                  </a>
                </li>
                <li className="nav-item py-2">
                  <a className="nav-link" href="#/">
                    <i className="text-rosa fa fa-comments"></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-10 ms-sm-auto col-lg-11 px-5 py-5">
            <h1 className="mb-5">
              Olá <i>{data.nome}</i>, vamos estudar?
            </h1>
            <h2>Todos os cursos</h2>
            <div className="row mt-5">
              {data.cursosTitle.length > 0 && data.cursosTitle.map((title, index) => (
                <div key={index} className="col-lg-3 mb-4">
                  <div className="card">
                    <img
                      className="card-img-top img-thumbnail"
                      src="curso-1.png"
                      alt="Imagem de capa do curso"
                    />
                    <div className="progress border-radius-none">
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        aria-valuenow={data.andamento[index] || 0}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width:`${data.andamento[index]}%`}}
                      ></div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title text-center">
                        {title}
                      </h5>
                      <p className="card-text">
                        {data.descricao[index] || "Descrição não disponível"}
                      </p>
                      <div className="row mt-3 text-center justify-content-between">
                        <div className="col-lg-6">
                          <p className="text-12">Concluído:</p>
                          <span className="text-success font-bold">
                            {data.andamento[index] || 0}%
                          </span>
                        </div>
                        <div className="col-lg-6">
                          <p className="text-12">Carga Horária:</p>
                          <span className="text-black font-bold">
                            {data.tempo[index] || "Não disponível"}
                          </span>
                        </div>
                      </div>
                      <div className="text-center mt-4">
                        <a href="#/" className="btn btn-rosa text-white">
                          Estudar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
