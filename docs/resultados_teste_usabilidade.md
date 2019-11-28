---
id: resultado_usabilidade
title: Resultados Teste de Usabilidade
sidebar_label: Resultados Teste de Usabilidade
---

|    Data    | Versão |                             Descrição                             |           Autor(es)           |
| :--------: | :----: | :---------------------------------------------------------------: | :---------------------------: |
| 14/11/2019 |  0.1   |          Resultados do Teste de Usabilidade        |         Igor Veludo e Byron Kamal          |

## Roteiro de Teste

### Atividade 1
**Contexto: Tentar cadastrar um árbitro.**

Comando da tarefa:
- Cadastrar uma árbitro a partir do menu lateral;
- Insira as informações do árbitro;
- Espera a mensagem de cadastro com sucesso;
- Apos o refresh da página, ver o árbitro adicionado na tabela.

Critério de sucesso: Ver árbitro adicionado na tabela.

Erros: Não conseguir criar um árbitro.

Pontos de observação: Usuário entendeu o funcionamento do menu lateral para criação de um árbitro.

O processo de cadastro do árbitro foi realizado com sucesso.

### Atividade 2
**Contexto: Tentar cadastrar um atleta.**

Comando da tarefa:
- Cadastrar uma atleta a partir do menu lateral;
- Insira as informações do atleta;
- Espera a mensagem de cadastro com sucesso;
- Apos o refresh da página, ver o atleta adicionado na tabela.

Critério de sucesso: Ver atleta adicionado na tabela.

Erros: Não conseguir criar um atleta.

Pontos de observação: Usuário entendeu o funcionamento do menu lateral para criação de um atleta por ser muito parecido com a criação do árbitro.

O processo de cadastro do atleta foi realizado com sucesso.

### Atividade 3
**Contexto: Tentar cadastrar uma banca.**

Comando da tarefa:
- Cadastrar uma banca a partir do dashboard;
- Insira as informações do banca;
- Espera a mensagem de cadastro com sucesso;
- Veja o atleta adicionado na tabela.


Critério de sucesso: Ver atleta adicionado na tabela.

Erros: Não conseguir adicionar um atleta.

Pontos de observação: Usuário entendeu o funcionamento do dashboard.

O processo de cadastro da banca demorou mais do que o esperado, porém o cadastro foi realizado.

### Atividade 4
**Contexto: Tentar login como árbitro e acessar dashboard de árbitro.**

Comando da tarefa:
- Encontrar dashboard de árbitro a partir do menu lateral;
- Visualizar os dados das bancas cadastradas;

Critério de sucesso: Ver dados das bancas cadastradas

Erros: Não conseguir ver bancas cadastradas.

Pontos de observação: Usuário ficou confuso neste tipo de login pois não há informação na aplicação que mostre a divisão de papeis entre um coordenador e um árbitro.

Foi necessário que o aplicador do teste informasse que existe essa divisão de papeis.

Mesmo com a dificuldade citada acima, o usuário conseguiu visualizar os dados das bancas cadastradas.

### Observações gerais e melhorias que podem ser aplicadas
- É preciso melhorar o fluxo de informação da aplicação, pois o usuário apresentou dificuldade em algumas tarefas de certas ações.

- Em alguma parte da aplicação deveria ter alguma aba de informação que mostrasse ao usuário que existe a separação de papeis de árbitro e coordenador.

- Dashboard de árbitro deveria aparecer somente quando um árbitro faz o login.
