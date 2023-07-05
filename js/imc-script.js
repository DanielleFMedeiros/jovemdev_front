window.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('form');
  var txtNome = document.querySelector('#txtNome');
  var txtPeso = document.querySelector('#txtPeso');
  var txtAltura = document.querySelector('#txtAltura');
  var txtResultado = document.querySelector('#txtResultado');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var nome = txtNome.value;
    var peso = parseFloat(txtPeso.value);
    var altura = parseFloat(txtAltura.value);
    var sexo = document.querySelector('input[name="sexo"]:checked').value;

    var imc = peso / (altura * altura);

    var resultado = '';

    if (sexo === 'masculino') {
      if (imc < 20.7) {
        resultado = 'Abaixo do peso';
      } else if (imc > 20.7 && imc < 26.4 ) {
        resultado = 'Peso normal';
      } else if (imc > 26.4 && imc < 27.8) {
        resultado = 'Marginalmente acima do peso';
      } else if (imc > 27.8 && imc < 31.1) {
        resultado = 'Acima do peso ideal';
      } else {
        resultado = 'Obeso';
      }
    } else if (sexo === 'feminino') {
      if (imc < 19.1) {
        resultado = 'Abaixo do peso';
      } else if (imc > 19.1 && imc < 25.8) {
        resultado = 'Peso normal';
      } else if (imc > 25.8 && imc < 27.3) {
        resultado = 'Marginalmente acima do peso';
      } else if (imc > 27.3 && imc < 32.3) {
        resultado = 'Acima do peso ideal';
      } else {
        resultado = 'Obeso';
      }
    }

    var mensagem = 'Nome: ' + nome + '\n';
    mensagem += 'Sexo: ' + (sexo === 'masculino' ? 'Masculino' : 'Feminino') + '\n';
    mensagem += 'Peso: ' + peso + ' kg\n';
    mensagem += 'Altura: ' + altura + ' metros\n';
    mensagem += 'IMC: ' + imc.toFixed(2) + '\n';
    mensagem += 'Resultado do IMC: ' + resultado;
    
    txtResultado.value = mensagem;
    
  });
});
