## Histórico de alterações
|Data|Versão|Descrição|Autor|
|--|--|--|--|
|07/09/2019|1.0|Criação da estrutura base do documento de visão|Fabrício Monteiro
|09/09/2019|1.1|Adição das Restrições e Perfis de Usuário|Matheus Felizola e Fellipe Araújo
|09/09/2019|1.2|Correção da numeração dos tópicos de Tecnologias, adição das Funcionalidades do Produto e Perfil das partes interessadas.|Matheus Felizola, Fellipe Araújo, e Luiz Pettengill
|09/09/2019|1.3|Adição do posicionamento do produto.|Luiz Pettengill, Matheus Felizola e Fellipe Araújo
# 1. Introdução
## 1.1. Propósito
Este documento apresenta o detalhamento e as justificativas referentes ao desenvolvimento do projeto Gymnasteg, além de deixar explícito o contexto em que este software atuará.
Este documento, também, visa apresentar diagramas e modelos para representar o funcionamento e detalhes do software.

## 1.2. Escopo
O documento de visão tem o objetivo de deixar explícito os problemas em que o projeto Gymnasteg se propõe a resolver e as soluções em que o mesmo se propõe a adotar para atingir seu objetivo.
É importante ressaltar que este documento será evoluído ao decorrer do desenvolvimento do projeto.

## 1.3. Visão geral
O Gymnasteg visa a desburocratização do processo de avaliações em competições de ginástica. Nesta perspectiva, o software proverá controle da competição para o administrador, e auxiliará os juizes no momento de suas avaliações.
Com isso, será descrito tópicos como:
- oportunidade de negócio;
- a problemática que este software visa resolver;
- posicionamento deste software em relação ao mercado;
- escopo, tecnologias, abordagens para assegurar a qualidade no desenvolvimento;
- introdução e descrição das partes interessadas.

## 1.4. Definições, Acrônimos e Abreviações
|Abreviação|Descrição|
|--|--|
|API|*Application Programming Interface*, conjunto de rotinas e padrões de programação para acesso a um aplicativo de software ou plataforma baseado na Web.|

# 2. Posicionamento
## 2.1. Oportunidade de negócio
Gymnasteg, é um sistema para avaliações da performance de ginastas em suas competições. Com o Gymnasteg, o usuário administrador poderá cadastrar todas as modalidades da competição, assim como os respectivos juízes que farão as avaliações.

## 2.2. Descrição do problema
Existe uma grande dificuldade em manter as informações das avaliações feitas em competições de ginástica centralizadas.
|Problema|Quem é afetado|Impactos|Solução|
|--|--|--|--|
|Dificuldade na centralização das avaliações em uma competição de ginástica.|Administradores, juízes e atletas.|Por ser um processo manual, a burocracia nos momentos das avaliações é a maior dor dos envolvidos no processo.|O Gymnasteg tratará e centralizará todas as notas de cada modalidade da competição, provendo uma análise mais rápida e eficiente das avaliações.|

## 2.3. Posicionamento do produto
Gymnasteg é voltado para organizadores e árbitros de competições de ginástica, centralizando e automatizando a contabilidade de votos e ranqueamento dos ginástas.

| |Instrução de posição do produto|
|--|--|
|Para|Organizações envolvidas com competições de ginástica.|
|Que|Tenham necessidade de automatizar o ranqueamento de ginastas.|
|Gymnasteg é|Um sistema de avaliação e ranqueamento de participates de competições de ginásticas.|
|Que|automatiza o ranqueamento dos ginastas de acordo com a votação dos árbitros de forma confiável.|
|Diferente do|Sistema utilizado pelo cliente anteriormente.|
|Nosso produto|Atua em competições de ginástica tanto infantis quanto para adultos.|



# 3. Visão geral do produto
## 3.1. Escopo do produto
O projeto será composto por duas visões, as quais formam o escopo geral da aplicação.

A primeira visão é a do usuário administrador. Este usuário poderá visualizar, cadastrar, editar e deletar modalidades de esportes na competição. Assim como também poderá ver as estatísticas e *status* das modalidades e gerenciar aspectos de organização do evento.

A segunda visão é do juiz. Este usuário poderá acessar as modalidades em que está cadastrado como membro da banca avaliadora, e realizar as devidas avaliações dos atletas participantes da respectiva modalidade.

Cada visão se comunicará com uma API para que haja a correta transmissão das informações, que serão processadas e atualizadas no computador principal (que rodará com a visão do administrador).

## 3.2. Propósito do produto
Compreendendo a falta de centralização das avaliações de uma competição, a demora que este processo pode levar e a necessidade de automatização deste fluxo fazem com que o Gymnasteg surja para solucionar essas dores.

## 3.3. Tecnologias

### 3.3.1 Front-end
Para desenvolver o front-end da aplicação, será utilizado **ReactJS**.

### 3.3.2 Back-end
Para desenvolver o back-end da aplicação, será utilizado **NodeJS** para a construção da API e **PostgreSQL** como banco de dados.

### 3.3.3 Dev-ops


## 3.4. Funcionalidades do produto
- Administradores podem cadastrar, editar e deletar bancas de avaliação, árbitros e participantes.
- Árbitros podem avaliar participantes quanto à execução dos movimentos e características subjetivas.
- Visualizar Ranking dos Participantes.
- Nomear a competição.

# 4. Qualidade

# 5. Visão geral do produto

## 5.1. Perfis das partes interessadas
- **Cliente:** Roberto de Souza Baptista, Professor de Engenharia Eletrônica da FGA
- **Usuários:** Organizadores e árbitros de competições de ginástica.
- **Equipe:** É composta por graduandos em Engenharia de Software pela Universidade de Brasília, no Campus Gama, discentes das disciplinas de Engenharia de Produto de Software e Métodos de Desenvolvimento de Software.

## 5.2. Perfis do usuário
O Gymnasteg servirá para dois tipos de usuário durante a ocorrência da competição, os quais estão descritos na tabela abaixo:
 
|Representante|Descrição|Responsabilidades|Critérios de Sucesso|Envolvimento|Comentários ou Problemas|
|--|--|--|--|--|--|
|Administrador|Organizadores de competições de ginástica.|Organizar as bancas de árbitros para avaliação dos competidores, e cadastrar os árbitros e participantes.|Agilidade na execução das tarefas com a menor quantidade possível de erros.|Alto.|Ter muitos árbitros e participantes para cadastrar.|
|Árbitro|Árbitros de competições de ginástica.|Avaliar competidores com base em sua execução e/ou critérios subjetivos.|Conseguir avaliar um ginasta e comunicar a nota pro computador central.|Médio.|Conseguir as credenciais de acesso. Árbitros ou competidores faltantes. Queda na conexão com a internet.|
|Atleta|Participantes de competições de ginástica.|Participar da competição.|Estar presente na competição.|Mínimo.|Administrador esquecer de cadastrá-lo.|

# 6. Restrições
 - Gymnasteg é um SPA(Single Page Application) desenvolvido para a plataforma **Web** utilizando **ReactJS**.
 - O sistema **não funcionará** quando o Javascript estiver desabilitado no navegador.
 - O sistema requer uma **conexão ativa com a internet**.
 - A interface de votação deve funcionar em resoluções de tela de **320x480 pixels ou superior**.
 - A interface do usuário administrador deve funcionar em resoluções de tela de **800x600 ou superior**.

# 7. Referências
- IBM Knowledge Center - Documento de Visão: A estrutura de tópicos do documento de visão. Disponível em: https://www.ibm.com/support/knowledgecenter/pt-br/SSWMEQ_4.0.6/com.ibm.rational.rrm.help.doc/topics/r_vision_doc.html. Acesso em 05/09/2019.
