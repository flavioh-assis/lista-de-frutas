# Lista de frutas

Projeto criado como teste técnico para a vaga de Desenvolvedor .Net / React.

# Objetivo
Criar uma lista de FRUTAS conforme o exemplo abaixo, que conte com uma descrição, um campo inteiro de valor A e outro de valor B. A lista também deve ter um botão de ação que deve abrir o formulário representado a direita. No formulário devem aparecer todos os valores e um campo onde deverá aparecer o resultado da divisão de A por B ou a multiplicação, conforme cada ação realizada.

Os dados devem vir a partir de uma tabela em um banco de dados da sua escolha.

Será avaliada a organização, funcionalidade, estilização e todos os componentes de forma geral.

Observações: 

    Linguagem de programação React + .Net 

    O código-fonte deve ser enviado pelo github.

    O Link do repositório deve constar no preenchimento do seu formulário.
    
Exemplo:
![pasted image 0](https://user-images.githubusercontent.com/38504393/224324804-a20161c3-1fc1-40ff-8403-b6194ef24e58.png)

# Tecnologias Utilizadas

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
  Antes de começar, certifique-se que você tenha as seguintes dependências instaladas:
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
  "DefaultConnection": "Server=127.0.0.1;Port=5432;Database=MeuBanco;User Id=MeuUsuario;Password=MinhaSenha;"
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
