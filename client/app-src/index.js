var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

console.log(campos); //mostra no console do browser

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {

    event.preventDefault();

    var tr = document.createElement('tr');

    campos.forEach(function(campo) {

        var td = document.createElement('td'); //cria uma <td>

        td.textContent = campo.value; //atribui o valor do campo à <td>

        tr.appendChild(td); //adiciona a <td> na <tr>
    });

    var tdVolume = document.createElement('td'); //nova <td> referente ao volume

    tdVolume.textContent = campos[1].value * campos[2].value; //as posições 1 e 2 do array armazenam os campos de quantidade e valor, respectivamente

    tr.appendChild(tdVolume); //adicionando a <td> que faltava na <tr>

    tbody.appendChild(tr); //adicionando a <tr>
});

campos[0].value = ''; //limpa o campo da data
campos[1].value = 1; //limpa o campo da quantidade
campos[2].value = 0; //limpa o campo do valor
campos[0].focus(); //foca o campo da data