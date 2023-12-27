function generateNumber() {
    document.getElementById('button-sortear').disabled = true;

    const entre = Math.ceil(document.querySelector('#input-entre').value)
    const e = Math.floor(document.querySelector('#input-e').value)
    const result = Math.floor(Math.random() * (entre - e + 1)) + e;

    document.getElementById('button-sortear').textContent = `Resultado do sorteio: ${result}`;
}

