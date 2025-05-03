# 🛡️ API de Autenticação com JWT

Este projeto é uma API backend desenvolvida com Node.js, Express e PostgreSQL, com autenticação de usuários via token JWT. Foi criada como parte de uma atividade avaliativa, seguindo a arquitetura de camadas.

## 📁 Estrutura do Projeto

src/
├── controllers/
├── database/
├── middlewares/
├── models/
├── routes/
├── services/
├── server.js
.env

markdown
Copiar
Editar

## ⚙️ Funcionalidades

### 🔓 Rotas públicas

- `POST /register`: Cria um novo usuário (nome, email e senha).
- `POST /login`: Autentica o usuário e retorna um token JWT.

### 🔒 Rotas protegidas (necessário token válido)

- `GET /protected`: Retorna mensagem de acesso autorizado.

## 🔐 Modelo de Usuário

- `name` (string, obrigatório)
- `email` (string, obrigatório e único)
- `password` (string, obrigatório, armazenado como hash via bcrypt)

## 🔧 Tecnologias Utilizadas

- Node.js
- Express
- MongoDB (com Mongoose)
- JWT (jsonwebtoken)
- Bcrypt
- dotenv

  ## 🔧 Link VIDEO
  https://youtu.be/URZssyJAF_A
