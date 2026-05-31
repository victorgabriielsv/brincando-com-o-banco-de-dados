# 📝 Gerenciador de Tarefas Full Stack (Task Manager)

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white" alt="Express">
</p>

<p align="center">
  <strong>Uma aplicação Full Stack completa, moderna e minimalista para gerenciamento de tarefas, com arquitetura desacoplada (API REST + Frontend Vanilla).</strong>
</p>

---

## 💻 Sobre o Projeto

Este é um **Gerenciador de Tarefas** dinâmico que une um frontend elegante em *Dark Mode* com efeitos de *Glassmorphism* a um backend robusto estruturado em Node.js e Express. 

A aplicação foi desenhada de forma separada (Client/Server), onde o cliente consome a API de forma totalmente assíncrona, simulando o cenário real de desenvolvimento de softwares modernos.

---

## 🚀 Principais Funcionalidades

### 🎨 Frontend (Client)
* **Design Premium:** Interface baseada em componentes modernos, desfoque de fundo (`backdrop-filter`), degradês e transições suaves.
* **Consumo Assíncrono:** Uso do método nativo `fetch` com a sintaxe moderna `async/await` para evitar travamentos na tela (*reloads*).
* **Animações Fluidas:** Efeito de *Fade-In* ao renderizar ou adicionar novos cartões de tarefas.

### ⚙️ Backend (Server)
* **API RESTful:** Rotas estruturadas para manipulação dos dados utilizando os verbos HTTP corretos (`GET`, `POST`, `DELETE`).
* **Persistência de Dados:** Camada de banco de dados isolada para controle das tarefas de forma segura.
* **CORS Habilitado:** Configuração nativa para permitir que o frontend acesse os recursos do servidor sem bloqueios de segurança do navegador.

---

## 🛠️ Tecnologias Utilizadas

### Frontend
* **HTML5 / CSS3:** Estrutura semântica e estilização customizada usando variáveis CSS.
* **Vanilla JavaScript:** Manipulação de eventos, controle de estado e gerenciamento do DOM.

### Backend
* **Node.js:** Ambiente de execução Javascript no servidor.
* **Express:** Framework rápido e minimalista para criação de rotas e middlewares.
* **Cors:** Middleware para controle de acessos à API.

---

## 📁 Estrutura do Projeto

```text
├── server.js        # Arquivo principal do servidor Express e rotas da API
├── db.js            # Simulação/Configuração da camada de banco de dados
├── package.json     # Gerenciamento de dependências e scripts do Node
├── index.html       # Interface visual do usuário (Frontend)
├── script.js        # Lógica de integração e requisições HTTP do cliente
└── README.md        # Documentação do projeto
