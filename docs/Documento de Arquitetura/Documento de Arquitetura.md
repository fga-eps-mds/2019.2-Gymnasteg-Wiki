## Histórico de Alterações
|Data|Versão|Descrição|Autor(es)|
|:--:|:--:|:--:|:--:|
|16/09/2019|0.1|Criação da estrutura base do documento de visão|Alan Marques
|17/09/2019|0.2|Implementação da introdução do documento| Alan Marques, Fellipe Araujo
|20/09/2019|0.3|Implementação do diagrama de casos de uso com suas especificações| Fellipe Araújo
|20/09/2019|0.4|Adição das metas e restrições da arquitetura| Fellipe Araujo
|20/09/2019|0.5|Implentação da representação de arquitetura | Alan Marques, Fellipe Araujo

# 1. Introdução
## 1.1. Objetivo
O seguinte documento tem como objetivo aprensentar a arquitetura do projeto Gymnasteg, como também esclarecer os principais aspectos do software como um todo.
## 1.2. Escopo
O Gymnasteg tem como objetivo ser uma plataforma web de avaliação de atletas em competições de ginástica. Nessa plataforma, os juízes, nas suas respectividas bancas, darão notas aos atletas participantes da competição vinculada a banca. No final da avaliação da banca, o sistema se encarregara de mostrar o ranking dos atletas competidores de acordo suas respectivias notas.
## 1.3. Visão Geral
O documento está segmento em Representação de Arquitetura, Metas e Restrições da Arquitetura, Visão de Casos de Uso,  Visão Lógica e Visão de Dados.
## 1.4 Definições, Acrônimos e Abreviações
* **API:** Application Programming Interface.
* **Framework:** Conjuntos de funções e componentes pré definidos.
* **ORM:** Object-relational-mapping.
* **SGBD:** Sistema de Gerenciamento de Banco de Dados.
# 2. Representação de Arquitetura
## 2.1 Padrão Arquitetural
O projeto foi modelado seguindo a arquitetura MVC (Model, View, Controller), no qual foi utilizado Node.js, em conjunto com framework ExpressJS e o ORM Sequelize, para criação da API onde vai ser processado as ações de leitura, escrita e alteração de informações no banco de dados PostgreSQL. Para a interação com o usuário foi usado a biblioteca React, onde realiza o papel de organizar e enviar informações da API.

* **Model:** Camada da arquitetura responsável pela lógica de négocio, manipulação e validação de dados na aplicação.
* **View:** Camada da arquitetura responsável pela exibição da interface com o usuário.
* **Controller:** Camada da arquitetura responsável pela validação das requisições dos usuário de acordo com as regras de autenticação e autorização da aplicação.

## 2.2 Tecnologias
### 2.2.1 React
O React é uma biblioteca JavaScript para criação de interfaces interativas de usuário e que pode ser rederizada no servidor através do Node.js.
### 2.2.2 Node.js
Node é um ambiente de execução de JavaScript server-side, projetado para desenvolvimento de aplicações escaláveis.
### 2.2.3 Docker
Docker é um tecnologia de conteinerização, onde busca resolver o problema de padronização de ambiente desenvolvimento de software e o isolamento de serviços.
### 2.2.4 PostgreSQL
PostgresSQL é SGBD relacional de alto desempenho de código livre.
### 2.2.5 Travis CI
Travis CI é um serviço de integração contínua hospedado, usado para criar e testar projetos de software hospedados no GitHub.
### 2.2.6 Slack
Slack é uma aplicativo de comunicação de equipes.
### 2.2.7 Git
Git é uma ferramenta de versionamento de arquivos de código livre.
### 2.2.8 JEST
Jest é um framework para realização de teste de JavaScript.
### 2.2.9 ExpressJS
Express é um minimalista e flexivel framework Node.js que prover um conjunto de recursos para aplicações web.
### 2.2.10 Sequelize
Sequelize é ORM baseado em promises para Node.js, que suporta vários dialetos, entre eles PostgreSQL.

# 3. Metas e Restrições da Arquitetura
## 3.1 Metas do Software Gymnasteg
* Disponibilizar aos organizadores das competições de ginástica uma plataforma web para avaliação de atletas.
* Automatizar o processo de votação, contabilização dos votos e divulgação da nota final de cada atleta através de um ranking.
* Cadastrar os competidores via arquivo csv ou manualmente pela plataforma.
* Cadastrar bancas e juízes.
## 3.2 Restrições da Arquitetura
* Ter acesso à internet.
* O juíz ter uma conta na plataforma, cuja criação está restrita a ser feita pelo coordenador do evento.
* O atleta ter sido cadastrado corretamente na sua respectiva modalidade.

# 4. Visão de Casos de Uso
## 4.1 Diagrama de Casos de Uso
![Diagrama](https://github.com/fga-eps-mds/2019.2-Gymnasteg-Wiki/blob/feature/31-documento-de-arquitetura/docs/Documento%20de%20Arquitetura/caso%20de%20uso.png)
## 4.2 Especificações dos Caso de Uso
|Casos de uso|Ator|Descrição|
|----|-------|-----|
|UC01-Listar modalidades |Coordenador|Este caso de uso ocorre sempre que o coordenador loga no Gymnasteg|
|UC02-Inserir dados|Coordenador|Este caso de uso ocorrerá somente se o coordenador clicar em uma das modalidades|
|UC03-Carregar planilha de dados|Coordenador|Este caso de uso poderá ocorrer caso o coordenador preferir usar planilhas |
|UC04-Criar Bancas|Coordenador|Esta caso de uso ocorrerá somente se o coordenador inserir todos os dados necessários|
|UC05-Editar banca|Coordenador|Este caso de uso ocorrerá somente se o coordenador tiver criado uma banca previamente|
|UC06-Visualizar Ranking|Coordenador|Este caso de uso ocorrerá quando as votações forem submetidas|
|UC07-Listar bancas do Juiz|Juiz|Este caso de uso ocorrerá somente se uma banca que o Juiz estiver for criada pelo coordenador|
|UC07-Acessar banca|Juiz|Este caso de uso ocorrerá quando o juiz clicar em uma banca|
|UC08-Listar competidores|Juiz|Este caso de uso ocorrerá somente se o Juiz entrar na banca atual para votação|
|UC09-Mudar ordem dos competidores|Juiz|Este caso de uso poderá ocorrer quando o Juiz quiser mudar a ordem de apresentação de um competidor|
|UC010-Liberar votação|Juiz|Este caso de uso poderá ocorrer quando o Juiz escolher um competidor|
|UC011-Votar execução|Juiz|Este caso de uso poderá ocorrer quando todos os Juizes liberarem a votação e se o Juiz tiver autorização para votar execução e/ou dificuldade|
|UC012-Votar dificuldade|Juiz|Este caso de uso poderá ocorrer quando todos os Juizes liberarem a votação e se o Juiz tiver autorização para votar dificuldade e/ou execução|
|UC013-Votar|Juiz|Este caso de uso ocorrerá quando o Juiz entrar com a potuação correta do seu tipo de avaliação|

# 5. Visão Lógica

# 6 Visão de Dados
 
