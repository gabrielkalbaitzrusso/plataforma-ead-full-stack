import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/HeaderComponent.js";

function App() {
  const [data, setData] = useState({
    message: "",
    nome: "",
  });

  useEffect(() => {
    fetch("http://localhost:3002/home")
      .then((res) => res.json())
      .then((data) =>
        setData({
          nome: data.nome,
          cursosTitle: data.cursosTitle,
          descricao: data.descricao,
          andamento: data.andamento,
          tempo: data.tempo,
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
            Style="background:#dedede;"
          >
            <div className="position-sticky text-center">
              <ul className="nav flex-column ms-4 position-fixed">
                <li className="nav-item py-2">
                  <a className="nav-link active" Href="#">
                    <i className=" text-rosa fa fa-house mb-2"></i>
                  </a>
                </li>
                <li className="nav-item py-2">
                  <a className="nav-link" Href="#">
                    <i className=" text-rosa fa fa-folder"></i>
                  </a>
                </li>
                <li className="nav-item py-2">
                  <a className="nav-link" Href="#">
                    <i className="text-rosa fa fa-shop"></i>
                  </a>
                </li>
                <li className="nav-item py-2">
                  <a className="nav-link" Href="#">
                    <i className="text-rosa fa fa-circle-info"></i>
                  </a>
                </li>
                <li className="nav-item py-2">
                  <a className="nav-link" Href="#">
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
              <div className="col-lg-3 mb-4">
                <div class="card">
                  <img
                    class="card-img-top img-thumbnail"
                    src="curso-1.png"
                    alt="Imagem de capa do curso"
                  />
                  <div class="progress border-radius-none">
                    <div
                      class="progress-bar w-50 bg-warning"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-center">
                      {data.cursosTitle[0]}
                    </h5>
                    <p class="card-text">{data.descricao[0]}</p>
                    <div className="row mt-3 text-center justify-content-between">
                      <div className="col-lg-6">
                        <p className="text-12">Concluído:</p>
                        <span className="text-success font-bold">
                          {data.andamento[0]}%
                        </span>
                      </div>
                      <div className="col-lg-6">
                        <p className="text-12">Carga Horária:</p>
                        <span className="text-black font-bold">
                          {data.tempo[0]}
                        </span>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <a Href="#" class="btn btn-rosa text-white">
                        Estudar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 mb-4">
                <div class="card">
                  <img
                    class="card-img-top img-thumbnail"
                    src="curso-1.png"
                    alt="Imagem de capa do curso"
                  />
                  <div class="progress border-radius-none">
                    <div
                      class="progress-bar w-50 bg-warning"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-center">
                      {data.cursosTitle[1]}
                    </h5>
                    <p class="card-text">{data.descricao[1]}</p>
                    <div className="row mt-3 text-center justify-content-between">
                      <div className="col-lg-6">
                        <p className="text-12">Concluído:</p>
                        <span className="text-success font-bold">
                          {data.andamento[1]}%
                        </span>
                      </div>
                      <div className="col-lg-6">
                        <p className="text-12">Carga Horária:</p>
                        <span className="text-black font-bold">
                          {data.tempo[1]}
                        </span>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <a Href="#" class="btn btn-rosa text-white">
                        Estudar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 mb-4">
                <div class="card">
                  <img
                    class="card-img-top img-thumbnail"
                    src="curso-1.png"
                    alt="Imagem de capa do curso"
                  />
                  <div class="progress border-radius-none">
                    <div
                      class="progress-bar w-50 bg-warning"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-center">
                      {data.cursosTitle[2]}
                    </h5>
                    <p class="card-text">{data.descricao[2]}</p>
                    <div className="row mt-3 text-center justify-content-between">
                      <div className="col-lg-6">
                        <p className="text-12">Concluído:</p>
                        <span className="text-success font-bold">
                          {data.andamento[2]}%
                        </span>
                      </div>
                      <div className="col-lg-6">
                        <p className="text-12">Carga Horária:</p>
                        <span className="text-black font-bold">
                          {data.tempo[2]}
                        </span>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <a Href="#" class="btn btn-rosa text-white">
                        Estudar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 mb-4">
                <div class="card">
                  <img
                    class="card-img-top img-thumbnail"
                    src="curso-1.png"
                    alt="Imagem de capa do curso"
                  />
                  <div class="progress border-radius-none">
                    <div
                      class="progress-bar w-50 bg-warning"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-center">
                      {data.cursosTitle[3]}
                    </h5>
                    <p class="card-text">{data.descricao[3]}</p>
                    <div className="row mt-3 text-center justify-content-between">
                      <div className="col-lg-6">
                        <p className="text-12">Concluído:</p>
                        <span className="text-success font-bold">
                          {data.andamento[3]}%
                        </span>
                      </div>
                      <div className="col-lg-6">
                        <p className="text-12">Carga Horária:</p>
                        <span className="text-black font-bold">
                          {data.tempo[3]}
                        </span>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <a Href="#" class="btn btn-rosa text-white">
                        Estudar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 mb-4">
                <div class="card">
                  <img
                    class="card-img-top img-thumbnail"
                    src="curso-1.png"
                    alt="Imagem de capa do curso"
                  />
                  <div class="progress border-radius-none">
                    <div
                      class="progress-bar w-50 bg-warning"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-center">
                      {data.cursosTitle[4]}
                    </h5>
                    <p class="card-text">{data.descricao[4]}</p>
                    <div className="row mt-3 text-center justify-content-between">
                      <div className="col-lg-6">
                        <p className="text-12">Concluído:</p>
                        <span className="text-success font-bold">
                          {data.andamento[4]}%
                        </span>
                      </div>
                      <div className="col-lg-6">
                        <p className="text-12">Carga Horária:</p>
                        <span className="text-black font-bold">
                          {data.tempo[4]}
                        </span>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <a Href="#" class="btn btn-rosa text-white">
                        Estudar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 mb-4">
                <div class="card">
                  <img
                    class="card-img-top img-thumbnail"
                    src="curso-1.png"
                    alt="Imagem de capa do curso"
                  />
                  <div class="progress border-radius-none">
                    <div
                      class="progress-bar w-50 bg-warning"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-center">
                      {data.cursosTitle[5]}
                    </h5>
                    <p class="card-text">{data.descricao[5]}</p>
                    <div className="row mt-3 text-center justify-content-between">
                      <div className="col-lg-6">
                        <p className="text-12">Concluído:</p>
                        <span className="text-success font-bold">
                          {data.andamento[5]}%
                        </span>
                      </div>
                      <div className="col-lg-6">
                        <p className="text-12">Carga Horária:</p>
                        <span className="text-black font-bold">
                          {data.tempo[5]}
                        </span>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <a Href="#" class="btn btn-rosa text-white">
                        Estudar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 mb-4">
                <div class="card">
                  <img
                    class="card-img-top img-thumbnail"
                    src="curso-1.png"
                    alt="Imagem de capa do curso"
                  />
                  <div class="progress border-radius-none">
                    <div
                      class="progress-bar w-50 bg-warning"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-center">
                      {data.cursosTitle[6]}
                    </h5>
                    <p class="card-text">{data.descricao[6]}</p>
                    <div className="row mt-3 text-center justify-content-between">
                      <div className="col-lg-6">
                        <p className="text-12">Concluído:</p>
                        <span className="text-success font-bold">
                          {data.andamento[6]}%
                        </span>
                      </div>
                      <div className="col-lg-6">
                        <p className="text-12">Carga Horária:</p>
                        <span className="text-black font-bold">
                          {data.tempo[6]}
                        </span>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <a Href="#" class="btn btn-rosa text-white">
                        Estudar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 mb-4">
                <div class="card">
                  <img
                    class="card-img-top img-thumbnail"
                    src="curso-1.png"
                    alt="Imagem de capa do curso"
                  />
                  <div class="progress border-radius-none">
                    <div
                      class="progress-bar w-50 bg-warning"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-center">
                      {data.cursosTitle[7]}
                    </h5>
                    <p class="card-text">{data.descricao[7]}</p>
                    <div className="row mt-3 text-center justify-content-between">
                      <div className="col-lg-6">
                        <p className="text-12">Concluído:</p>
                        <span className="text-success font-bold">
                          {data.andamento[7]}%
                        </span>
                      </div>
                      <div className="col-lg-6">
                        <p className="text-12">Carga Horária:</p>
                        <span className="text-black font-bold">
                          {data.tempo[7]}
                        </span>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <a Href="#" class="btn btn-rosa text-white">
                        Estudar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
