document.querySelector('[confirm]').addEventListener('click', calculate)
function calculate() {
    let femalequantity = +document.querySelector('[femaleqty]').value
    let malequantity = +document.querySelector('[maleqty]').value
    let Output1 = document.querySelector('[femaleOutput]')
    let Output2 = document.querySelector('[maleOutput]')
    let price1 = +document.querySelector('[femalePrice]').textContent
    let price2 = +document.querySelector('[malePrice]').textContent
    let totalPrice = document.querySelector('#totalBtn')
    Output1.innerText = parseFloat(eval(`${price1}*${femalequantity}`)).toFixed(2)
    Output2.innerText = parseFloat(eval(`${price2}*${malequantity}`)).toFixed(2)
    totalPrice.innerText = parseFloat(eval(`${Output1.innerText}+${Output2.innerText}`)).toFixed(2)
}




  