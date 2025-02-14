function gradingStudents(grades) {
    return grades.map((grade) => {
        if (grade < 38) {
            return grade; // Notas menores que 38 não são arredondadas
        }

        const roundedGrade = Math.ceil(grade / 5) * 5; // Próximo múltiplo de 5
        return (roundedGrade - grade < 3) ? roundedGrade : grade; // Arredonda se a diferença for menor que 3
    });
}

// Exemplo de entrada
const notas = [73, 67, 38, 33];
const notasArredondadas = gradingStudents(notas);

console.log(notasArredondadas); // Saída: [75, 67, 40, 33]
