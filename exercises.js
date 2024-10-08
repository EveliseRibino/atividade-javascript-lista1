//1.Função que calcula e retorna o fatorial de um número.
function calcularFatorial(n) {
    if(n == 0) return 1;
    return n* calcularFatorial(n-1);
}

//2. Função que retorna uma string contendo uma sequência de N mensagens do texto informado pelo usuário.
function repetirMensagem(mensagem, n) {
    return mensagem.repeat(n);
}

//3. Função que realiza operações básicas.

function calcularOperacao(valor1, valor2, operacao) {
    switch (operacao) {
        case 'adição':
            return valor1 + valor2;
        case 'subtração':
            return valor1 - valor2;
        case 'multiplicação':
            return valor1 * valor2;
        default:
            return null;
    }
}

//4. Função que retorna a tabuada de um número.

function tabuada(n) {
    let resultados = [];
    for (let i = 1; i <= 10; i++) {
        resultados.push(n*i);
    }
    return resultados;
}

//5. Função que inverte um número.
function inverterNumero(numero) {
    return parseInt(numero.toString().split('').reverse().join(''));

}

//6. Função que conta o número de vogais em uma string.
function contarVogais(texto) {
    const vogais = 'aeiouAEIOU';
    let contador = 0;
    for(let char of texto) {
        if(vogais.includes(char)) contador++;
    }
    return contador;
}

//7. Função que verifica se a sequência de parênteses e colchetes está bem formada.
function sequenciaBemFormada(sequencia) {
    const pilhas = [];
    const pares = {'(':')', '[':']'};
    for (let char of sequencia) {
        if(char in pares) {
            pilhas.push(char);
        }else {
            const topo = pilha.pop();
            if (pares[topo]!== char) return false;
        }
    }
    return pilha.length ===0;
}

//8. Função que gera uma lista de objetos(id, nome, idade) aleatórios.
function gerarObjetosAleatorios(quantidade){
    const nomes = ['Ana', 'João', 'Pedro', 'Maria', 'Lucas'];
    let lista = [];
    for (let i = 1; i <=quantidade; i++){
        const nome = nomes[Math.floor(Math.random() * nomes.length)];
        const idade = MAth.floor(Math.random() * (90 - 18 +1)) + 18;
        lista.push({id: i, nome, idade});
    }
    return lista;
}

//9. Função que calcula a média de idades de uma lista de objetos.
function calcularMediaDeIdades(lista){
    const somaIdades = lista.reduce((acc, pessoa) => acc + pessoa.idade, 0);
    return somaIdades / lista.length;
}

//10. Função que ordena a lista de objetos por um atributo (id, nome ou idade).
function ordenarPor(lista, atributo) {
    return lista.sort((a, b) => (a[atributo] > b[atributo] ? 1 : -1));
}
