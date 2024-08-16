const express = require("express"),
  app = express(),
  cors = require("cors");
app.use(cors()),
  app.get("/home", (e, a) => {
    a.send({
      nome: "Bianca",
      cursosTitle: ["Inteligência Artificial","Cloud","Backend","FullStack","DevOps","Frontend","UX Designer","Machine Learning"],
      descricao: ["Explore algoritmos e técnicas para criar sistemas inteligentes. Aprenda machine learning, redes neurais e aplicações práticas da IA.","Domine tecnologias de computação em nuvem, gerenciamento de serviços e infraestrutura. Conheça provedores como AWS, Azure e Google Cloud.","Desenvolva e gerencie a lógica de servidores e banco de dados. Aprenda sobre APIs, segurança e integração de sistemas.","Torne-se um desenvolvedor completo, cobrindo frontend e backend. Aprenda a construir e manter aplicações web de ponta a ponta.","Integre desenvolvimento e operações para otimizar ciclos de vida de software. Aprenda práticas de automação, CI/CD e gerenciamento de infraestrutura.","Crie interfaces de usuário interativas e responsivas. Aprenda HTML, CSS e JavaScript, além de frameworks modernos como React e Angular.","Desenvolva experiências de usuário intuitivas e atraentes. Estude pesquisa, prototipagem e design centrado no usuário para melhorar interfaces.","Aprofunde-se em técnicas para criar modelos preditivos e analíticos. Estude algoritmos, processamento de dados e aplicações práticas em ML."],
      andamento: ["25", "50", "75", "100", "100", "25", "25", "25"],
      tempo: ["100 hrs","80 hrs","200 hrs","75 hrs","40 hrs","20 hrs","150 hrs","10 hrs"],
    });
  }),
  app.listen(3002, () => {});
