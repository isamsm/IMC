function IMC() {
    const nome = document.getElementById("nome").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const p = document.getElementById("resposta");
    const m = peso / (altura * altura);
    let i;

    if (m < 16) {
        i = "baixo peso muito grave";
    } else if (m > 16 && m < 16.99) {
        i = "baixo peso grave";
    } else if (m > 17 && m < 18.49) {
        i = "baixo peso";
    } else if (m > 18.50 && m < 24.99) {
        i = "peso normal";
    } else if (m > 24 && m < 29.99) {
        i = "sobrepeso";
    } else if (m > 30 && m < 34.99) {
        i = "obesidade de primeiro grau";
    } else if (m > 35 && m < 39.99) {
        i = "obesidade de segundo grau";
    } else if (m > 40) {
        i = "obesidade de terceiro grau";
    }
    p.textContent = nome + " possui indice de massa corporal igual a " + m + " sendo classificado como " + i;
}