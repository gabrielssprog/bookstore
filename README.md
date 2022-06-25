# Book Store

## 🔎 Sobre
Projeto CRUD API simples que simula o estoque de uma biblioteca, sendo possível cadastrar novos livros, listar todos os livros, atualizar um livro e remover um livro do estoque.

## 🤔 Porquê?
Fiz este projeto com o intuito de praticar e demonstrar minhas habilidades com as tecnologias sitadas na sessão de [tecnologias](#-tecnologias-usadas).

## 🧰 Tecnologias usadas
- Nodejs
- Docker
- PostgreSQL

## 🏃 Rodando o projeto

### Pré requisitos
- Git
- Docker
- Docker compose

### 1. Clonando o projeto
```
git clone https://github.com/gabrielssprog/bookstore
cd bookstore
```

### 2. Subindo containers do Docker
```
docker-compose up -d
```

### 3. Configurando banco de dados
```
docker-compose exec application npx prisma migrate deploy
```

## 🧭 Como usar
### Cadastrar livro
#### Configuração
|Url|Método|
|-|-|
|http://localhost:3333/books|POST|

#### Corpo
```json
{
  "title": "string",
  "author": "string",
  "price": "number",
  "amount": "number"
}
```

### Listar livros
#### Configuração
|Url|Método|
|-|-|
|http://localhost:3333/books|GET|

### Atualizar livro
#### Configuração
|Url|Método|
|-|-|
|http://localhost:3333/books/:bookId|PUT|

#### Corpo
```json
{
  "title": "string",    // [opcional]
  "author": "string",   // [opcional]
  "price": "number",    // [opcional]
  "amount": "number"    // [opcional]
}
```

### Deletar livro
#### Configuração
|Url|Método|
|-|-|
|http://localhost:3333/books/:bookId|PUT|
