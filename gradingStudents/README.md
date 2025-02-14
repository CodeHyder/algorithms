# Algoritmo de Arredondamento de Notas (gradingStudents)

Este é um algoritmo é um exercicio. A proposta é que ele arredonde as notas de estudantes de acordo com regras específicas.  

## Como funciona?

A função gradingStudents recebe um array de notas (grades) e retorna um novo array com as notas arredondadas. Para criar um novo array usamos o método map(). O novo array segue as regras abaixo:

- Notas menores que 38: Não são arredondadas, pois são consideradas reprovações.

```javascript
if (grade < 38) {
        return grade; // Notas menores que 38 não são arredondadas
    }
```

Notas iguais ou maiores que 38:

- Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, a nota é arredondada para o próximo múltiplo de 5.

```javascript
const roundedGrade = Math.ceil(grade / 5) * 5; // Próximo múltiplo de 5
return (roundedGrade - grade < 3) ? roundedGrade : grade; // Arredonda se a diferença for menor que 3
```

Caso contrário, a nota permanece inalterada
