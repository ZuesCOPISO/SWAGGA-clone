document.querySelector('[confirm]').addEventListener('click',calculate)
function calculate () {
    let femalequantity = +document.querySelector('[femaleqty]').value
    let malequantity = +document.querySelector('[maleqty]').value
    let Output1= document.querySelector('[femaleOutput]')
    let Output2= document.querySelector('[maleOutput]')
    let price1= +document.querySelector('#femalePrice')
    let price2= +document.querySelector('#femalePrice')
    let totalPrice = document.querySelector('#totalBtn')
    Output1.innerText = parseFloat(`${price1.innerText}*${femalequantity}`).toFixed(2)
Output2.innerText = parseFloat(`${price2.innerText}*${malequantity}`).toFixed(2)
totalPrice.innerText = parseFloat(`${Output1.innerText}+${Output2.innerText}`).toFixed(2)
}
  