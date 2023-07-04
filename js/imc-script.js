document.getElementById('imc-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário
  
    // Obter os valores dos campos
    var nome = document.getElementById('nome').value;
    var sexo = document.querySelector('input[name="sexo"]:checked').value;
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
  
    // Calcular o IMC
    var imc = peso / (altura * altura);
  
    // Definir a tabela de resultados do IMC
    var tabelaResultados = {};
  
    // Definir a tabela de resultados para mulheres
    tabelaResultados['feminino'] = {
      'abaixoPeso': [0, 19.1],
      'pesoIdeal': [19.1, 25.8],
      'poucoAcimaPeso': [25.9, 27.3],
      'acimaPeso': [27.4, 32.3],
      'obesidade': [32.4, Infinity]
    };
  
    // Definir a tabela de resultados para homens
    tabelaResultados['masculino'] = {
      'abaixoPeso': [0, 20.7],
      'pesoIdeal': [20.7, 26.4],
      'poucoAcimaPeso': [26.5, 27.8],
      'acimaPeso': [27.9, 31.1],
      'obesidade': [31.2, Infinity]
    };
  
    // Definir a categoria com base no IMC e sexo
    var categoria = "";
    var tabelaSexo = tabelaResultados[sexo];
    for (var key in tabelaSexo) {
      var faixa = tabelaSexo[key];
      if (imc >= faixa[0] && imc <= faixa[1]) {
        categoria = key;
        break;
      }
    }
  
    // Exibir o resultado
    var resultado = "Nome: " + nome + "\n" +
      "Sexo: " + sexo + "\n" +
      "IMC: " + imc.toFixed(2) + "\n" +
      "Categoria: " + categoria;
    document.getElementById('resultado').value = resultado;
  });

  function enviaForm(){
    nome = document.getElementById('txtNome').value;
    idade = document.getElementById('txtIdade').value;
    msg = `Nome: ${nome}\nIdade:${idade}`;
    document.getElementById('txtResultado').value=msg;
    return false;
}
  