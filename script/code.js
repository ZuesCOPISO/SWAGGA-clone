document.querySelector('[confirm]').addEventListener('click',calculate)
function calculate (params) {
    let quantity = +document.querySelector('#qty').value
    let Output= document.querySelector('[Output]')
    let price= document.querySelector('#price')
    let myPromise = new Promise( (resolve , reject) => {
        if (quantity <1 )
            reject('Please make sure you have specified how many quantities you want')
            else
            resolve(quantity*price)
        }
    )
    myPromise.then(value => {
        Output.textContent =parseFloat(value)
    })
    .catch(value => {
        Output.textContent= parseFloat(value)
    })
}
  