let carros = function(){
    let modelo = document.getElementById("modelo").value
    let marca = document.getElementById("marca").value
    let custoFabricacao = parseFloat(document.getElementById("custoFabricacao").value)

    let precoVenda = custoFabricacao * 1.30

    document.getElementById('resultado').innerHTML =
    `   Modelo: ${modelo}
        Marca: ${marca}<br>
        Preço de Venda: ${precoVenda}`
}