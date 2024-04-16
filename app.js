function sortear(){
    var a = window.document.getElementById('first_number').value
    var b = window.document.getElementById('second_number').value

    if (a === '' || b === '' || isNaN(a) || isNaN(b)) {
        notie.alert({ text: `Por favor, insira números válidos em ambos os campos`, type: 3 });
        return; // Encerrar a função se os valores não forem válidos
    }

    a = Number(a);
    b = Number(b);
    var intervalo = Math.abs (a - b) + 1
    var numero_sorteado = Math.floor(Math.random() * intervalo) + Math.min(a, b);
    notie.alert({text: `O número sorteado é ${numero_sorteado}`, type: 1})
 
}