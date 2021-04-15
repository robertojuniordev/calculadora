function calcular() {
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let sinal = document.getElementById("operacao").value;
    let resultado = document.getElementById("resultado");

    if (sinal == "+") {resultado.value = valor1 + valor2};
    if (sinal == "-") {resultado.value = valor1 - valor2};
    if (sinal == "*") {resultado.value = valor1 * valor2};
    if (sinal == "/") {resultado.value = valor1 / valor2}; 
}