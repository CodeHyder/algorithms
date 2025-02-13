function isValid(s) {
    const stack = []; // Inicializa a pilha
    const bracketPairs = { // Mapeia os pares de caracteres
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char); // Se o caractere for de abertura, empilha
        } else {
            // Verifica se a pilha está vazia ou se o topo não corresponde
            if (stack.length === 0 || stack[stack.length - 1] !== bracketPairs[char]) {
                return false; // Retorna false se não corresponder
            }
            stack.pop(); // Remove o caractere correspondente do topo da pilha
        }
    }

    return stack.length === 0; // Retorna true se a pilha estiver vazia
}

// Testes
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([])")); // true