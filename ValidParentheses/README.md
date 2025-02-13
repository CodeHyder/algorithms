# Validador de Parênteses

Este projeto implementa um algoritmo para verificar se uma string contendo parênteses, colchetes e chaves está balanceada. Ou seja, ele verifica se cada caractere de abertura ((, {, [) tem um caractere de fechamento correspondente (), }, ]) na ordem correta.

## Como funciona

O algoritmo usa uma pilha (stack) para garantir que os caracteres de abertura e fechamento estejam balanceados. Aqui está o passo a passo:

### Inicialização

- Uma pilha vazia é criada para armazenar os caracteres de abertura.

```javascript
const stack = [];
```

- Um objeto (bracketPairs) mapeia cada caractere de fechamento ao seu correspondente de abertura.

```javascript
const bracketPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
```

### Iteração pela string

Para cada caractere na string:

```javascript
for (let char of s)...
```

- Se for um caractere de abertura ((, {, [), ele é adicionado à pilha.

```javascript
if (char === '(' || char === '{' || char === '[') {
            stack.push(char); // Se o caractere for de abertura, empilha
        } 
```

- Se for um caractere de fechamento (), }, ]), o algoritmo verifica se ele corresponde ao caractere no topo da pilha:

```javascript
else { 
        if (stack.length === 0 || stack[stack.length - 1] !== bracketPai[char]) {
            return false; // Retorna false se não corresponder
        }
        stack.pop();
    }
```

- Se corresponder, o caractere do topo da pilha é removido.

```javascript
stack.pop();
```

- Se não corresponder, a string é inválida.

### Verificação final

Após processar todos os caracteres, se a pilha estiver vazia, a string é válida.

```javascript
return stack.length === 0; // Retorna true se a pilha estiver vazia
```

Se a pilha não estiver vazia, a string é inválida.

### Exemplos

Aqui estão alguns exemplos de strings e suas saídas esperadas:

| String | Resultado |
| -------- | ----- |
| "()"     | true |
| "()[]{}" | true |
| "(]" | false |
| "([{}])" | true |
| "({[)]" | false |
| "{" | false |
