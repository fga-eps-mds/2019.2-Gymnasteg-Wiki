# Política de Commits



###  *Commits* atômicos
  Sempre divida seu trabalho em *commits* pequenos e significativos de forma que cada *commit* implemente somente uma funcionalidade.
  
  Adota-se para este projeto padrões para o comentário e execução dos commits. O idioma padrão para efetuar commits neste reositório é o inglês. As mensagens devem ser suscintas e expressarem de forma clara e objetiva a ação do commit.

### Regra 50/72
  As mensagens devem ser escritas em 50 caracteres, caso seja necessário escrever uma mensagem maior, escreva um resumo em 50 caracteres, adicione um linha em branco, e descreva melhor o *commit* em quantas linhas desejar, porém todas as linhas devem ter no máximo 72 caracteres. Caso não consiga descrever o seu *commit* com essa regra, o seu commit provavelmente não é atômico.


## Commit

A anatomia do commit deve seguir o seguinte padrão:

**Formato**:

```
<tipo>(#número da issue): assunto

<corpo>
```

### Assunto

* Máximo de 50 caracteres
* Tipo de escopo devem estar em letras minúsculas

Exemplo:

`feat(#35): add route `.

Os valores permitidos para o `tipo` são:

* `feat`: nova funcionalidade
* `style`: formatação geral no código
* `refact`: refatoração de código
* `test`: adicionar/refatorar testes
* `fix`: correções
* `docs`: relacionado a documentação

