function contagem() {
    let saida = document.getElementById('saida')

    saida.innerHTML += `<h2>Contando...</h2>`

    let cont = 1
    while (cont <= 20) {
        saida.innerHTML += ` ${cont}  &#10141;` /* https://unicode-table.com/pt/ */
        cont ++ 
    }
    saida.innerHTML += `  &#128681;`
}