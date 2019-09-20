## Histórico de Alterações
|Data|Versão|Descrição|Autor(es)|
|:--:|:--:|:--:|:--:|
|16/09/2019|0.1|Criação da estrutura base do documento de visão|Alan Marques
|17/09/2019|0.2|Implementação da introdução do documento| Alan Marques, Fellipe Araújo
|20/09/2019|0.3|Implementação do diagrama de casos de uso com suas especificações| Fellipe Araujo
|20/09/2019|0.4|Adição das metas e restrições da arquitetura| Fellipe Araujo

# 1. Introdução
## 1.1. Objetivo
O seguinte documento tem como objetivo aprensentar a arquitetura do projeto Gymnasteg, como também esclarecer os principais aspectos do software como um todo.
## 1.2. Escopo
O Gymnasteg tem como objetivo ser uma plataforma web de avaliação de atletas em competições de ginástica. Nessa plataforma, os juízes, nas suas respectividas bancas, darão notas aos atletas participantes da competição vinculada a banca. No final da avaliação da banca, o sistema se encarregara de mostrar o ranking dos atletas competidores de acordo suas respectivias notas.
## 1.3. Visão Geral
O documento está segmento em Representação de Arquitetura, Metas e Restrições da Arquitetura, Visão de Casos de Uso,  Visão Lógica e Visão de Dados.
# 2. Representação de Arquitetura

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
 
