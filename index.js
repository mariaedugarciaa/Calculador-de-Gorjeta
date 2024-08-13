//como fixar a dus casas decimasi cirar uma função e passa um valor
function formatMoney(value){
    value=Math.ceil(value * 100) /100  //pega o valor e arredonda um poquinho mais ,qr arredondar no ultimo digito
    value=value.toFixed(2)
    return '$ ' + value 
}
function formatSplit(value){
    if(value==1) return value + ' pessoa'//se eu selecionar em baixo e tiver o numero um, ele vai retornar o valor, que é o numero mais a palavra pessoas 
    return value + ' pessoas'//se nao ele vai pegar o valor e colocar pessoas , se for mais de um 
}
function update(){
    let bill=Number(document.getElementById('yourBill').value)
    let tipPercent=document.getElementById('tipInput').value
    let split=document.getElementById('splitInput').value//.value serve para pegar o valor dela
    console.log(bill,tipPercent,split)


    let tipValue=bill*(tipPercent/100)
    let billTotal=bill+tipValue
    let billEach=billTotal/split
    //pegando os calculos e jogando para o html

    document.getElementById('tipPercent').innerHTML=tipPercent + ' %'//inner html serve para inserir de volta no html, se eu colocr o inner nn selecona
    document.getElementById('tipValue').innerHTML=formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML=formatMoney(billTotal)
    document.getElementById('splitValue').innerHTML=formatSplit(split)
    document.getElementById('billEach').innerHTML=formatMoney(billTotal/split)
}
