---
id: especifica
title: especifica
sidebar_label: especifica
---

| Data | Versão | Descrição | Autor |
|:----:|:------:|:---------:|:-----:|
| 13/09/2019 | 0.1 | Versão inicial | João Victor |

# 1. Introdução

A especificação de requisitos de um sistema de software descreve as necessidades de usuários do sistema e, mais especificamente, descreve o conjunto de funcionalidades que o sistema deve fornecer. É a partir desta especificação que o projeto de software é desenvolvido para, em seguida, ser implementado. Quaisquer problemas como, por exemplo, de inconsistência ou ambigüidade, resultará em possíveis erros que precisarão ser corrigidos em alguma etapa futura do processo de desenvolvimento.

| Casos de uso                    | Ator        |                                                                                 
| ------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| UC01-Listar bancas              | Coordenador | Este caso de uso ocorre sempre que o coordenador loga no Gymnasteg                                                                            |
| UC02-Inserir dados              | Coordenador | Este caso de uso ocorrerá somente se o coordenador clicar em uma das modalidades                                                              |
| UC03-Carregar planilha de dados | Coordenador | Este caso de uso poderá ocorrer caso o coordenador preferir usar planilhas                                                                    |
| UC04-Criar Bancas               | Coordenador | Esta caso de uso ocorrerá somente se o coordenador inserir todos os dados necessários                                                         |
| UC05-Editar banca               | Coordenador | Este caso de uso ocorrerá somente se o coordenador tiver criado uma banca previamente                                                         |
| UC06-Visualizar Ranking         | Coordenador | Este caso de uso ocorrerá quando as votações forem submetidas                                                                                 |
| UC07-Listar bancas do Juiz      | Juiz        | Este caso de uso ocorrerá somente se uma banca que o Juiz estiver for criada pelo coordenador                                                 |
| UC07-Acessar banca              | Juiz        | Este caso de uso ocorrerá quando o juiz clicar em uma banca                                                                                   |
| UC08-Listar competidores        | Juiz        | Este caso de uso ocorrerá somente se o Juiz entrar na banca atual para votação                                                                |
| UC09-Liberar votação            | Juiz        | Este caso de uso poderá ocorrer quando o Juiz escolher um competidor                                                                          |
| UC010-Votar execução            | Juiz        | Este caso de uso poderá ocorrer quando todos os Juizes liberarem a votação e se o Juiz tiver autorização para votar execução e/ou dificuldade |
| UC011-Votar dificuldade         | Juiz        | Este caso de uso poderá ocorrer quando todos os Juizes liberarem a votação e se o Juiz tiver autorização para votar dificuldade e/ou execução |
| UC012-Votar                     | Juiz        | Este caso de uso ocorrerá quando o Juiz entrar com a potuação correta do seu tipo de avaliação                                                |


# Especificação de caso de uso 

## UC01 - listar bancas 

### Descrição 

Este caso de uso permite que o usuário possa visualizar as bancas para avaliação. Podendo ser feito a partir de um dispositivo e por meio de uma email cadastrado.

### Ator principal 

Coordenador 



### Fluxo Principal 


1. O caso de uso começa quando o usuário se loga no aplicativo.

2. O usuário seleciona a opção de criar um novo caderno.

3. O usuário insere o nome do novo caderno.

4. O caso de uso de encerra.


### Fluxos alternativos:

Pré-condições: O usuário deverá estar logado no sistema.

Pós-condições: O usuário terá um novo caderno criado.


## Fluxos de exceção

FE01 - Conexão com a Internet
Se não houver conexão com a internet, o sistema não completará a ação.




## UC02 - Inserir dados

### Descrição 

Este caso de uso permite que o usuário possa inserir os dados das bancas de avaliação. Podendo ser feito a partir de um dispositivo.

### Ator principal 

Coordenador 


### Fluxo Principal 


1. O caso de uso começa quando o usuário se loga no aplicativo.

2. O usuário seleciona uma das modalidades.

3. O usuário insere os dados.

4. O caso de uso de encerra.


### Fluxos alternativos:

Pré-condições: O usuário deverá estar logado no sistema.



## Fluxos de exceção

FE01 - Conexão com a Internet
Se não houver conexão com a internet, o sistema não completará a ação.




## UC03-Carregar planilha de dados

### Descrição 

Este caso de uso permite que o usuário possa utilizar uma planilha para carregar os dados. Podendo ser feito a partir de um dispositivo.

### Ator principal 

Coordenador 


### Fluxo Principal 


1. O caso de uso começa quando o usuário se loga no aplicativo.

2. O usuário seleciona a opção de carregar planilha.

3. O usuário insere a planilha.

4. O caso de uso de encerra.


### Fluxos alternativos:

Pré-condições: O usuário deverá estar logado no sistema.

Pós-condições: O usuário terá uma planilha adicionada.


## Fluxos de exceção

FE01 - Conexão com a Internet
Se não houver conexão com a internet, o sistema não completará a ação.





## UC04-Criar Bancas  

### Descrição 

Este caso de uso permite que o usuário possa criar bancas de avaliação. Podendo ser feito a partir de um dispositivo.

### Ator principal 

Coordenador 


### Fluxo Principal 


1. O caso de uso começa quando o usuário se loga no aplicativo.

2. O usuário seleciona a opção de criar uma banca.

3. O usuário insere os dados necessarios.

4. O usuário seleciona a opção de criar banca.

5. O caso de uso de encerra.

### Fluxos alternativos:

Pré-condições: O usuário deverá estar logado no sistema.

Pós-condições: O usuário terá uma nova banca criada.


## Fluxos de exceção

FE01 - Conexão com a Internet
Se não houver conexão com a internet, o sistema não completará a ação.






## UC05-Editar banca

### Descrição 

Este caso de uso permite que o usuário possa editar os dados das bancas de avaliação. Podendo ser feito a partir de um dispositivo.

### Ator principal 

Coordenador 


### Fluxo Principal 


1. O caso de uso começa quando o usuário se loga no aplicativo.

2. O usuário seleciona a opção de editar um banca.

3. O usuário insere os novos dados da banca.

4. O usuário clicar em editar banca.

5. O caso de uso de encerra.

### Fluxos alternativos:


Pré-condições: O usuário deverá estar logado no sistema.
Uma banca ja deverá existir

Pós-condições: O usuário terá uma banca editada.



## Fluxos de exceção

FE01 - Conexão com a Internet
Se não houver conexão com a internet, o sistema não completará a ação.





## UC06-Visualizar Ranking

### Descrição 

Este caso de uso permite que o usuário possa vusualizar o ranking de pontos. Podendo ser feito a partir de um dispositivo.

### Ator principal 

Coordenador 


### Fluxo Principal 


1. O caso de uso começa quando o usuário se loga no aplicativo.

2. O usuário seleciona a tela de ranking.

3. O caso de uso de encerra.


### Fluxos alternativos:

Pré-condições: O usuário deverá estar logado no sistema.




## Fluxos de exceção

FE01 - Conexão com a Internet
Se não houver conexão com a internet, o sistema não completará a ação.




## UC07-Listar bancas do Juiz 

### Descrição 

Este caso de uso permite que o usuário possa visualizar a banca para fazer as votações. Podendo ser feito a partir de um dispositivo.

### Ator principal 

Juiz 


### Fluxo Principal 


1. O caso de uso começa quando o usuário se loga no aplicativo.


2. O caso de uso de encerra.


### Fluxos alternativos:

Pré-condições: O usuário deverá estar logado no sistema.
Uma banca já deve ter sido criada.
O juiz já deve ter sido alocado para essa banca.



## Fluxos de exceção

FE01 - Conexão com a Internet
Se não houver conexão com a internet, o sistema não completará a ação.





## UC08-Acessar banca  

### Descrição 

Este caso de uso permite que o usuário tenha acesso as bancas de votação. Podendo ser feito a partir de um dispositivo.

### Ator principal 

Juiz 


### Fluxo Principal 


1. O caso de uso começa quando o usuário se loga no aplicativo.

2. O usuário seleciona uma banca.

4. O caso de uso de encerra.


### Fluxos alternativos:

Pré-condições: O usuário deverá estar logado no sistema.
Uma banca já deve ter sido criada.
O juiz já deve ter sido alocado para essa banca.
Pós-condições: O usuário terá acesso a banca para votar.


## Fluxos de exceção

FE01 - Conexão com a Internet
Se não houver conexão com a internet, o sistema não completará a ação.







## UC09-Listar competidores  

### Descrição 

Este caso de uso permite que o usuário ter acesso aos competidores para poder votar. Podendo ser feito a partir de um dispositivo.

### Ator principal 

Juiz 


### Fluxo Principal 


1. O caso de uso começa quando o usuário se loga no aplicativo.

2. O usuário seleciona uma banca.

3. O usuário pode mudar as ordens.

4. O caso de uso de encerra.


### Fluxos alternativos:

Pré-condições: O usuário deverá estar logado no sistema.
Uma banca já deve ter sido criada.
O juiz já deve ter sido alocado para essa banca.
Pós-condições: O usuário terá um novo caderno criado.



## Fluxos de exceção

FE01 - Conexão com a Internet
Se não houver conexão com a internet, o sistema não completará a ação.







## UC10-Liberar votação 

### Descrição 

Este caso de uso permite que o usuário possa ter acesso a votação de cada atleta. Podendo ser feito a partir de um dispositivo.

### Ator principal 

Juiz 


### Fluxo Principal 


1. O caso de uso começa quando o usuário se loga no aplicativo.

2. O usuário seleciona a opção de votar.

3. O usuário tem ate um minuto para fazer a votação do atleta.

4. O caso de uso de encerra.


### Fluxos alternativos:

Pré-condições: O usuário deverá estar logado no sistema.
Uma banca já deve ter sido criada.
O juiz já deve ter sido alocado para essa banca.



## Fluxos de exceção

FE01 - Conexão com a Internet
Se não houver conexão com a internet, o sistema não completará a ação.






## UC11-Votar execução 

### Descrição 

Este caso de uso permite que o usuário possa votar a execução do movimento. Podendo ser feito a partir de um dispositivo.

### Ator principal 

Juiz 


### Fluxo Principal 


1. O caso de uso começa quando o usuário se loga no aplicativo.

2. O usuário seleciona a opção de votar execução.

3. O usuário tem 9 pontos para votar.

4. O caso de uso de encerra.


### Fluxos alternativos:

Pré-condições: O usuário deverá estar logado no sistema.
Uma banca já deve ter sido criada.
O juiz já deve ter sido alocado para essa banca.
Pós-condições: O usuário terá atleta com potuação.




## Fluxos de exceção

FE01 - Conexão com a Internet
Se não houver conexão com a internet, o sistema não completará a ação.





## UC011-Votar dificuldade 

### Descrição 

Este caso de uso permite que o usuário possa votar a dificuldade do movimento. Podendo ser feito a partir de um dispositivo.

### Ator principal 

Juiz 


### Fluxo Principal 


1. O caso de uso começa quando o usuário se loga no aplicativo.

2. O usuário seleciona a opção de votar execução.

3. O usuário tem 6 pontos para votar.

4. O caso de uso de encerra.


### Fluxos alternativos:

Pré-condições: O usuário deverá estar logado no sistema.
Uma banca já deve ter sido criada.
O juiz já deve ter sido alocado para essa banca.



## Fluxos de exceção

FE01 - Conexão com a Internet
Se não houver conexão com a internet, o sistema não completará a ação.





## UC012-Votar  

### Descrição 

Este caso de uso permite que o usuário possa submeter sua votação. Podendo ser feito a partir de um dispositivo.

### Ator principal 

Juiz 


### Fluxo Principal 


1. O caso de uso começa quando o usuário se loga no aplicativo.

2. O usuário seleciona a opção de votar.

3. O caso de uso de encerra.


### Fluxos alternativos:

Pré-condições: O usuário deverá estar logado no sistema.
Uma banca já deve ter sido criada.
O juiz já deve ter sido alocado para essa banca.

## Fluxos de exceção

FE01 - Conexão com a Internet
Se não houver conexão com a internet, o sistema não completará a ação.


# 9. Referências

Especificação de casos de uso na prática. DEVMEDIA. Disponível em: https://www.devmedia.com.br/especificacao-de-casos-de-uso-na-pratica/18427.

O que é UML e Diagramas de Caso de Uso: Introdução Prática à UML. DEVMEDIA. Disponível em: https://www.devmedia.com.br/o-que-e-uml-e-diagramas-de-caso-de-uso-introducao-pratica-a-uml/23408.

Diretrizes: Modelo de Casos de Uso. Funpar. Disponível em: http://www.funpar.ufpr.br:8080/rup/process/modguide/md_ucmod.htm.