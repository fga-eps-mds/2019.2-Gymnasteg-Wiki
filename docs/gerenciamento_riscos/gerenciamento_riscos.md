| Data | Versão | Descrição | Autor |
|:----:|:------:|:---------:|:-----:|
| 13/09/2019 | 0.1 | Versão inicial | Igor Veludo |

# 1. Introdução

Esse documento tem como objetivo identificar e categorizar os possíveis riscos e as suas gravidades, também é função desse documento formecer medidas de monitoramento e controle, juntamente com os responsáveis pelo seu gerenciamento.

# 2. Gerência dos Riscos

De acordo com o PMBOK, a aplicação do gerenciamento de riscos é vital para a comunicação, obtenção de acordo e apoio entre as partes interessadas. Para garantir que todos os riscos serão organizados aplicando os tópicos a seguir.

## 2.1 Responsabilidades
Os responsáveis pelo controle e monitoramento dos riscos serão todos os integrantes da equipe de gerência (EPS). Os membros e os riscos por quais ficaram responsáveis serão definidos por reunião presencial, com base no perfil de cada membro da gerência.

## 2.2 Categoria dos Riscos

As categorias que serão utilizadas neste projeto são:

* **Técnico**

Os riscos técnicos abordam os requisitos, tecnologia, complexidade, confiabilidade e qualidade.

* **Organizacional**

Os riscos organizacionais abordam as dependências do projeto, recursos, e priorização.

* **Gerenciamento de projetos**

Os riscos de gerenciamento do projeto abordam a estimativa, planejamento, controle e a comunicação.
## 2.3 EAR
Esta estrutura, também conhecida como EAR, é responsável por agrupar as possíveis causas dos riscos, o que facilita o tratamento e reconhecimento de riscos do projeto, facilitando o processo de mitigação dos riscos.

Os riscos podem ser classificados de acordo com várias categorias. Técnico, que são riscos associados à tecnologia, requisitos e qualidade. Externo, são riscos relativos ao cliente, mercado ou ambiente. Organizacional, são relacioandos à priorização e recursos do projeto. Gerência, são relativos à estimativa, planejamento, controle e comunicação.
# 3. Identificação dos Riscos
O processo de identificação de riscos se utilizou de identificação de riscos atráves da comparação análoga - método que se utiliza de experiências anteriores e similares para facilitar a concepção e identificação comum em projetos do gênero.

# 4. Registro dos Riscos

Os riscos do projeto foram divididos em dois grupos: **positivos** e **negativos**. Riscos positivos são decisões que possuem um bom propósito, mas podem acabar gerando riscos ao projeto. Os riscos negativos são o oposto dos positivos.

## 4.1. Documentação dos Riscos

Para a documentação dos riscos, foram definidos 5 atributos, sendo eles o *ID*, *Acontecimento*, *Causa* e *Impacto*. Para isto foram elaboradas duas tabelas, uma para riscos negativos e outra para riscos positivos, seguem as duas tabelas:

### 4.1.1 Riscos Negativos

| ID | se | por conta | o impacto será |
|:--:|:--:|:---------:|:--------------:|
|RN01|a equipe de gerência gastar a maior parte do seu tempo na capacitação da equipe|da reatividade da equipe de desenvolvimento|mau gerenciamento do projeto|
|RN02|um ou mais membros da equipe sairem ou ficarem ausentes|de problemas pessoais ou desistência|produto não ser entregue conforme o esperado e excesso de trabalho para o restante da equipe|
|RN03|houver problema na comunicação da equipe|da grande quantidade de membros na equipe|baixa integração e alinhamento da equipe|
|RN04|ocorrer mudança de escopo|da validação do cliente ou definição da disciplina|replanejamento do projeto|
|RN05|a arquitetura do software for mal desenvolvida|falta de experiência da equipe|mau funcionamento do software|
|RN06|houver dificuldade no desenvolvimento|do tema do projeto|atraso no cronograma
|RN07|houver problemas de versionamento de ferramentas|de má configuração de ambiente|atraso no desenvolvimento|
|RN08|houver problemas com a aplicação do Devops|de falhas nas práticas de Continuos Integration, Continuous Delivery e/ou Continuous Deploy|a não entrega do produto|

### 4.1.2. Riscos Positivos

| ID | se | por conta | o impacto será |
|:--:|:--:|:---------:|:--------------:|
|RP01|o software atende os requisitos|de boas funcionalidades|utilizado para votações nas competições de ginástica|

## 4.2. Interpretação dos Riscos
Após a documentação dos riscos, eles devem ser avaliados quanto seu *impacto*, *probabilidade* e *prioridade*, além de definir-se uma estratégia de abordagem de monitoramento e controle e seu responsável. Para isto foram elaboradas duas tabelas, uma para riscos negativos e outra para riscos positivos.

### 4.2.1. Riscos Negativos

|ID| Impacto | Probabilidade | Prioridade | Estratégia | Responsável | Monitoramento | Resposta |
|:--:|:-------:|:-------------:|:----------:|:----------:|:-----------:|:------------:|:-------:|
|RN01|Alto|Média|Alta|Mitigar|Equipe de EPS|Verificar a quantidade de horas, dos membros de gerência, dedicadas a atividades de capacitação|Indicar a ajuda dos coachs para a equipe de desenvolvimento|


|ID| Impacto | Probabilidade | Prioridade | Estratégia | Responsável |Monitoramento|Resposta|
|:--:|:-------:|:-------------:|:----------:|:----------:|:-----------:|:------------:|:-------:|
|RN02|Muito Alto|Média|Muito Alta|Prevenir|Equipe de EPS|Adequar o planejamento do projeto afim de evitar a evasão do membro|membro permanecer ativo no desenvolvimento do projeto|

|ID| Impacto | Probabilidade | Prioridade | Estratégia | Responsável |Monitoramento|Resposta|
|:--:|:-------:|:-------------:|:----------:|:----------:|:-----------:|:------------:|:-------:|
|RN03|Muito Alto|Médio|Muito Alta|Prevenir|Equipe de EPS|Manter a comunicação fluida por meio de feedback dos integrantes do time de desenvolvimento| Boa comunicação da equipe |

|ID| Impacto | Probabilidade | Prioridade | Estratégia | Responsável |Monitoramento|Resposta|
|:--:|:-------:|:-------------:|:----------:|:----------:|:-----------:|:------------:|:-------:|
|RN04|Baixo|Baixo|Baixa|Mitigar|Equipe de EPS|Manter sempre contato com o cliente, assegurando a validação do escopo|Avaliar e selecionar as mudanças que serão necessárias para melhorar a aplicação|

|ID| Impacto | Probabilidade | Prioridade | Estratégia | Responsável |Monitoramento|Resposta|
|:-:|:-------:|:-------------:|:----------:|:----------:|:-----------:|:------------:|:-------:|
|RN05|Alto|Baixa|Alta|Mitigar|Equipe de EPS|Verificar se todos os membros estão alinhados a respeito da arquitetura do sistema|Manter o documento de arquitetura atualizado e entedido pela equipe de desenvolvimento|

|ID| Impacto | Probabilidade | Prioridade | Estratégia | Responsável |Monitoramento|Resposta|
|:--:|:-------:|:-------------:|:----------:|:----------:|:-----------:|:------------:|:-------:|
|RN06|Alto|Média|ALta|Prevenir|Equipe de EPS|Monitorar o grau de entendimento da equipe sobre o tema do projeto|Promover reuniões gerais para esclarecimentos|

|ID| Impacto | Probabilidade | Prioridade | Estratégia | Responsável |Monitoramento|Resposta|
|:--:|:-------:|:-------------:|:----------:|:----------:|:-----------:|:------------:|:-------:|
|RN07|Médio|Baixa|Média|Prevenir|Equipe de EPS|Acompanhar problemas relatados pela equipe de desenvolvimento|Utilizar a ferramenta Docker para padronizar o ambiente de desenvolvimento e deploy|

|ID| Impacto | Probabilidade | Prioridade | Estratégia | Responsável |Monitoramento|Resposta|
|:--:|:-------:|:-------------:|:----------:|:----------:|:-----------:|:------------:|:-------:|
|RN08|Muito Alto|Média|Muito Alto|Prevenir|DevOps|Acompanhar se as ferramentas de DevOps estão trabalhando corretamente|Estudar e aplicar tecnologias que resolvam o problema|

### 4.2.2. Riscos Positivos

|ID| Impacto | Probabilidade | Prioridade | Estratégia | Responsável |Monitoramento|Resposta|
|:--:|:-------:|:-------------:|:----------:|:----------:|:-----------:|:--------:|:-------:|
|RP01|Muito Alto|Médio|Muito Akto|Aceitar|Equipe de EPS e MDS|Analisar e aplicar as funcionalidades necessárias junto ao cliente|Projeto entregue|

# 5. Análise qualitativa dos Riscos
A análise qualitativa dos riscos consiste no processo de priorização de riscos para que seja possível relaciona-los com a sua probabilidade de ocorrência e impacto. Com a sua aplicação os gerentes do projeto podem reduzir o nível de incerteza e focar os ricos de alta prioridade. Essa análise é vista nas tabelas definidas anteriormente.

## 5.1. Categorização de riscos

A utilização do EAR deve ser usada para a compreensão dos riscos. A equipe de gerência deve identificar à qual categoria e subcategorias do EAR os riscos se encaixam.

# 6. Análise quantitativa dos Riscos

Análise quantitativa consiste em analisar numericamente o efeito dos riscos identificados nos objetivos do projeto. Os riscos vão ser quantificados em relação a **impacto**, **probabilidade** e **prioridade**.

Os riscos então devem ser classificados usando a seguinte escala:

* **Muito baixo**
* **Baixo**
* **Moderado**
* **Alto**
* **Muito Alto**

A classificação de cada risco deve ser feita em reunião da equipe de gerenciamento para atribuir o valor correto a cada risco.

## 6.1. Quantificação do Impacto

Para conseguir quantificar o impacto a equipe de gerenciamento deve levar em conta **custo**, **tempo**, **escopo** e **qualidade**.

A tabela abaixo deve ser usada como referência:

| Impacto | Intervalo |
|:-------------:|:---------:|
| **Muito Baixo** | menor que 20% |
| **Baixo** | de 21% a 40% |
| **Médio** | de 41% a 60% |
| **Alto** | de 61% a 80% |
| **Muito Alto** | Acima de 80% |

## 6.2. Quantificação da Probabilidade

Para quantificar os riscos em relação a sua probabilidade de ocorrência a seguinte tabela deve ser usada:

| Probabilidade | Intervalo |
|:-------------:|:---------:|
| **Muito Baixa** | menor que 10% |
| **Baixa** | de 11% a 30% |
| **Média** | de 31% a 50% |
| **Alta** | de 51% a 60% |
| **Muito Alta** | de 61% a 70% |

## 6.3. Quantificação da Prioridade

Para definir a prioridade do risco deve-se relacionar a Probabilidade com o Impacto do risco como na tabela a seguir:

| Probabilidade / Impacto | Muito Baixa | Baixo | Média | Alta | Muito Alta |
|:-----------------------:|:-----------:|:-----:|:-----:|:----:|:----------:|
| **Muito Baixo** | 1 | 2 | 3 | 4 | 5 |
| **Baixo** | 2 | 4 | 6 | 8 | 10 |
| **Médio** | 3 | 6 | 9 | 12 | 15 |
| **Alto** | 4 | 8 | 12 | 16 | 20 |
| **Muito Alto** | 5 | 10 | 15 | 20 | 25 |

A prioridade dos riscos deve ser definida pela equipe de gerência de acordo com a experiência de seus integrantes. A tabela a seguir deve ser usada para quantificar os riscos:

| Prioridade | Intervalo |
|:-------------:|:---------:|
| **Muito Baixa** | 1 ~ 4 |
| **Baixa** | 5 ~ 9 |
| **Média** | 10 ~ 14 |
| **Alta** | 15 ~ 19 |
| **Muito Alta** | 20 ~ 25 |

# 7. Planejamento de Resposta dos Riscos

A resposta aos riscos consiste na atividade de aumentar as oportunidades e reduzir as ameaças aos objetivos do projeto, assim permitindo a abordade dos riscos por prioridades.

Os riscos serão classificados em 2 tipos **Riscos negativos** e **Riscos positivos**. Segue abaixo a a abordagem que deve ser aplicada a cada um deles:

## 7.1. Riscos negativos

Riscos negativos são aqueles que podem atrapalhar ou impedir a execução do projeto.

Caso seja necessário utilizar alguma abordagem pela equipe de gerenciamento, ela deve ser documentada de forma sucinta.

As seguintes atitudes devem ser tomadas para abordar da melhor forma os riscos negativos:

### 7.1.1. Prevenir

Uma estratégia de resposta ao risco, a equipe do projeto deve agir para eliminar a ameaça ou proteger o projeto contra o impacto desse risco. Para isso os planejamentos podem ser alterados buscando a total eliminação da ameaça. Extensão do cronograma, alteração da estratégia ou redução do escopo podem ser atitudes adotadas buscando a prevenção do risco.

### 7.1.2. Transferir

A estratégia aplicada com a transferência de riscos consiste em alocar o impacto e responsabilidade  da ameaça para terceiros. Essa abordagem não elimina o risco apenas tira o esforço de gerenciamento dela para outra área, equipe ou software.

### 7.1.3. Mitigar

Mitigar o risco é uma resposta em que a equipe do projeto age para reduzir a probabilidade ou impacto do risco. Buscar a redução da possível ocorrência do risco é melhor do que reparar o dano dele. Quando não é possível reduzir a probabilidade, deve-se abordar fatores determinantes para a gravidade do impacto.

### 7.1.4. Aceitar

A aceitação é a resposta ao risco em que a equipe decide não agir para diminuir a orcorrência do risco. Essa abordagem é aplicada quando não é possível ou economicamente inviável evitar, diminuir ou transferir o risco.

## 7.2. Riscos positivos

As estratégias a seguir devem ser usadas de acordo com o risco positivo, buscando o melhor aproveitamento dele.

### 7.2.1. Explorar

Essa estratégia pode ser escolhida para riscos em que exista o desejo de garantir que a oportunidade seja concretizada. Ela procura eliminar incertezas e garante o acontecimento do risco.

### 7.2.2. Melhorar

Essa estratégia é usada para aumentar a probabilidade ou impacto de um risco positivo.Identificar e maximizar os principais fatores desse risco pode trazer grandes avanços para os objetivos do projeto.

### 7.2.3. Compartilhar

O compartilhamento de um risco consiste em alocar integral ou parcialmente a responsabilidade a um terceiro que tenha mais capacidade de explora-lo.

### 7.2.4. Aceitar

Essa estratégia consiste em aceitar a oportunidade caso ocorra, porém não persegui-la.

# 8. Controle dos Riscos

O Controle dos riscos é a implementação da **resposta aos riscos**. Tendo em mente as estratégias de abordagem dos diferentes riscos, a equipe deve se organizar para explorar ou eliminar riscos. A Técnica utilizada para gerenciar os riscos é a de **reuniões**.

## 8.1. Reuniões

Para garantir o monitoramento dos riscos, o gerenciamento dos riscos deve ser um item das reuniões periódicas do projeto. O tempo e atenção devem ser alocados de acordo com o estado de cada risco. A aplicação dessa técnica visa melhorar a gerência de riscos com o monitoramento frequente dos riscos.

# 9. Referências

*PMI. Um guia do conhecimento em gerenciamento de projetos. Guia PMBOK 5a. ed. - EUA: Project Management Institute, 2013.*

*https://github.com/fga-gpp-mds/2017.1-PlataformaJogosUnB/wiki/Plano-de-Gerenciamento-de-Riscos*

*https://github.com/fga-gpp-mds/2017.1-PlataformaJogosUnB/wiki/Riscos*de uma questão que gerou conflito enquanto se estava elicitando os requisitos e verificar qual argumento leva ao caminho "vencedor".
