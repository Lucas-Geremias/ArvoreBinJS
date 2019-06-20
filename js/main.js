//Declara uma variável local no escopo do bloco atual, opcionalmente iniciando-a com um valor.
//let permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma 
//expressão na qual ela é usada. Isso é inverso da keyword var, que define uma variável globalmente 
//ou no escopo inteiro de uma função, independentemente do escopo de bloco.
let tree = new BinaryTree();
$().ready(()=>{
    $('#btnInserir').click(inserir);
    $('#btnBuscar').click(buscar);
    $('#btnMenor').click(menor);
    $('#btnMaior').click(maior);
    $('#btnRemover').click(remover);
    $('#btnEmOrdem').click(mostrarEmOrdem);
    $('#btnPreOrdem').click(mostrarPreOrdem);
    $('#btnPosOrdem').click(mostrarPosOrdem);
    $('#btnAltura').click(mostrarAltura);
    $('#btnTamanho').click(mostrarTamanho);
});
//aliado às facilidades da tipagem dinâmica, o que torna a definição de métodos simples e prática. 
//Para criar funções, utilizamos a palavra reservada function.
//As funções podem receber parâmetros e retornar valores, mas o tipo de retorno e o tipo dos 
//parâmetros não precisa ser previamente definido.
function mostrarItem(item){
    //Variáveis declaradas com let são "içadas" para começo do bloco em que elas são definidas (isso é conhecido também pelo termo, hoisting).
    let el = $('#saida');
    el.empty();
    el.append(`<span class=gitdsfsdfdsfasdf"ui label">${item}</span>`);
}
function incluir(item){
    $('#saida').append(`<span class="ui label">${item}</span>`);
}
//Assim como a maioria das linguagens de alto nível, JavaScript possui estruturas condicionais e
// de repetição para controle de fluxo
//O bloco else pode ser omitido, caso apenas uma condição precise ser avaliada, dependendo do seu valor, uma mensagem é exibida na tela.
function inserir(){
    let num = parseInt(prompt("informe o numero a inserir na arvore:"));
    if(tree.search(num))
        mostrarItem('O elemento já existe!');
    else{
        tree.insert(num);
        mostrarItem('Inserido: '+num);
    }
       
}
function buscar(){
    let num = parseInt(prompt("informe o numero a ser buscado na arvore:"));
    if(tree.search(num)){
        alert('Numero foi encontrado na arvore!');
    }else{
        alert('Numero não encontrado na arvore!');
    }
}
function menor(){
    alert('menor valor: '+tree.min());
}
function maior(){
    alert('maior valor: '+tree.max());
}
function remover(){
    let num = parseInt(prompt("informe o numero a ser removido na arvore:"));
    if(tree.search(num)){
        tree.remove(num);
        mostrarItem('O elemento foi removido!');
    }else{
        mostrarItem('O elemento não existe');
    }
}
function mostrarEmOrdem(){
    $('#saida').empty();
    tree.inOrderTraverse(incluir);
}
function mostrarPreOrdem(){
    $('#saida').empty();
    tree.preOrderTraverse(incluir)
}
function mostrarPosOrdem(){
    $('#saida').empty();
    tree.postOrderTraverse(incluir)
}
function mostrarAltura(){
    alert("Altura: "+tree.heigth());
}

function mostrarTamanho(){
    alert("Tamanho: "+tree.size());
}