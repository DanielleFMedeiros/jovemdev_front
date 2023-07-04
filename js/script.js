/*document.getElementById("form-agendamento").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Exibe o alerta com a mensagem
    alert("Entraremos em contato para avisar sobre a disponibilidade da data marcada. Obrigada!");
});*/

//tentar usar const em tudo.
function enviaForm(){
    nome = document.getElementById('txtNome').value;
    idade = document.getElementById('txtIdade').value;
    msg = `Nome: ${nome}\nIdade:${idade}`;
    document.getElementById('txtDados').value=msg;
    return false;
}
function tiposDados() {
    console.log("37" - 7)
    console.log("37" + 7)
    console.log("1.1" + "1.1");
    console.log((+"1.1") + (+"1.1"));
    console.log(parseFloat("1.1") + parseFloat("1.1"));

    let numeroComoString = "123.1";
    let numero = parseInt(numeroComoString);

    let numero2 = Number(numeroComoString);
    console.log(numero2 + 1);

    let booleanComoString = "";
    let b = Boolean(booleanComoString)
    if (b == true) {
        console.log("Verdadeiro: " + b)
    } else {
        console.log("Falso: " + b)
    }
}

function olaMundo() {
    var nome = 'Dani';
    var peso = 64;
    var altura = 1.74;

    console.log(`O nome é: ${nome}, a altura é: ${altura} e o peso é: ${peso}`);


    var imc = peso / altura * altura;
    console.log('IMC: ' + imc);

    var obj = new Object();
    obj.nome = "Mariazinha";
    obj.idade = 9;
    obj.altura = 1.30;
    obj.ehMenina = true;
    console.log(obj);

    var obj2 = {
        nome: "Ana",
        peso: 55,
        altura: 1.5

    }
    console.log('IMC de ' + obj2.nome + ': ' + (obj2.peso / obj2.altura * obj2.altura));

    var frutas = ['Maçã', 'Laranja', 'Banana'];
    console.log(frutas[1]);
    frutas.push('Goiaba');
    console.log(frutas);

    const idade = 50;

    if (idade > 18) {

        let msg1 = "Essa variável está visível apenas dentro do IF";

        var msg2 = "Essa variável está visível FORA do IF";

    }

    // idade = 51; //erro

    //console.log(msg1); //erro

    console.log(msg2); //OK
}

function tiposErros() {
    var teste1;

    console.log(teste1) //undefined - valor não atribuído

    var teste2 = null;

    console.log(teste2); //null - valor nulo

    var n = 20;

    var str = "Texto";

    console.log(n * str); //NaN - erro de conversão

    console.log(2e3);//OK exibe 2000

    console.log(2e4);//OK exibe 20000

    console.log(2e308);//estoura o limite do javascript - Infinity

}


