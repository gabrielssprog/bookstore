# Book Store

## 🔎 Sobre
Projeto CRUD simples que simula o estoque de uma biblioteca, sendo possível cadastrar novos livros, listar todos os livros, atualizar um livro e remover um livro do estoque.

## 🤔 Porquê?
Fiz este projeto com o intuito de praticar e demonstrar minhas habilidades com as tecnologias sitadas na sessão de [tecnologias](#-tecnologias-usadas)

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
