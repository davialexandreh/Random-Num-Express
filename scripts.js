function generateNumber() {
    document.getElementById('button-sortear').disabled = true;

    const entre = Math.ceil(document.querySelector('#input-entre').value)
    const e = Math.floor(document.querySelector('#input-e').value)

    if (entre >= e) {
        alert('O valor no campo "entre" tem que ser menor que o valor no campo "e"! \nPor favor, atualize a página.')
    } else {
        const result = Math.floor(Math.random() * (entre - e + 1)) + e;
        document.getElementById('button-sortear').textContent = `Resultado do sorteio: ${result}`;
    }
}

