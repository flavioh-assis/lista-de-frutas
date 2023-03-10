# My Fruits

Projeto criado como teste técnico para a vaga de Desenvolvedor .Net / React da empresa [Duett Software](https://duettsoftware.com/).

# Tecnologias

  * ReactJS
  * TypeScript
  * Styled Components
  * React Query
  
  * .NET Core 6
  * Entity Framework
  * Fluent Validator
  * Postgres
 
# Como Executar

## Pré-requisitos
  Antes de começar, certifique-se que você tenha as seguintes dependẽncias instaladas:
  * Node.js versão >= v14
  * .NET Core 6
  * .NET EF Tool
  * Instância Postgres
   
## Instalando o projeto
Faça um clone do repositório:
```sh
git clone https://github.com/flavioh-assis/fruits.git
```
   
## Executando a API
Acesse o diretório da API
```sh
cd api
```
 
Altere a `ConnectionString` no arquivo `appsettings.json`
```
"ConnectionStrings": { 
  "DefaultConnection": "Server=127.0.0.1;Port=5432;Database=database;User Id=postgres;Password=senha;"
}
```

Execute as migrations
```
dotnet ef database update
```

Rode a aplicação
```
dotnet run
```

Você deve ter acesso ao Swagger pelo endereço `https://localhost:7129/swagger/index.html`

## Executando a UI
Acesse o diretório do front
```
cd front
```

Instale os pacotes com `npm`, `yarn` ou `pnpm`
```
npm install
```

Rode a aplicação
```
npm run dev
```

## Autores
- [Flavio Assis](https://github.com/flavioh-assis)
